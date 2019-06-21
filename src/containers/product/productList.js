import React, {Component} from "react";
import ProductItem from "./productItem";


class ProductList extends Component{

showProducts(){
    if(this.props.products){
       return this.props.products.map(product => (
            <ProductItem product={product} productName={product.productName} unitPrice={product.unitPrice} onAddOrder={this.props.onAddOrder} />
        ))
    }
}

    render(){
        return(
            <div className="row">
                {this.showProducts()}
            </div>
        )
    }
}
export default ProductList;