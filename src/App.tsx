import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import Footer from './components/Footer';
import GetInTouch from './components/GetInTouch';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Products />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;