import React, { Component } from "react";
import ProductCard from "../../containers/product/ProductCard";
import ProductList from "../../containers/product/productList";
import Calculator from "./calculatot";
import Axios from "axios";

class Monitor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            totalPrice: 0,
            orders: [],
            confirm: false,
            msg: ""
        };
        this.addOrder = this.addOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
        this.confirmOrder = this.confirmOrder.bind(this);
    }

    addOrder(product) {
        let findOrder = this.state.orders.find(order => order.product.productId == product.productId);
        if (findOrder) {
            findOrder.quantity++;
        } else {
            this.state.orders.push({ product: product, quantity: 1 })
        }
        const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
        this.setState({ totalPrice: totalPrice, orders: this.state.orders, confirm: false });
        console.log(totalPrice);
    }

    deleteOrder(product) {
        let findOrder = this.state.orders.find(order => order.product.productId == product.productId);
        let orders = this.state.orders.filter(order => order.product.productId != product.productId);
        const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.unitPrice));
        this.setState({ totalPrice: totalPrice, orders: orders, confirm: false })
    }

    cancelOrder() {
        this.setState({ totalPrice: 0, orders: [], confirm: false, msg: "" });
    }

    confirmOrder() {
        const { totalPrice, orders } = this.state;
        if (orders && orders.length > 0) {
            Axios.post("http://localhost:3002/orders", { oderedDate: new Date(), totalPrice, orders })
                .then(res => {
                    this.setState({ totalPrice: 0, orders: [], confirm: true, msg: "Save orders complete." });
                })
        } else this.setState({ totalPrice: 0, orders: [], confirm: true, msg: "Please select orders." });

    }

    render() {
        return (
            <div className="container-fluid">
                {this.state.confirm &&
                    <div className="alert alert-secondary text-center text-success mt-2" role="alert">
                        {this.state.msg}
                    </div>
                }
                <div className="row">
                    <div className="col-md-9">
                        <ProductList products={this.props.products} onAddOrder={this.addOrder} />
                    </div>
                    <div className="col-md-3">
                        <Calculator products={this.props.products} totalPrice={this.state.totalPrice} orders={this.state.orders} onDeleteOrder={this.deleteOrder} onCancelOrder={this.cancelOrder} onConfirmOrder={this.confirmOrder} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Monitor;