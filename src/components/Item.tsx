import React from "react";
import { useState } from "react";
import "./Item.scss";
import { ProductType } from "../FakerData/FakerData";
import { ratingBox } from "../utilities/Ratings";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

interface ProductItemType {
  product: ProductType;
}

const ProductItem = ({ product }: ProductItemType) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [viewProduct, setViewProduct] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="product_item">
      <div className="container">
        <div className="wishlist_container">
          {isInWishlist ? (
            <AiFillHeart
              color="red"
              onClick={() => setIsInWishlist((prev) => !prev)}
            />
          ) : (
            <AiOutlineHeart
              color="red"
              onClick={() => setIsInWishlist((prev) => !prev)}
            />
          )}
        </div>
        <img
          className="product_image"
          src={product.productImage}
          alt=""
          onMouseOver={() => setViewProduct(true)}
          onMouseOut={() => setViewProduct(false)}
        />
        {viewProduct && (
          <div
            onMouseOver={() => setViewProduct(true)}
            onMouseOut={() => setViewProduct(false)}
            className="view_product"
            onClick={() => navigate("/")}
          >
            View Product
          </div>
        )}
      </div>
      <div>{product.productName}</div>
      <div>
        <span className="original_price">Rs. {product.productOriginalPrice} </span>
        <span className="discount_price">Rs. {product.productDiscountPrice} </span>
      </div>
      <div className="rating_and_reviews">
        {ratingBox(product.productRating)} ({product.productsReviews})
      </div>
    </div>
  );
};

export default ProductItem;