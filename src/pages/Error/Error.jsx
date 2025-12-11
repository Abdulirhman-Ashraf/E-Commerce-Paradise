import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import LottieHandler from "../../feedback/lottieHandler/LottieHandler";
const Error = () => {
  return (
    <div className="container notFound">
    <LottieHandler type={"notFound"}/>
      <Link type="notFound" to="/" replace={true}>
        How about going back to safety
      </Link>
    </div>
  );
};

export default Error;
