import React, { Component } from "react";
import ProductCard from "./ProductCard";


class ProductItem extends Component {

    render() {
        const product = this.props.product;
        return (
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <ProductCard product={product} onAddOrder={this.props.onAddOrder} />
                </div>
            </div>
        )
    }
}
export default ProductItem;