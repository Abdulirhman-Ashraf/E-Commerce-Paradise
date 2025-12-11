import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../store/slices/Products/productsThunk";
import { useParams } from "react-router-dom";

import { Button, Dropdown } from "react-bootstrap";
import "./style.css";
import defaultImage from "../../../assets/images.png";
import Loading from "../../../feedback/Loading/Loading";
import { resetProduct } from "../../../store/slices/Products/productsSlice";
import { addToCart, deleteProduct } from "../../../store/slices/Cart/cartSlice";
import WishlistBtn from "../../ecommerce/wishlistBtn/WishlistBtn";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { selectedProduct, loading, error } = useSelector(
    (state) => state.products
  );
  const { cartItems } = useSelector((state) => state.cart);
  const [isShowMore, setIsShowMore] = useState(false);
  const [userSelectedQuantity, setUserSelectedQuantity] = useState(1);
  const params = useParams();
  useEffect(() => {
    dispatch(resetProduct());
    dispatch(getProduct(params.id));
  }, [dispatch, params.id]);

  const isInCart = cartItems.some((item) => item.id === selectedProduct?.id);
  return (
    <div className="ProductDetails">
      <div className="row container m-2">
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
                    src={selectedProduct?.images?.[0]||defaultImage}
                    alt={selectedProduct.title}
                    loading="lazy"
                    style={{ width: "100%" }}
                    onError={(e) => {
                      e.currentTarget.onerror = null;

                      e.currentTarget.src = defaultImage;
                    }}
                  />
                </div>
              </div>
              <div className="col-12 col-lg-5 ">
                <div className="titleAndWishlistDiv ">
                  <div>
                    <h1> {selectedProduct.title}</h1>
                  </div>
                  <div>
                    <WishlistBtn product={selectedProduct} />
                  </div>
                </div>
                <h6>Brand: {selectedProduct.brand}</h6>
                {selectedProduct.discountPercentage > 10 ? (
                  <>
                    <span style={{ textDecoration: "line-through" }}>
                      {selectedProduct.price}$
                    </span>
                    <h3>
                    <b>
                           {(
                        selectedProduct.price *
                        (1 - selectedProduct.discountPercentage / 100)
                      ).toFixed(2)}
                      $
                    </b>
                 
                    </h3>
                  </>
                ) : (
                  <h3><b>{selectedProduct.price}$</b></h3>
                )}
                <h6>{selectedProduct.description}</h6>

                <Button
                  className="cartBtn"
                  onClick={() => {
                    !isInCart
                      ? dispatch(
                          addToCart({
                            ...selectedProduct,
                            quantity: userSelectedQuantity,
                          })
                        )
                      : dispatch(deleteProduct(selectedProduct.id));
                  }}
                >
                  {isInCart ? "Remove From Cart" : "Add to Cart"}
                </Button>
              </div>
              <div className="col-12 col-lg-2 ">
                <h3>
                  {selectedProduct.stock > 0 ? "In Stock" : "unavailable"}
                </h3>

                <div>
                  <Dropdown autoClose="outside">
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      disabled={isInCart}
                      style={{ backgroundColor: "#7E35B9" }}
                    >
                      {`Quantity :${userSelectedQuantity}`}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="selectQuantityMenu">
                      {Array.from(
                        {
                          length: isShowMore ? selectedProduct.stock : 4,
                        },
                        (_, i) => {
                          return (
                            <Dropdown.Item
                              key={i + 1}
                              as={"button"}
                              onClick={() => {
                                setUserSelectedQuantity(i + 1);
                                document
                                  .getElementById("dropdown-basic")
                                  .click();
                              }}
                            >
                              Quantity: {i + 1}
                            </Dropdown.Item>
                          );
                        }
                      )}
                      <Dropdown.Item
                        as="button"
                        onClick={() => setIsShowMore(!isShowMore)}
                      >
                        {!isShowMore ? "show more" : "show less"}
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
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
