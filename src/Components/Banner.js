import React from 'react'

export default class Banner extends React.Component{
    render(){
        return(
        <h1>{this.props.banner}</h1>
        )
    }
}