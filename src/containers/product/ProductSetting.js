import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Axios from 'axios';
import { withRouter } from "react-router-dom";

class ProductSetting extends Component {

    constructor(props) {
        super(props);
        this.state = { products: null };
    }

    componentDidMount() {
        Axios.get("http://localhost:3002/products").then(res => {
            console.log(res.data);
            this.setState({ products: res.data })
        })
    }

    delProduct(product) {
        Axios.delete("http://localhost:3002/products/" + product.id).then(res => {
            Axios.get("http://localhost:3002/products").then(res => {
                this.setState({ products: res.data })
            })
        })
    }
    edit(product){
        this.props.history.push('/productSetting/edit/'+ product.id)
    }
    showProduct() {
        return this.state.products && this.state.products.map(product => {
            return (
                <div key={product.id} className="col-md-2">
                    <img className="img-fluid img-thumbnail mb-1" src={require(`../../components/Car.jpg`)} />
                    {product.productName}
                    <ul>
                        <li>
                            <small>
                                {product.unitPrice + " THB"}
                            </small>
                        </li>
                    </ul>
                    <button className="btn btn-info btn-sm btn-block" onClick={()=> this.edit(product)} >Edit</button>
                    <button className="btn btn-danger btn-sm btn-block" onClick={() => this.delProduct(product)}>Delete</button>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <h1>Setting</h1>
                        </div>
                        <div className="col-md-8 text-right">
                            <button className="btn btn-primary btn-sm mt-3" onClick={()=> this.props.history.push('productSetting/add')}>+Product</button>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        {this.showProduct()}
                    </div>
                </div>
                <Footer />
            </div>
        );
    };

}

export default withRouter(ProductSetting);