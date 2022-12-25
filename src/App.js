import "./App.css";
import Navbar from "../src/component/Navbar";
import Home from "../src/component/Home";
import Products from "../src/component/Products";
import Product from "../src/component/Product";
import Cart from "../src/component/Cart";

import { Switch, Route } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
