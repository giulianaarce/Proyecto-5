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


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      productos: "",
      formulario: "",
      banner:"",
    }
  }
  //Productos
  componentDidMount() {
    fetch("http://localhost:4200/productos")
      .then((res) => {
        return res.json()
      }).then((json) => {
        this.setState({ productos: json })
      })
      fetch("http://localhost:4200/banner")
      .then((res)=>{return res.json()})
      .then((json)=>{return this.setState({banner: json})})
  }

  enviar = (name, email, phone, subject, message) => {
    const form = {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message
    }
    fetch("http://localhost:4200/contactos",{
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' }
    })
    .then((res)=>{return res.json()})
    .then((json)=>{return console.log(json)})
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/home"><Home datas={this.state.banner || []} /></Route>
            <Route path="/contact"><Contact enviar={this.enviar} /></Route>
            <Route path="/products"><Products productos={this.state.productos || []} /></Route>
            <Route path="*"><Redirect to="/home" /></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

