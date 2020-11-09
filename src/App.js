import './App.css';
import React from 'react';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Products from './Components/Products';
import NavBar from './Components/NavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
let confirmacion = undefined


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      productos: "",
      formulario: "",
      banner: "",
      dataHome:""
    }
  }

  componentDidMount() {
    this.token()
    this.confirmar()
    if (localStorage.getItem("confirmacion") == null) {
      localStorage.setItem("confirmacion", confirmacion);
      if (confirmacion === true) {
        this.inicioUsuario()

      }
    }

    fetch("http://localhost:4200/productos")
      .then((res) => {
        return res.json()
      }).then((json) => {
        this.setState({ productos: json })
      })
    fetch("http://localhost:4200/banner")
      .then((res) => { return res.json() })
      .then((json) => { return this.setState({ banner: json }) })
    
      fetch("http://localhost:4200/home")
    .then((res)=>{return res.json()})
    .then((json)=>{return this.setState({dataHome: json})})

  }
  //Funciones
  confirmar = () => {
    if (localStorage.getItem("confirmacion") === null) {
      confirmacion = window.confirm("Desea ingresar Nombre e email?")
      console.log("confirmacion", confirmacion)
      localStorage.setItem("confirmacion", confirmacion);
      if (confirmacion === true) {
        this.inicioUsuario()

      }
    }
  }
  //Inicio Usuario
  inicioUsuario = () => {
    this.nombreValid();
    this.emailValid();
    this.sendUser()
  }
  //Validar nombre
  nombreValid = (nombre) => {
    do {
      nombre = prompt("Ingrese su nombre");

      if (nombre.trim() === "") {
        alert("Ingrese datos validos");
      } else { return localStorage.setItem("nombre", nombre); }
    } while (nombre === "" || nombre !== undefined);
  }
  //Validar y Guardar email
  guardarEmail = (email) => {
    email = prompt("Ingrese su email");
    let arrEmail = email.split("");
    if (arrEmail.includes("@") && arrEmail.includes(".")) {
      localStorage.setItem("email", email);
      this.enviarMail();
    } else {
      alert("Datos invalidos");
    }
  }
  emailValid = (email) => {
    do {
      this.guardarEmail(email);
    } while (localStorage.getItem("email") === null);
  }
  //Confirmar si quiere recibir mail
  enviarMail = (mail) => {
    mail = window.confirm("Desea recibir mails con novedades?");
    if (mail === true) {
      alert(
        "Estaremos enviandole las ultimas novedades a " +
        localStorage.getItem("email")
      );
      localStorage.setItem("mail", mail);

    }
  }
  //Generar Token
  token = () => {
    let name = "";
    let email = "";
    let fecha = new Date();
    let hora = fecha + name + email;
    return localStorage.setItem("token", hora)
  }
  //Enviar datos de Usuario
  sendUser = () => {
    const arrUsuario = {
      token: localStorage.getItem("token"),
      name: localStorage.getItem("nombre"),
      email: localStorage.getItem("email"),
      sendEmail: localStorage.getItem("mail")
    }
    fetch("http://localhost:4200/user",{
    method: 'POST',
    body: JSON.stringify(arrUsuario) ,
    headers:{'Content-Type':'application/json'}
    }).then((res)=>{return res.json()})
    .then((json)=>{return console.log(json)})
  }
  //Enviar Formulario
  enviar = (name, email, phone, subject, message) => {
    const form = {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message
    }
    fetch("http://localhost:4200/contactos", {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => { return res.json() })
      .then((json) => { return console.log(json) })
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/home"><Home banner={this.state.banner || []} dataHome={this.state.dataHome || []} /></Route>
            <Route path="/contact"><Contact enviar={this.enviar} /></Route>
            <Route path="/products"><Products productos={this.state.productos || []} /></Route>
            <Route path="*"><Redirect to="/home" /></Route>
          </Switch>
        </Router>
        <footer>Guayerd Bikes - Grupo B</footer>
      </>
    )
  }
}

