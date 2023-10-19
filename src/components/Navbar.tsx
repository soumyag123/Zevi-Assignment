import React from "react";
import "./Products.scss";
import { RiSearch2Line } from "react-icons/ri";
const zeviLogo = require("../Images/zevi_logo_svg.svg");


const ProductsNavBar = () => {
  return (
    <div className="search_navbar">
      <div></div>
      <form className="input_container">
        <input type="text" className="home_input" placeholder="Search..." />
        <button className="search_icon_container">
          <RiSearch2Line size="24" />
        </button>
      </form>
      <img src={zeviLogo} alt="" />
    </div>
  );
};

export default ProductsNavBar;