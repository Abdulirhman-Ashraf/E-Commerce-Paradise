import React from "react";
import "./style.css";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../../store/slices/Cart/cartSlice";
import { Link } from "react-router-dom";
import LottieHandler from "../../../feedback/lottieHandler/LottieHandler";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cartItems
    .reduce((acc, item) => {
      const discountedPrice =
        item.price * (1 - item.discountPercentage / 100) * item.quantity;
      return acc + discountedPrice;
    }, 0)
    .toFixed(2);
  return (
    <>
      {cartItems.length > 0 ? (
        <Table
          striped
          className="container  mt-5"
          style={{ textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Product Title</th>
              <th>Product Total Price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem, index) => {
              return (
                <tr key={cartItem.id}>
                  <td>{index + 1}</td>

                  <td>
                    <Link to={`/products/${cartItem.id}`}>
                      {cartItem.title}
                    </Link>
                  </td>
                  <td>
                    <b>
                      {(
                        cartItem.price *
                        (1 - cartItem.discountPercentage / 100) *
                        cartItem.quantity
                      ).toFixed(2)}
                      $
                    </b>
                  </td>
                  <td>{cartItem.quantity} </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        dispatch(deleteProduct(cartItem.id));
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5">Total Price : <b>{totalPrice} $ </b></td>
             
            </tr>
          </tfoot>
        </Table>
      ) : (
        <LottieHandler type={"Empty"} message={"Your Cart Is Empty"} />
      )}
    </>
  );
};

export default Cart;
