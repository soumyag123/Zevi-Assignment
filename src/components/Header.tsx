import React from "react";
import "./Header.scss";
const zeviLogo = require('../Images/zevi_logo_svg.svg');

const Header = () => {
  return (
    <div className="header">
      <img src={zeviLogo} alt="" />
    </div>
  );
};

export default Header;