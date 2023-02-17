import { NavStyles } from "@/styles/NavStyles";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/store/cartSlice";
import { AnimatePresence } from "framer-motion";

const Nav = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);

  const clickShowCart = () => {
    dispatch(toggleCart());
  };

  // i want to get the redux cart
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <NavStyles style={{ opacity: showCart ? 0.4 : 1 }}>
        <Link href="/">dullMarket.</Link>
        <div onClick={clickShowCart}>
          <AiOutlineShoppingCart size={30} color="hsl(120, 81%, 17%)" />
          <p 
          className={
            cart.cart === 0 ? "no-bg" : ""
          }
          >{cart.cart === 0 ? "" : cart.cart}</p>
        </div>
      </NavStyles>
      <AnimatePresence>
      {showCart && <Cart />}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
