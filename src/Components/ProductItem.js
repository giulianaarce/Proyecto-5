import React from 'react'


export default class ProductItem extends React.Component {


    render() {
        return (

            
            <div className="card mb-3" style={{ maxWidth: 900, backgroundColor:"#AFDCFF" }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={this.props.imgUrl} className="card-img" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"><strong>{this.props.title}</strong></h5>
                            <p className="card-text">{this.props.description}</p>
                            <p className="card-text">En stock: {this.props.inStock}</p>
                            <p className="text-success" style= {{fontSize:20}}> Precio:<strong> {this.props.currency} {this.props.price}</strong></p>
                        </div>
                    </div>
                </div>
                </div>
        );
    }
}
