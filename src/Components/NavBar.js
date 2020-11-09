import React from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#69A0CB"}} >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/home" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        <Link to="/products" className="nav-link">Products</Link>
                        <Link to="/contact" className="nav-link" >Contact</Link>
                    </div>
                </div>
            </nav>
        )
    }
}