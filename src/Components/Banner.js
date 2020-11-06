import React from 'react'

export default class Banner extends React.Component{
    render(){
        return(
           <a href={this.props.link}><img src={this.props.banner} title={this.props.title} className="card-img"  /></a>
        )
    }
}