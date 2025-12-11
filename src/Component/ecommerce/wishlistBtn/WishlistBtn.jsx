import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../store/slices/Wishlist/wishlistSlice";
const WishlistBtn = ({product}) => {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);
  // console.log("selectedProduct:", selectedProduct);


  const isInWishlist = wishlistItems.some(
    (item) => item && item.id === product.id
  );

  return (
    <div >
      <button
        className="btn"
        style={{
          color: "red",
          backgroundColor: "transparent",
          fontSize: "20px",
          float:"right"
        }}
        onClick={() => {
          !isInWishlist
            ? dispatch(addToWishlist(product))
            : dispatch(removeFromWishlist(product.id));
        }}
      >
        {!isInWishlist ? <FaRegHeart /> : <FaHeart />}
      </button>
    </div>
  );
};

export default WishlistBtn;
