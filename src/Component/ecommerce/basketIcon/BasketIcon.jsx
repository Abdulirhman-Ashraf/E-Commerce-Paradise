import { FaOpencart } from "react-icons/fa6";
import "./style.css";
import { useEffect, useState } from "react";
const BasketIcon = ({ cartItems }) => {
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    if (cartItems.length===0) {
      return;
    }
    setAnimation(true);
    const debounce = setTimeout(() => {
      setAnimation(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [cartItems.length]);
  return (
    <div>
      <FaOpencart className="cartIcon" title="Cart" />

      <div className={`cartCount ${animation ? "cartQuantityAnimation" : ""}`}>
        {cartItems.length}
      </div>
    </div>
  );
};

export default BasketIcon;
