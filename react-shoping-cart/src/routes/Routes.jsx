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
        <Route path="/" render={() => <Home />} />
        <Route path="/product" render={() => <Product />} />
        <Route path="/cart" render={() => <Cart />} />
        <Route path="/orders" render={() => <Orders />} />
      </Switch>
    </div>
  );
}
