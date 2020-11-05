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


export default class App extends React.Component{
  constructor(){
    super() 
    this.state={
      productos:{}
    }
  }
  //Productos
  componentDidMount(){
    fetch("http://localhost:4200/productos")
    .then((res)=>{
      return res.json()
    }).then((json)=> {
      this.setState({productos:json})
    })

  }
  
  render(){
    return(
      <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/home"><Home/></Route>
          <Route path="/contact"><Contact/></Route>
          <Route path="/products"><Products/></Route>
          <Route path="*"><Redirect to="/home"/></Route>
        </Switch>
      </Router>
      </>
    )
  }
}

