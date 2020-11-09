import React from 'react';
import MapView from './MapView';

export default class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email :"",
            phone :"",
            theme : "",
            message : "",
            visible: false
        }
    }
    handleNameChange = (e)=>{
        this.setState({name: e.target.value});
    }
    handleEmailChange = (e)=>{
        this.setState({email: e.target.value})
    }
    handlePhoneChange = (e)=>{
        this.setState({phone: e.target.value})
    }
    handleThemeChange = (e)=>{
        this.setState({theme: e.target.value})
    }
    handleMessageChange = (e)=>{
        this.setState({message: e.target.value})
    }
    handleClick = ()=>{
        const {name, email, phone, theme, message} = this.state;
        this.props.enviar(name, email, phone, theme, message);
    }
    render(){
        return(
            <> 
                <h2 id="estilo">Contacto</h2>
                <form>   
                        <div className="form-group" style={{width: '30rem'}}>
                            <label htmlFor="name">Nombre</label>
                            <input type="text" className="form-control" id="name" onChange={this.handleNameChange} required/>
                        </div>
                        <div className="form-group" style={{width: '30rem'}}>
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={this.handleEmailChange} required/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group" style={{width: '30rem'}}>
                            <label htmlFor="phone">Teléfono</label>
                            <input type="number" className="form-control" id="phone" onChange={this.handlePhoneChange} required/>
                        </div>
                        <div class="form-group" style={{width: '30rem'}} >
                            <label for="theme">Temas</label>
                            <select class="form-control" id="theme" onChange={this.handleThemeChange} required>
                                <option value="">Seleccione un Tema</option>
                                <option value="venta">Venta</option>
                                <option value="trabajo">Trabajo</option>
                                <option value="reparacion">Reparación</option>
                                <option value="otros">Otros</option>
                            </select>
                        </div>
                        <div className="form-group" style={{width: '30rem'}}>
                            <label htmlFor="message">Mensaje</label>
                            <textarea className="form-control" id="message" rows={3} defaultValue={""} onChange={this.handleMessageChange} required/>
                        </div>
                        <>
                            <button className="btn btn-primary" type="submit" onClick={this.handleClick} color="success">Enviar</button>
                        </>
                    </form>
                    <>
                        <h2 id="estilo">Mapa</h2>
                        <MapView></MapView>
                    </>
            </>

        )

        
    }
}