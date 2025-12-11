import { FaOpencart } from "react-icons/fa6";
import "./style.css";
import { useEffect, useState } from "react";
const BasketIcon = ({ cartItems }) => {
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    if (cartItems.length === 0) {
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
      <h3 className="cartIcon">
        <FaOpencart title="Cart" />

        <p
          className={`cartCount ${animation ? "cartQuantityAnimation" : ""}`}
          style={{ fontSize: "10px" }}
        >
          {cartItems.length}
        </p>
      </h3>
    </div>
  );
};

export default BasketIcon;
