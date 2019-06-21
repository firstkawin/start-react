import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../components/navbar.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        setInterval(() => {
            this.trick()
        }, 1000);
    }

    trick() {
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <div>
                <div className="topnav">
                    <div className="row">
                        <div className="col-md-8 text-left">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/product">Product</Link>
                            <Link to="/order">Order</Link>
                        </div>
                        <div className="col-md-4 text-right">
                            <small>
                                <p className="textWhite mt-3 mr-3">{this.state.date.toLocaleTimeString()}</p>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;