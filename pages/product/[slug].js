import { ProductStyle } from "@/styles/ProductStyle";
import { useState } from "react";
import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "@/lib/query";
import { useRouter } from "next/router";
import { ProductDetailsStyle } from "@/styles/ProductDetails";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { toast } from "react-hot-toast";

const { motion } = require("framer-motion");

const ProductDetails = ({ product }) => {
  //log redux state
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  //why the cart is reset to 0 when I refresh the page? I use redux store, it should be stored in the redux store?
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const router = useRouter();
  const { slug } = router.query;
  const [result] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: slug },
  });
  const { data, fetching, error } = result;
  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Oh no... {error.message}</div>;

  const { title, description, price, image } = data.products.data[0].attributes;
  const { id } = data.products.data[0];

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

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <ProductDetailsStyle>
      <img src={image.data.attributes.formats.medium.url} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description} </p>
        <p>Quantity</p>
        <button onClick={handleIncrement}>
          <AiFillPlusCircle size={30} color="hsl(120, 81%, 17%)" />
        </button>
        <p>{quantity}</p>
        <button onClick={handleDecrement}>
          <AiFillMinusCircle size={30} color="hsl(120, 81%, 17%)" />
        </button>
        <button id="cart" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </ProductDetailsStyle>
  );
};

export default ProductDetails;
