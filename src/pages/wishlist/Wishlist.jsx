import React from "react";
import { useSelector } from "react-redux";
import defaultImage from "../../assets/images.png";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import WishlistBtn from "../../Component/ecommerce/wishlistBtn/WishlistBtn";
import LottieHandler from "../../feedback/lottieHandler/LottieHandler";
const Wishlist = () => {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  return (
    <div>
      {wishlistItems.length > 0 ? (
        <div className="wishlist ">
          <div className="row container m-auto text-center">
            {wishlistItems?.map((wishlistItem) => {
              return (
                <Card key={wishlistItem.id} className="card col-4">
                  <WishlistBtn product={wishlistItem} />

                  <Card.Img
                    loading="lazy"
                    className="cardImg"
                    variant="top"
                    src={wishlistItem?.thumbnail}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = defaultImage;
                    }}
                  />
                  <Link
                    to={`/products/${wishlistItem.id}`}
                    className="detailsBtn btn btn-white"
                  >
                    see details
                  </Link>
                  <Card.Body>
                    <Card.Title
                      className="description"
                      title={wishlistItem.title}
                    >
                      {wishlistItem.title}
                    </Card.Title>
                    {wishlistItem.discountPercentage > 10 ? (
                      <>
                        <span style={{ textDecoration: "line-through" }}>
                          {wishlistItem.price}$
                        </span>
                        <h4>
                          <b>
                            {(
                              wishlistItem.price *
                              (1 - wishlistItem.discountPercentage / 100)
                            ).toFixed(2)}
                            $
                          </b>
                        </h4>
                      </>
                    ) : (
                      <h4>
                        <b>{wishlistItem.price}$ </b>
                      </h4>
                    )}
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      ) : (
        <LottieHandler type={"Empty"} message={"Your Wishlist Is Empty"}/>
      )}
    </div>
  );
};

export default Wishlist;
