import React from "react";
import ContentLoader from "react-content-loader";

const ProductDetailsSkeleton = () => {
  return (
    <div className="m-auto">
      <ContentLoader
        speed={2}
        width="100%"
        height={500}
        viewBox="0 0 1300 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        {/* صورة المنتج */}
        <rect x="30" y="50" rx="10" ry="10" width="500" height="500" />

        {/* العنوان يبدأ من y = 100 */}
        <rect x="550" y="100" rx="6" ry="6" width="200" height="40" />

        {/* السعر القديم */}
        <rect x="550" y="160" rx="4" ry="4" width="100" height="20" />

        {/* السعر الجديد */}
        <rect x="550" y="200" rx="5" ry="5" width="120" height="30" />

        {/* وصف طويل */}
        <rect x="550" y="250" rx="4" ry="4" width="550" height="20" />
        <rect x="550" y="280" rx="4" ry="4" width="520" height="20" />

        {/* زر Add to Cart */}
        <rect x="550" y="320" rx="8" ry="8" width="160" height="40" />

        {/* جانب In Stock و Quantity */}
        <rect x="1130" y="140" rx="4" ry="4" width="90" height="30" />
        <rect x="1130" y="190" rx="6" ry="6" width="220" height="40" />
      </ContentLoader>
    </div>
  );
};

export default ProductDetailsSkeleton;
