import React, { Component } from "react";
import Header from "../components/Header"
import '../components/navbar.css';
import Footer from "../components/Footer";
import Monitor from "../components/monitor/Monitor";
import ProductItem from "./product/productItem";

class Home extends Component {

  
  render() {
    return (
      <div>
        <Header />
        
        <Footer />
      </div>
    )
  }
}
export default Home;