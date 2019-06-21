import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './containers/Home';
import About from './containers/About';
import Footer from './components/Footer';
import NotFound from './containers/error/NotFound';
import Product from './containers/product/Product';
import Header from './components/Header';
import Order from './containers/order/Order';
import Monitor from './components/monitor/Monitor';
import ProductSetting from './containers/product/ProductSetting';


class App extends Component {

 

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route exact path="/about" component={About} />
          <Route exact path="/product" component={Product} />
          {/* <Route exact path="/order" component={Order}/> */}
          <Route exact path="/order" render={() => <Order product="a" price="10" />} />
          <Route exact path="/productSetting"component={ProductSetting} />
          <Route component={NotFound} />
        </Switch>
      </Router>

    )
  }

}

export default App;
