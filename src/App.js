import React, { useContext } from "react";
import { BrowserRouter as Router, Routes,Route, Navigate} from "react-router-dom";
import Header from './components/header';
import ABOUT from './components/about';
import Products from "./components/pdoduct";
import Home from "./components/home";
import Footer from "./components/footer";
import Contact from "./components/contact";
import ProductDetails from "./components/productDetails";
import SignupForm from "./Authentication/signup";
import Password from "./Authentication/newPassword";
import AuthContext from "./store/authContext";


function App() {
  const productsArr = [

    {
    
    title: 'Album 1',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    image1: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    image2:'https://prasadyash2411.github.io/ecom-website/img/Album%203.png'
    },
    
    {
    
    title: 'Album 2',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Album 3',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Album 4',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
  const authCtx = useContext(AuthContext);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SignupForm />} />
        {authCtx.isLoggedIn && (
        <Route path="/about" element={<ABOUT />} />
        )}
        {authCtx.isLoggedIn && (
        <Route path="/store" element={<Products />} />
        )}
        {authCtx.isLoggedIn && (
        <Route path="/contact" element={<Contact />} />
        )}
        {authCtx.isLoggedIn && (
        <Route path="/product/:index" element={<ProductDetails products={productsArr} />} />
        )}
        {authCtx.isLoggedIn && (
        <Route path="/home" element={<Home />} />
        )}
        <Route path="/password" element={<Password />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
