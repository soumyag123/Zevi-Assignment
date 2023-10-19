import React, { useState } from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

import { RiSearch2Line } from "react-icons/ri";

import Header from "../components/Header";
import {
  LatestTrend,
  SuggestionType,
  getLatestTrendData,
  getSuggestionData,
} from "../FakerData/FakerData";

const home_bg = require("../Images/home_bg.png");

const Home = () => {
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  const [latestTrendsData, setLatestTrendsData] = useState<LatestTrend[]>();
  const [suggestionData, setSuggestionData] = useState<SuggestionType[]>();

  const navigate = useNavigate();

  const getBoxProducts = () => {
    setShowSuggestionBox((prev) => !prev);
    setLatestTrendsData(getLatestTrendData());
    setSuggestionData(getSuggestionData());
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    navigate("/products");
  };

  const navigateToProductsPage = () => {
    navigate("/products");
  };

  return (
    <div style={{ backgroundImage: `url(${home_bg})` }} className="home">
      <Header />
      <div className="home_content">
        <form className="input_container" onSubmit={(e) => onSubmitHandler(e)}>
          <input
            onClick={() => getBoxProducts()}
            type="text"
            className="home_input"
            placeholder="Search..."
          />
          <button className="search_icon_container">
            <RiSearch2Line size="24" />
          </button>
        </form>
        {showSuggestionBox && (
          <div className="latest_trend_and_suggestion_box">
            <div className="latest_trend_box">
              <div className="category">Latest Trends</div>
              <div className="latest_trend_products">
                {latestTrendsData?.map((product, i) => {
                  return (
                    <div
                      key={i}
                      className="latest_trend_product"
                      onClick={navigateToProductsPage}
                    >
                      <img src={product.productImage} alt="" />
                      <div>{product.productName}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="category">Popular Suggestion</div>
              <div>
                {suggestionData?.map((product, i) => {
                  return (
                    <div
                      key={i}
                      className="suggestion_product"
                      onClick={navigateToProductsPage}
                    >
                      {product.productName}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;