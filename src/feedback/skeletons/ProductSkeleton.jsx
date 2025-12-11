import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";

const ProductSkeleton = () => {
  const [arraySize, setArraySize] = useState(4);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      switch (true) {
        case width < 576:
          setArraySize(1);
          break;
        case width < 768:
          setArraySize(2);
          break;
        case width < 992:
          setArraySize(3);
          break;
        default:
          setArraySize(4);
      }

    };
    handleResize()
    window.addEventListener("resize",handleResize)
    return()=>{
        window.removeEventListener("resize",handleResize)
    }
  }, []);
  const renderSkeletons = Array(arraySize)
    .fill(0)
    .map((_, index) => {
      return (
        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <ContentLoader
            speed={2}
            width="100%"
            height={480}
            viewBox="0 0 400 360"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="50" y="12" rx="0" ry="0" width="270" height="243" />
            <rect x="70" y="295" rx="4" ry="4" width="200" height="15" />
            <rect x="150" y="320" rx="4" ry="4" width="50" height="15" />
            <rect x="135" y="340" rx="4" ry="4" width="80" height="20" />
          </ContentLoader>
        </div>
      );
    });

  return <div className="row m-auto">{renderSkeletons}</div>;
};

export default ProductSkeleton;
