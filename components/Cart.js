import { CartStyles } from "@/styles/CartStyle";
import {
  toggleCart,
  resetCart,
  removeFromCart,
  addToCart,
  removeOneFromCart,
  addOneToCart,
} from "@/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowReturnLeft } from "react-icons/bs";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { MdRemoveShoppingCart } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartRef = useRef(null);

  console.log(cart);

  // VAT Handling
  const cartVAT = (cart.total * 0.2).toFixed(2);

  const [showVAT, setShowVAT] = useState(false);

  const handleMouseEnterVAT = () => {
    setShowVAT(true);
  };
  const handleMouseLeaveVAT = () => {
    setShowVAT(false);
  };

  // Close cart on Cross button click
  const clickXShowCart = () => {
    dispatch(toggleCart());
  };

  // Close cart on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        dispatch(toggleCart());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  // reset cart on click
  const clickResetCart = () => {
    dispatch(resetCart());
  };

  // remove item from cart when click on minus button
  const clickRemoveFromCart = (id) => {
    dispatch(removeOneFromCart({ id }));
  };

  // add item to cart when click on plus button
  const clickAddToCart = (id) => {
    dispatch(addOneToCart({ id }));
  };

  return (
    <CartStyles
      ref={cartRef}
      animate={{ opacity: 1, transition: { duration: 0.8 }, x: 0 }}
      initial={{ opacity: 0, x: 500 }}
      exit={{ opacity: 0, transition: { duration: 0.7 }, x: 500 }}
    >
      <h1>Cart: what you&apos;ve stored</h1>
      {cart.items.length === 0 ? (
        <>
          <motion.div
            className="cart-empty"
            animate={{
              opacity: 1,
              scale: 1.0,
              transition: { duration: 1, delay: 0.3 },
            }}
            initial={{ opacity: 0, scale: 0.1 }}
          >
            <p>Your cart is empty</p>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, delay: 2 }}
            >
              <FaShoppingBasket size={50} color="white" />
            </motion.div>
          </motion.div>
          <div className="cross-div" onClick={clickXShowCart}>
            <BsArrowReturnLeft size={50} color="white" />
          </div>
        </>
      ) : (
        <>
          <ul>
            {cart.items.map((item) => (
              <motion.li
                key={item.product.id}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.7, delay: 0.6 },
                  scale: 1.0,
                }}
                initial={{ opacity: 0, scale: 0.4 }}
              >
                <img
                  src={item.product.image.data.attributes.formats.thumbnail.url}
                  alt={item.product.title}
                />
                <AiFillMinusCircle
                  size={30}
                  color="white"
                  onClick={() => clickRemoveFromCart(item.product.id)}
                />
                <Link href={`/product/${item.product.slug}`}>
                  <p className="item-title">{item.product.title}</p>
                </Link>
                <AiFillPlusCircle
                  size={30}
                  color="white"
                  onClick={() => clickAddToCart(item.product.id)}
                />
                <p className="item-quantity">{item.quantity}</p>
              </motion.li>
            ))}
          </ul>
          <p className="item-total-quantity">Number of items: {cart.cart}</p>
          <div className="item-total-price">
            <p
              className="price"
              onMouseEnter={handleMouseEnterVAT}
              onMouseLeave={handleMouseLeaveVAT}
            >
              Total: ${cart.total}
            </p>
            {showVAT && <p className="vat">VAT: ${cartVAT}</p>}
          </div>
          <div className="cross-div" onClick={clickXShowCart}>
            <BsArrowReturnLeft size={50} color="white" />
          </div>
          <button className="item-clear-button" onClick={clickResetCart}>
            <p>Clear Cart</p>
            <MdRemoveShoppingCart size={20} color="hsl(0, 70%, 30%)" />
          </button>
        </>
      )}
    </CartStyles>
  );
};

export default Cart;
