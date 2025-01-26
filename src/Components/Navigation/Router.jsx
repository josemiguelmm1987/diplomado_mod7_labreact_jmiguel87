import Home from "../../screens/Home.jsx";
import Product from "../../screens/Product.jsx";
import Login from "../../screens/Login.jsx";
import About from "../../screens/About.jsx";
import Think from "../../screens/Think.jsx";
import Counter from "../Counter/Counter.jsx";

import { Routes, Route } from "react-router";
const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/think" element={<Think />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Router;
