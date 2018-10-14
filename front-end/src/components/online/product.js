import React from 'react';
//import PropTypes from 'prop-types';
import ProductActions from '../../actions/productActions';

export class Product extends React.Component{
    constructor(props) {
        super(props);
    }


    componentDidMount(){
        ProductActions.getProductById(this.props.match.params.id);
    }



    render(){

        return (
            <div className="container">

                <div className="row">

                    <div className="col-lg-3">
                        <h1 className="my-4">Shop Fashion</h1>
                        <div className="list-group">
                            <a href="#" className="list-group-item active">Long Sleeve</a>
                            <a href="#" className="list-group-item">Short Sleeve</a>
                            <a href="#" className="list-group-item">Polos</a>
                        </div>
                    </div>
                    <div className="col-lg-9">

                        <div className="card mt-4">
                            <img className="card-img-top img-fluid" src="https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw32bdf69a/images/2018/1V0923.974.a.zoom.jpg?sw=1184&sh=1410&sm=cut" alt=""/>
                                <div className="card-body">
                                    <h3 className="card-title">{this.props.product.productName}</h3>
                                    <h4>{this.props.product.price}</h4>
                                    <p className="card-text"></p>
                                    <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
                                    4.0 stars
                                </div>
                            <button type="button" className="btn btn-primary">Add to cart</button>
                        </div>
                        <div className="card card-outline-secondary my-4">
                            <div className="card-header">
                                Product Reviews
                            </div>
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam
                                    inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam
                                    aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                                <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                                <hr/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam
                                        inventore, similique necessitatibus neque non! Doloribus, modi sapiente
                                        laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint
                                        natus.</p>
                                    <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                                    <hr/>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim
                                            aperiam inventore, similique necessitatibus neque non! Doloribus, modi
                                            sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus
                                            quae sint natus.</p>
                                        <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                                        <hr/>
                                            <a href="#" className="btn btn-success">Leave a Review</a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        )

    }
}

export default Product;