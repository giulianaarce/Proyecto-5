import React from 'react'
import ProductItem from './ProductItem'

export default class Products extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render() {
        return(
                <>
                <ul className="list-group">
                    {this.props.productos.map((product)=>{
                        return(
                            <ProductItem title={product.title}
                                         description={product.description}
                                         imgUrl= {product.imgUrl}
                                         inStock= {product.inStock}
                                         price= {product.price}
                                         currency={product.currency}
                                         discountPrice={product.discountPrice} />
    
                                    
                        )
                    })}
                </ul>
            </>
        );
    }
}