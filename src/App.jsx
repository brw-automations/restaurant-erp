import { Fragment, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import { Navbar } from './components'

import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Auth from "./pages/auth/Auth"
import Checkout from "./pages/checkout/Checkout"
import ProductsPage from "./pages/products/Products";
import Contact from "./pages/contact/Contact";
import Footer from './components/footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
