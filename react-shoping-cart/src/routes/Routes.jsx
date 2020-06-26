import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Product from "./Products";
import Cart from "./Cart";
import Orders from "./Orders";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/product/" render={() => <Product />} />
        <Route exact path="/product/:id" render={(props) => <Product {...props}/>} />
        <Route exact path="/cart" render={() => <Cart />} />
        <Route exact path="/orders" render={() => <Orders />} />
      </Switch>
    </div>
  );
}
