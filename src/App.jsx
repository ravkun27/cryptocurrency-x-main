import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import React, { useEffect, useState } from 'react';
import Loader from './Components/Loader';
import Footer from "./Components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 2 seconds
    console.log("loaded");
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
       {loading ? <Loader /> : (
        <div>
          <Navbar/>
          <Hero/>
          <Footer/>
        </div> 
      )}
    </div>
  );
};
export default App
