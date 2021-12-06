import React from "react";
import "./App.css";
import AppBar from "./components/nav-bar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductDetailPage from "./components/product-detail";
import CategoryPage from "./components/category";
import CartPage from "./components/cart";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ProductDetailPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
