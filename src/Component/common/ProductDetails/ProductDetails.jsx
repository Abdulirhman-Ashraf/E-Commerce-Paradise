import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../store/slices/Products/productsThunk";
import { useParams } from "react-router-dom";

import { Button } from "react-bootstrap";
import "./style.css";
import defaultImage from "../../../assets/images.png";
import Loading from "../../../feedback/Loading/Loading";
import { resetProduct } from "../../../store/slices/Products/productsSlice";
import { addToCart } from "../../../store/slices/Cart/cartSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { selectedProduct, loading, error } = useSelector(
    (state) => state.products
  );
  const {cartItems}=useSelector((state)=>state.cart)
  const params = useParams();
  useEffect(() => {
    dispatch(resetProduct());
    dispatch(getProduct(params.id));
  }, [dispatch, params.id]);

  const isInCart = cartItems.some((item) => item.id === selectedProduct?.id);
  return (
    <div className="ProductDetails">
      <div className="row container  ">
        <Loading loading={loading} error={error}>
          {selectedProduct && (
            <div
              key={selectedProduct.id}
              className=" d-flex flex-wrap "
              style={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <div className="col-12 col-lg-5 ">
                <div className="cover">
                  <img
                    src={selectedProduct.images?.[0]}
                    alt={selectedProduct.title}
                    loading="lazy"
                    style={{ width: "100%" }}
                    onError={(e) => {
                      e.target.onerror = null;

                      e.target.src = defaultImage;
                    }}
                  />
                </div>
              </div>
              <div className="col-12 col-lg-5 ">
                <h1> {selectedProduct.title}</h1>
                <h6>Brand: {selectedProduct.brand}</h6>
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
              <div className="col-12 col-lg-2 ">
                <h3>{selectedProduct.price}$</h3>
                <h3>
                  {selectedProduct.stock > 0 ? "In Stock" : "unavailable"}
                </h3>

                <div>
                  <Form.Select
                    aria-label="Default select example"
                  >
                    <option>Select Quantity</option>
                    {Array.from({ length: selectedProduct.stock }, (_, i) => {
                      return (
                        <option key={i+1} value={`${i + 1}`}>
                          Quantity: {`${i + 1}`}
                        </option>
                      );
                    })}
                  </Form.Select>
                </div>
              </div>
            </div>
          )}
        </Loading>
      </div>
    </div>
  );
};

export default ProductDetails;
