import { NavStyles } from "@/styles/NavStyles";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/store/cartSlice";
import { AnimatePresence, motion } from "framer-motion";
import User from "./User";
import { useUser } from "@auth0/nextjs-auth0/client";


const Nav = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);

  const { user, error, isLoading } = useUser();

  const clickShowCart = () => {
    dispatch(toggleCart());
  };

  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <NavStyles style={{ opacity: showCart ? 0.4 : 1 }}>
        <Link href="/">Botanical Bliss</Link>
        <div className="clickable-pannel">
          <User />
          <div onClick={clickShowCart}>
            <AiOutlineShoppingCart size={30} color="hsl(120, 81%, 17%)" />
            <AnimatePresence>
              {cart.cart > 0 && (
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {cart.cart}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </NavStyles>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </div>
  );
};

export default Nav;
