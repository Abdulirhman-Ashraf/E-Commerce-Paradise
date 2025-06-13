import React from "react";
import defaultImage from "../../../../../assets/images.png";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
const ProductsSlider = ({ ele }) => {
  return (
    <div className="ProductsSlider">
      <Link to={`products/${ele.id}`} style={{ textDecoration: "none " }}>
        <div className="cover">
          {ele?.images?.length > 0 ? (
            <img
              src={ele.images?.[0]}
              alt={ele?.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultImage;
              }}
            />
          ) : (
            <img src={defaultImage} alt={ele?.name} />
          )}

          <p style={{ textAlign: "center", color: "black" }}>{ele.title}</p>
          <Badge className="badge">{ele.price} $</Badge>
        </div>
      </Link>
    </div>
  );
};

export default ProductsSlider;
