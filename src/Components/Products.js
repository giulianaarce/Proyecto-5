import React from 'react'
import ProductItem from './ProductItem'
import ProductItemDis from './ProductItemDis'

export default class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        if (localStorage.getItem("nombre")) {
            this.cuponDescuento()
        }
    }
    cuponDescuento = () => {
        fetch("http://localhost:4200/cupones")
            .then(function (response) {
                return response.json();
            }).then((cupones) => {
                this.descuento(cupones);
            })
    }
    descuento = (datos) => {
        datos.forEach(function (dato) {

            window.alert(`Con este codigo ${dato.text} tenes un descuento de ${dato.discountPercentage}%`);
        })
    }
    render() {
        return (
            <>
                <ul className="list-group">
                    {this.props.productos.map((product) => {
                        if (product.discountPrice) {
                            return (
                                <ProductItemDis title={product.title}
                                description={product.description}
                                imgUrl={product.imgUrl}
                                inStock={product.inStock}
                                price={product.price}
                                currency={product.currency}
                                discountPrice={product.discountPrice} />
                            )
                        } else {

                            return (
                                <ProductItem title={product.title}
                                    description={product.description}
                                    imgUrl={product.imgUrl}
                                    inStock={product.inStock}
                                    price={product.price}
                                    currency={product.currency}/>


                            )
                        }
                    })}
                </ul>
            </>
        );
    }
}