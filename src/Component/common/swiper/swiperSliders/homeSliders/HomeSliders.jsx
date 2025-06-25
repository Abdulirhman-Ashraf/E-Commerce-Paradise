import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../../store/slices/Products/productsThunk";
import SwiperComponent from "../../SwiperComponent/SwiperComponent";
import "swiper/css";
import { SwiperSlide } from "swiper/react";

import Card from "react-bootstrap/Card";
import { Badge } from "react-bootstrap";

import defaultImage from "../../../../../assets/images.png";

import "./style.css";
import { Link } from "react-router-dom";
import Loading from "../../../../../feedback/Loading/Loading";
const HomeSliders = ({ filterType, value }) => {
  const dispatch = useDispatch();
  const { elements ,loading,error} = useSelector((state) => state.products);
  useEffect(() => {
    if (!elements.length) {
      dispatch(getProducts());
    }
  }, [dispatch, elements]);

  const filteredProducts = useMemo(() => {
    return elements?.filter((ele) => ele[filterType] >= value);
  }, [elements, filterType, value]);

  return (
    <div className="HomeSliders">
    <Loading loading={loading} error={error}>
    <SwiperComponent >
        {filteredProducts?.map((filteredProduct) => {
          return (
            <SwiperSlide key={filteredProduct.id}>
              <Card className="card" style={{ margin: "5px" }}>
                <Card.Img
                  loading="lazy"
                  className="cardImg"
                  variant="top"
                  src={filteredProduct?.thumbnail}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = defaultImage;
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
                  ) }

                  <Card.Title
                    className="description"
                    title={filteredProduct.title}
                  >
                    {filteredProduct.title}
                  </Card.Title>
                  {filteredProduct.discountPercentage > 10 ? (
                    <>
                      <h5 style={{ textDecoration: "line-through" }}>
                        {filteredProduct.price}$
                      </h5>
                      <h4>
                        {(
                          filteredProduct.price *
                          (1 - filteredProduct.discountPercentage / 100)
                        ).toFixed(2)}
                        $
                      </h4>
                    </>
                  ) : (
                    <h4>{filteredProduct.price}$</h4>
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
