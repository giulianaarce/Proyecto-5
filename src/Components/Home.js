import React from 'react'
import Banner from './Banner'

export default class Home extends React.Component{
    render(){
        return(
            <>
            <h1>Home</h1>
            <Banner banner={"Banner"}/> 
            </>
        )
    }
}