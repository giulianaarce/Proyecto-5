import React from 'react'


export default class ProductItem extends React.Component {


    render() {
        return (
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={this.props.imgUrl} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.description}</p>
                            <p className="card-text"><small className="text-muted">{this.props.inStock}
                            {this.props.currency}{this.props.price}{this.props.discountPrice} </small></p>
                        </div>
                    </div>
                </div>
                </div>
                




        );
    }
}
