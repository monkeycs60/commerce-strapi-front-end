import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const OpacityWrapper = ({ children }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (cart.showCart) {
      setOpacity(0.4);
    } else {
      setOpacity(1);
    }
  }, [cart.showCart]);

  return <div style={{ opacity }}>{children}</div>;
};

export default OpacityWrapper;
