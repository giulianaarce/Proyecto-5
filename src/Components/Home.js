import React from 'react'
import Banner from './Banner'

export default class Home extends React.Component{
    constructor(){
        super()
        this.state={}
        
    }
   
    render(){
        return(
            <>
            {this.props.datas.map((data)=>{
                return(
                    <div>
                        <Banner title={data.title} link={data.link} banner={data.imgUrl}/>
                    </div>
                )
            })}
            </>
        )
    }
}