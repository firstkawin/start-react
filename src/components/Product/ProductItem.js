import React, { Component } from "react";

class ProductItem extends Component {

    constructor(porps){
        super(porps);
        console.log('constr| '+ this.props.productName);
    }

    render() {
        const { productName, unitPrice } = this.props;
        return (
            <div>
                <p>{productName}</p>
                <p>{unitPrice}</p>
            </div>)
    }
}

export default ProductItem;