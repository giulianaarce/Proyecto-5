import React from 'react'


export default class ProductItemDis extends React.Component {


    render() {
        return (

            
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={this.props.imgUrl} className="card-img"  />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.description}</p>
                            <p className="card-text">En stock: {this.props.inStock}</p>
                            <p className="card-text">Precio antes:<s> {this.props.currency} {this.props.price}</s></p>
                            <p className="card-text">Precio ahora:<strong> {this.props.currency} {this.props.discountPrice}</strong></p> 
                        </div>
                    </div>
                </div>
                </div>
        );
    }
}