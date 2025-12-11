import "bootstrap/dist/css/bootstrap.min.css";
import NavbarPage from "./Component/common/Nav/NavbarPage.jsx";
import Home from "./pages/home/Home.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Cart from "./Component/ecommerce/cart/Cart.jsx";
import "./style/app.css";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./Component/common/ProductDetails/ProductDetails.jsx";
import Wishlist from "./pages/wishlist/Wishlist.jsx";
import Error from "./pages/Error/Error.jsx";
import Signup from "./pages/signup/signup.jsx";
import Login from "./pages/login/Login.jsx";

function App() {
  return (
    <div className="app">
      <div>
        <NavbarPage/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
