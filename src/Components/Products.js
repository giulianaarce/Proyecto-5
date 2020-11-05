import React from 'react'
import Product from './ProductItem'

export default class Products extends React.Component{

    
    render(){
        return
            <>
                <ul className="list-group">
                    {this.props}
                    return(
                        <Product  title = {product},
                                  description={} , 
                                  imgUrl={} , 
                                  inStock= {}, 
                                  price= {},
                                  currency= {},
                                  discountPrice={} />
                                  )
            

        </ul>
    </>
    
    }
}