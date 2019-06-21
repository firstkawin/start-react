import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/Header"
import '../../components/card.css';
import { withRouter } from "react-router-dom";


class ProductCard extends Component {

 

    doSomething(productName){
      console.log(productName);
    }

    render() {
        const props = this.props.product;
        return (
            <div className="card container-fluid">
                <img className="img-fluid" src={require(`../../components/Car.jpg`)}/>
                <p className="text-life ml-2">{props.productName}</p>
                <p className="text-right mr-2">{props.unitPrice + " "}THB</p>
                <button className="btn btn-secondary cardBtn mb-2 mr-2 ml-2" onClick={()=>this.props.onAddOrder(this.props.product)}> Add to Cart</button>
            </div>
        )
    }
}
export default withRouter(ProductCard);