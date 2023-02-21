import styled from "styled-components";
import { motion } from "framer-motion";

export const CartStyles = styled(motion.div)`
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  width: 460px;
  height: 100vh;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  background: goldenrod;
  border-radius: 40px 0 0 40px;
  overflow-y: scroll;

  .cart-empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100%;
    color: white;
    p {
      font-size: 30px;
      font-style: italic;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 10vh 0;
    li {
      position: relative;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      user-select: none;
      img {
        width: 140px;
        height: 100px;
        object-fit: cover;
        border-radius: 5px;
      }
      .item-title {
        font-size: 18px;
        font-weight: 700;
        color: white;
        text-shadow: 2px 2px 1px grey;
        text-align: center;
        max-width: 80px;
      }
      .item-quantity {
        position: absolute;
        top: 5px;
        left: 5px;
        background: grey;
        padding: 5px 10px;
        border-radius: 50%;
        color: white;
        font-weight: 700;
        font-size: 18px;
      }
    }
  }
  .item-total-quantity {
    font-size: 16px;
    font-weight: 700;
    color: white;
    text-shadow: 2px 2px 1px grey;
    text-align: right;
  }
  .item-total-price {
    position: relative;
    display: flex;
    justify-content: flex-end;
    .price {
      font-size: 22px;
      font-weight: 700;
      color: white;
      text-shadow: 2px 2px 1px grey;
      text-align: right;
      text-decoration: underline;
    }
    .vat {
      position: absolute;
      top: 40px;
      right: 0;
      background: grey;
      font-size: 16px;
      font-weight: 700;
      color: white;
      text-align: right;
    }
  }
  .item-checkout-button {
    margin-top: 5vh;
    height: 50px;
    color: white;
    background: hsl(120, 10%, 0%);
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    border-radius: 10px;
  }
  .item-clear-button {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    width: 70%;
    height: 36px;
    margin: 1vh auto 10px auto;
    background: hsl(0, 10%, 65%);
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    box-shadow: 2px 2px 3px 2px hsl(0, 0%, 20%);
  }
  .cross-div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3vh;
    svg {
      cursor: pointer;
    }
  }
`;
