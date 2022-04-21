import React from "react";
import "../styles/banner.css";
import logo from "../assets/logo.png";

const Banner = () => {
  const title = "La maison jungle";

  return (
    <div className="lmj-banner">
      <img src={logo} alt={title} className="lmj-logo" />
      <h1 className="lmj-title">{title}</h1>
    </div>
  );
};

export default Banner;
