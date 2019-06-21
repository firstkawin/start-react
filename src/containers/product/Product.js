import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/Header"
import '../../components/card.css';
import { withRouter } from "react-router-dom";
import Monitor from "../../components/monitor/Monitor";
import axios from 'axios';
import Footer from "../../components/Footer";
class product extends Component {

  constructor(props) {
    super(props);
    this.state = { products: "" };

  }
  componentDidMount() {
    // this.setState({
    //   products: [
    //     { productId: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/images/logo.png" },
    //     { productId: 2, productName: "สลัดผัก2", unitPrice: "1202", thumbnail: "/images/logo.png" },
    //     { productId: 3, productName: "สลัดผัก3", unitPrice: "1203", thumbnail: "/images/logo.png" },
    //     { productId: 4, productName: "สลัดผัก4", unitPrice: "1204", thumbnail: "/images/logo.png" },
    //     { productId: 5, productName: "สลัดผัก5", unitPrice: "1205", thumbnail: "/images/logo.png" },
    //     { productId: 6, productName: "สลัดผัก6", unitPrice: "1206", thumbnail: "/images/logo.png" }
    //   ]
    // })
    //--------------------------------------------------------------
    // fetch("http://localhost:3002/products", { method: "GET" })
    //   .then(res => res.json())
    //   .then(res => { this.setState({ products: res }) });
    //--------------------------------------------------------------
    axios.get("http://localhost:3002/products").then(res => {
      console.log(res.data);
      this.setState({ products: res.data });
    });

  }
  render() {
    return (
      <div>
        <Header />
        <Monitor products={this.state.products} />
        <Footer />
      </div>
    )
  }
}
export default withRouter(product);