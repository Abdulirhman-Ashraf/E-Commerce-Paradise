import React from "react";
import Lottie from "lottie-react";
import notFound from "../../assets/lottie/notFound.json";
import Empty from "../../assets/lottie/Empty.json";
import Loading from "../../assets/lottie/Loading.json";
import "./style.css";
const lottieFile = {
  notFound,
  Empty,
  Loading,
};
const LottieHandler = ({ type, message }) => {
  const animationData = lottieFile[type]||lottieFile["notFound"];
  return (
    <div className="lottieHandler">
      <Lottie animationData={animationData} className="LottieAnimation" />
      {message && <h3>{message}</h3>}
    </div>
  );
};

export default LottieHandler;
