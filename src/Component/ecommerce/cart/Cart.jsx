import React from "react";
import "./style.css"
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../../store/slices/Products/productsSlice";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <Table striped className="container mt-5">
      <thead>
        <tr>
          <th>#</th>
          <th>Product Image</th>
          <th>Product Title</th>
          <th>product Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((cartItem,index) => {
          return (
            <tr key={index+cartItem.id} >
              <td>{index+1}</td>
              <td >
                <img src={cartItem.thumbnail} style={{ width: "130px" }} alt="" />
              </td>
              <td>{cartItem.title}</td>
              <td>{cartItem.price} $</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    dispatch(deleteProduct(cartItem.id));
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Cart;
