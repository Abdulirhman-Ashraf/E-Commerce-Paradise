import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../../store/slices/Products/productsThunk";
import SwiperComponent from "../../SwiperComponent/SwiperComponent";
import "swiper/css";
import { SwiperSlide } from "swiper/react";

import Card from "react-bootstrap/Card";
import { Badge } from "react-bootstrap";

import { FaExternalLinkAlt } from "react-icons/fa";

import "./style.css";
import { Link } from "react-router-dom";
const HomeSliders = ({ filterType, value }) => {
  const dispatch = useDispatch();
  const { elements } = useSelector((state) => state.products);
  useEffect(() => {
    if (!elements.length) {
      dispatch(getProducts());
    }
  }, [dispatch, elements]);

  const filteredProducts = elements.filter((ele) => ele[filterType] >= value);
  return (
    <div className="HomeSliders">
      <SwiperComponent>
        {filteredProducts.map((filteredProduct) => {
          return (
            <SwiperSlide key={filteredProduct.id}>
              <Card className="card" style={{ margin: "5px" }}>
                <Card.Img
                  className="cardImg"
                  variant="top"
                  src={filteredProduct.thumbnail}
                />
                <Link
                  to={`/products/${filteredProduct.id}`}
                  className="detailsBtn"
                >
                  <FaExternalLinkAlt />
                </Link>
                <Card.Body>
                  {filterType === "discountPercentage" ? (
                    <Badge bg="danger" style={{ fontSize: "16px" }}>
                      {filteredProduct.discountPercentage}% off
                    </Badge>
                  ) : (
                    ""
                  )}

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
                  <Card.Text className="description">
                    {filteredProduct.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
          );
        })}
      </SwiperComponent>
    </div>
  );
};

export default HomeSliders;
