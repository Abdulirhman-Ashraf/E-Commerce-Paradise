import React, { useEffect, useState } from "react";
import "./style.css";
import "swiper/css";
import { SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../store/slices/categories/categoriesThunk";
import { getProducts } from "../../../store/slices/Products/productsThunk";

import SwiperComponent from "../../common/swiper/SwiperComponent/SwiperComponent";
import ProductsSlider from "../../common/swiper/swiperSliders/productsSlider/ProductsSlider";

const CategoryHomeMenu = () => {
  const dispatch = useDispatch();
  const { values } = useSelector((state) => state.categories);
  const { elements, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    if (!elements.length || !values.length) {
      dispatch(getCategories());
      dispatch(getProducts());
    }
  }, [dispatch, values, elements]);

  const [category, setCategory] = useState(null);

  return (
    <div className="categoryHomeMenu">
      <h2>Our Products</h2>
      {error && <h3 style={{ color: "red" }}>Error: {error}</h3>}
      {loading && <h3>Loading....</h3>}

            {/* if user do not chose category -> display All categories only */}
      {!loading && !category && (
        <SwiperComponent>
          {values.map((value) => (
            <SwiperSlide key={value.name}>
              <h3
                style={{ textAlign: "center" }}
                onClick={() => {
                  setCategory(value.name);
                }}
              >
                {value.name}
              </h3>
            </SwiperSlide>
          ))}
        </SwiperComponent>
      )}


      {/* if user chose category -> display All categories and Chosen Category  */}


      {category && !loading && (
        <>
          <h2>{category}</h2>
          <SwiperComponent>
            {values.map((value) => (
              <SwiperSlide key={value.name}>
                <h3
                  style={{ textAlign: "center" }}
                  onClick={() => {
                    setCategory(value.name);
                  }}
                >
                  {value.name}
                </h3>
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </>
      )}


      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      {/* if user do not filter or select category -> display All products*/}
      {!category && !loading && (
        <SwiperComponent>
          {elements.map((ele) => (
            <SwiperSlide key={ele.id}>
              <ProductsSlider ele={ele} />
            </SwiperSlide>
          ))}
        </SwiperComponent>
      )}


      {/* Filter products by Category -> display Filtered products*/}


      {category && !loading && (
        <SwiperComponent>
          {elements
            .filter(
              (ele) =>
                ele.category.toLowerCase().replace(/-/g, " ") ===
                category.toLowerCase()
            )
            .map((ele) => (
              <SwiperSlide key={ele.id}>
                <ProductsSlider ele={ele} />
              </SwiperSlide>
            ))}
        </SwiperComponent>
      )}
    </div>
  );
};

export default CategoryHomeMenu;
