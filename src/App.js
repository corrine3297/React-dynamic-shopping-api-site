import AOS from "aos";
import React, { useEffect } from 'react';
import './App.css';
import Banner from './components/Banner';
import CreateProduct from './components/CreateProduct';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Nav from './components/Nav';
import ProductCard from './components/ProductCard';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Nav />

      {/* Landing page section */}
      <LandingPage />

      {/* product list */}
      <ProductCard />

      {/* Poster  */}
      <Banner />

      {/* Product adding section */}
      <CreateProduct />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
