import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import Hero2 from './components/Hero2';
import Upproducts from './components/Upproducts';
import Hero3 from './components/Hero3'
import ProductGrid2 from './components/Upproduct2';
import Scrollproduct from './components/Scrollproduct';
import Feature from './components/Feature';
import Footer from './components/Footer';


function App() {
  // Simple "Function" to mimic backend cart logic
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    // You could add a toast notification here
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <Navbar cartCount={cartCount} />
      <HeroSection />
      <Hero2 />
      <Upproducts />
      <Hero3 />
      <ProductGrid2 />
      <Scrollproduct />
      <Feature />
      <Footer />

    </div>
  );
}

export default App;