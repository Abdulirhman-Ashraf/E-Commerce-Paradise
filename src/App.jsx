import "bootstrap/dist/css/bootstrap.min.css";
import NavbarPage from "./Component/common/Nav/NavbarPage.jsx";
import Home from "./pages/home/Home.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Products from './pages/Products/Products.jsx'
import Cart from './Component/ecommerce/cart/Cart.jsx'
import "./style/app.css";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./Component/common/ProductDetails/ProductDetails.jsx";
function App() {
  return (
    <>
      <NavbarPage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/categories" element={<Cart/>} />
        <Route />
      </Routes>
    </>
  );
}

export default App;
