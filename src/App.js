import "./App.css";
import React from "react";
import Header from "./components/Header";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>404 not found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
