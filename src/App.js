import React from "react";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Header from './components/header';
import ABOUT from './components/about';
import Products from "./components/pdoduct";
import Home from "./components/home";
import Footer from "./components/footer";
import Contact from "./components/contact";
import ProductDetails from "./components/productDetails";
import SignupForm from "./Authentication/signup";
import Password from "./Authentication/newPassword";
import PrivateRoute from "./Authentication/privateRoute";
import ProductsArr from "./components/productData";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/about" element={<ABOUT />} />
        <Route path="/private" element={<PrivateRoute />}>
          <Route path="store" element={<Products />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:index" element={<ProductDetails products={ProductsArr} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/password" element={<Password />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
