import React from 'react'

export default class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email :"",
            phone :"",
            theme : "",
            message : ""
        }
    }
    handleNameChange = (e)=>{
        this.setState({name: e.target.value});
    }
    handleEmailChange = (e)=>{
        this.setState({email: e.target.value});
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
                        <input type="text" className="form-control" id="name" onChange={this.handleNameChange}/>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="form-group" style={{width: '30rem'}}>
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={this.handleEmailChange}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="form-group" style={{width: '30rem'}}>
                        <label htmlFor="phone">Teléfono</label>
                        <input type="number" className="form-control" id="phone" onChange={this.handlePhoneChange}/>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="form-group" style={{width: '30rem'}} onChange={this.handleThemeChange}>
                        <label for="theme">Temas</label>
                        <select class="form-control" id="theme">
                            <option value="">Seleccione un Tema</option>
                            <option value="venta">Venta</option>
                            <option value="trabajo">Trabajo</option>
                            <option value="reparacion">Reparación</option>
                            <option value="otros">Otros</option>
                        </select>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="form-group" style={{width: '30rem'}}>
                        <label htmlFor="message">Example textarea</label>
                        <textarea className="form-control" id="message" rows={3} defaultValue={""} onChange={this.handleMessageChange}/>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit" onClick={this.handleClick}>Enviar</button>

                    </form>
                    <h2 id="estilo">Mapa</h2>
            </>

        )

        
    }
}