import { useLocation } from "react-router-dom";
import ProductSkeleton from "../skeletons/ProductSkeleton";
import ProductDetailsSkeleton from "../skeletons/ProductDetailsSkeleton";
import ProductDetailsSkeletonMobile from "../skeletons/ProductDetailsSkeletonMobile";
const Loading = ({ children, loading, error }) => {
  const location = useLocation();
  if (loading) {
    return location.pathname === "/" ? (
      <div>
        <ProductSkeleton />
      </div>
    ) : (
      window.innerWidth < 994 ? (
        <ProductDetailsSkeletonMobile/>
      ) : (
        <ProductDetailsSkeleton />
      )
   
    );
  }
  if (!loading && error !== null) {
    return <h3 style={{ color: "red" }}>{error}</h3>;
  }
  return children;
};

export default Loading;
