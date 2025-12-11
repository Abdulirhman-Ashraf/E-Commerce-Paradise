import React from "react"
import ContentLoader from "react-content-loader"

const ProductDetailsSkeletonMobile = () => (
  <ContentLoader 
    speed={2}
    width={375}
    height={700}
    viewBox="0 0 375 700"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* الصورة */}
    <rect x="20" y="20" rx="10" ry="10" width="335" height="335" />

    {/* العنوان */}
    <rect x="20" y="370" rx="6" ry="6" width="300" height="25" />

    {/* السعر القديم */}
    <rect x="20" y="410" rx="4" ry="4" width="80" height="20" />

    {/* السعر الجديد */}
    <rect x="20" y="440" rx="5" ry="5" width="100" height="28" />

    {/* الوصف */}
    <rect x="20" y="480" rx="4" ry="4" width="320" height="20" />
    <rect x="20" y="510" rx="4" ry="4" width="300" height="20" />
    <rect x="20" y="540" rx="4" ry="4" width="280" height="20" />

    {/* زر Add to Cart */}
    <rect x="20" y="580" rx="8" ry="8" width="200" height="45" />

    {/* In Stock + Quantity (بشكل عمودي) */}
    <rect x="20" y="640" rx="4" ry="4" width="100" height="25" />
    <rect x="20" y="675" rx="6" ry="6" width="150" height="35" />
  </ContentLoader>
)

export default ProductDetailsSkeletonMobile