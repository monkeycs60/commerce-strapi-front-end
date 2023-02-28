import React from "react";
import { HeroBannerStyle } from "@/styles/HeroBannerStyle";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "@/lib/query";
import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import { BsArrowBarDown } from "react-icons/bs";
import Link from "next/link";

const HeroBanner = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity > 0) {
      dispatch(
        addToCart({ id, title, slug, quantity, price, description, image })
      );
      setQuantity(1);
      toast.success(`${quantity} ${title} added to cart`, {
        style: {
          border: "1px solid #DAA520",
          padding: "16px",
          color: "#713200",
          borderRadius: "10px",
          fontWeight: "bold",
        },
        iconTheme: { primary: "#DAA520", secondary: "white" },
      });
    }
  };

  const { title, description, price, image, slug } = product.attributes;
  const { id } = product;

  return (
    <HeroBannerStyle>
      <div className="hero-banner__container">
        <h1>{product.attributes.title}</h1>
        <div className="hero-banner__image">
          <img
            src={product.attributes.image.data.attributes.formats.medium.url}
            alt={product.attributes.title}
          />
          <p className="hero-banner__discover">
            -15% with <span> WINTER15</span>
          </p>
        </div>
        <div className="hero-banner__details">
          <p className="hero-banner__price">$ {product.attributes.price}</p>
          <p className="hero-banner__description">
            {product.attributes.description}
          </p>
          <button
            className="hero-banner__button"
            onClick={() => handleAddToCart()}
          >
            Add to cart
          </button>
        </div>
        <p className="hero-banner__new">Exclusive</p>
      </div>
      <div className="hero-banner__scroll">
        <Link href="#product-index">
          <BsArrowBarDown
            style={{ fontSize: "2rem", color: "#DAA520" }}
            size={30}
          />
          <p>
            Discover our <span>new collection</span>
          </p>
        </Link>
      </div>
    </HeroBannerStyle>
  );
};

export default React.memo(HeroBanner);
