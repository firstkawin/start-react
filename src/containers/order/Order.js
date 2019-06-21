import React, { Component } from "react";
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import '../../components/card.css';
import Axios from "axios";

class Order extends Component {

    constructor(props) {
        super(props)
        this.state = { orders: null };
    }

    componentDidMount() {
        Axios.get("http://localhost:3002/orders").then(res => {
            this.setState({ orders: res.data });
        })
    }

    delOrder(order) {
        Axios.delete("http://localhost:3002/orders/" + order.id).then(res => {
            Axios.get("http://localhost:3002/orders").then(res => {
                this.setState({ orders: res.data });
            })
        })


    }

    showOrders() {
        return this.state.orders && this.state.orders.map(order => {
            const date = new Date(order.oderedDate);
            return (
                <div key={order.id} className="col-md-2">
                    <hr />
                    <p className="text-right">
                        <button className="btn btn-danger btn-sm" onClick={() => this.delOrder(order)} >x</button>
                    </p>
                    <p><u>Date {date.toLocaleDateString()}{date.toLocaleTimeString()}</u></p>
                    <ul>
                        {order.orders && order.orders.map(record => {
                            return (
                                <small>
                                    <li key={record.product.id}>
                                        {record.product.productName} x {record.quantity} = {record.product.unitPrice * record.quantity}
                                    </li>
                                </small>
                            )
                        })}
                    </ul>
                    <p>Total:{order.totalPrice}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <h1>Orders</h1>
                    <div className="row">
                        {this.showOrders()}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Order;