// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getProducts } from "../../store/slices/Products/productsThunk";
import "./style.css";
import Banner from "../../Component/ecommerce/banner/banner";
import CategoryHomeMenu from "../../Component/ecommerce/categoryHomeMenu/categoryHomeMenu";

const Home = () => {
  // const dispatch = useDispatch();

  // const { elements, loading } = useSelector((state) => state.products);
  // useEffect(() => {
  //   if (!elements.length) {
  //     dispatch(getProducts());
  //   }
  // }, [dispatch, elements.length]);

  return (
    <div className="home container">
      <Banner/>
      <CategoryHomeMenu/>
    </div>
  );
};

export default Home;
