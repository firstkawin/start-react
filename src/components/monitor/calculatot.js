import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Calculator extends Component {

    showOrders(orders) {
        if (!orders || orders.length == 0) {
            return <li className="text-mute text-right">Select Orders</li>
        }
        else {
            return orders.map(order => {
                return (
                    <li className="text-right text-success mt-1">
                        {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity}
                        <button className="btn btn-sm btn-danger ml-2" onClick={() => this.props.onDeleteOrder(order.product)}>X</button>
                    </li>
                )
            })
        }
    }

    render() {
        const { totalPrice, orders } = this.props;
        return (
            <div>
                <br />
                <ul className="list-unstyled">
                    {this.showOrders(orders)}
                </ul>
                <hr />
                <p className="text-right">Total :</p>
                <h1 className="text-right">{totalPrice + "  THB"}</h1>
                <hr />
                <button className="btn btn-block btn-danger" onClick={() => this.props.onConfirmOrder()}>Confirm</button>
                <button className="btn btn-block btn-secondary" onClick={() => this.props.onCancelOrder()}>Cancel</button>
                <p className="text-right mt-2"><Link to="/productSetting" ><u>setting</u></Link></p>
            </div>
        )
    }
}
export default Calculator;