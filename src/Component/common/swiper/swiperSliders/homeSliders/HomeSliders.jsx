import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../../store/slices/Products/productsThunk";
import WishlistBtn from "../../../../ecommerce/wishlistBtn/WishlistBtn";
import SwiperComponent from "../../SwiperComponent/SwiperComponent";
import Loading from "../../../../../feedback/Loading/Loading";

import { SwiperSlide } from "swiper/react";
import "swiper/css";

import Card from "react-bootstrap/Card";
import { Badge } from "react-bootstrap";

import defaultImage from "../../../../../assets/images.png";

import "./style.css";
import { Link } from "react-router-dom";
import { cleanUpProducts } from "../../../../../store/slices/Products/productsSlice";
const HomeSliders = ({ filterType, value }) => {
  const dispatch = useDispatch();
  const { elements, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
      dispatch(getProducts());
    

    return () => {
      dispatch(cleanUpProducts());
    };
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    return elements?.filter((ele) =>
      typeof value === "number"
        ? ele[filterType] >= value
        : ele[filterType] === value
    );
  }, [elements, filterType, value]);

  return (
    <div className="HomeSliders">
      <Loading loading={loading} error={error}>
        <SwiperComponent>
          {filteredProducts?.map((filteredProduct) => {
            return (
              <SwiperSlide key={filteredProduct.id}>
                <Card className="card" style={{ margin: "5px" }}>
                  <WishlistBtn product={filteredProduct} />
                  <Card.Img
                    loading="lazy"
                    className="cardImg"
                    variant="top"
                    src={filteredProduct?.thumbnail}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = defaultImage;
                    }}
                  />
                  <Link
                    to={`/products/${filteredProduct.id}`}
                    className="detailsBtn btn btn-white"
                  >
                    see details
                  </Link>
                  <Card.Body>
                    {filterType === "discountPercentage" && (
                      <Badge
                        bg="danger"
                        className="discount"
                        style={{ fontSize: "16px" }}
                      >
                        {filteredProduct.discountPercentage}% off
                      </Badge>
                    )}

                    <Card.Title
                      className="description"
                      title={filteredProduct.title}
                    >
                      {filteredProduct.title}
                    </Card.Title>
                    {filteredProduct.discountPercentage > 10 ? (
                      <>
                        <span style={{ textDecoration: "line-through" }}>
                          {filteredProduct.price}$
                        </span>
                        <h4>
                          <b>
                            {(
                              filteredProduct.price *
                              (1 - filteredProduct.discountPercentage / 100)
                            ).toFixed(2)}
                            $
                          </b>
                        </h4>
                      </>
                    ) : (
                      <h4>
                        <b>{filteredProduct.price}$</b>
                      </h4>
                    )}
                  </Card.Body>
                </Card>
              </SwiperSlide>
            );
          })}
        </SwiperComponent>
      </Loading>
    </div>
  );
};

export default HomeSliders;
