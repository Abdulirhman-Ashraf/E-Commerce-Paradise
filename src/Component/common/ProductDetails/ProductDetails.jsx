import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../store/slices/Products/productsThunk";
import { useParams } from "react-router-dom";
import {
  addToCart,
  resetProduct,
} from "../../../store/slices/Products/productsSlice";
import { Button } from "react-bootstrap";
import "./style.css";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { selectedProduct, loading, cartItems } = useSelector(
    (state) => state.products
  );
  const params = useParams();
  useEffect(() => {
    dispatch(resetProduct());
    dispatch(getProduct(params.id));
  }, [dispatch, params.id]);

  const isInCart = cartItems.some((item) => item.id === selectedProduct?.id);
  return (
    <div className="ProductDetails">
      {loading && <h3 style={{ textAlign: "center" }}>Loading.....</h3>}
      <div className="row container-fluid ">
        {selectedProduct && !loading && (
          <div
            key={selectedProduct.id}
            className=" d-flex flex-wrap "
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <div className="col-12 col-lg-6 ">
              <div className="cover">
                <img
                  src={selectedProduct.images?.[0]}
                  alt={selectedProduct.title}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 ">
              <h2>Details</h2>
              <h1> {selectedProduct.title}</h1>
              <h3>{selectedProduct.brand}</h3>
              {selectedProduct.discountPercentage > 10 ? (
                <>
                  <h4 style={{ textDecoration: "line-through" }}>
                    {selectedProduct.price}$
                  </h4>
                  <h3>
                    {(
                      selectedProduct.price *
                      (1 - selectedProduct.discountPercentage / 100)
                    ).toFixed(2)}
                    $
                  </h3>
                </>
              ) : (
                <h3>{selectedProduct.price}$</h3>
              )}
              <h6>{selectedProduct.description}</h6>

              <Button
                className="cartBtn"
                onClick={() => {
                  dispatch(addToCart(selectedProduct));
                }}
                disabled={isInCart}
              >
                {isInCart ? "Already in Cart" : "Add to Cart"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
