import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Product from "./product";
function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Product />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<h1>hello</h1>}/>
      <Route path="/product/milk" element={<h1>hell</h1>}/>
      <Route path="/product/poultry" element={<h1>hell</h1>}/>
      <Route path="/product/meat" element={<h1>hell</h1>}/>
      <Route path="/product/milk" element={<h1>hell</h1>}/>
      <Route path="/product/milk" element={<h1>hell</h1>}/>

    </Routes>
  </Router>
  );
}

export default App;
