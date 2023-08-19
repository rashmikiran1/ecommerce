import React from "react";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Header from './components/header';
import ABOUT from './components/about';
import Products from "./components/pdoduct";
import Home from "./components/home";
import Footer from "./components/footer";
import Contact from "./components/contact";


function App() {
  return (
    <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/about" element={<ABOUT />} />
        <Route path="/" element={<Products />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
