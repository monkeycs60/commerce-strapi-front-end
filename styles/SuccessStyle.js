import styled from "styled-components";
import { motion } from "framer-motion";

export const SuccessStyles = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: white;
  border-radius: 20px;
  padding: 20px;

  h1 {
    font-size: 50px;
    color: goldenrod;
  }
  h2 {
    font-size: 30px;
    color: black;
    text-align: center;
    //italic
    font-style: italic;
  }
  h3 {
    font-size: 20px;
    color: black;
  }
  h4 {
    font-size: 16px;
    color: black;
  }

  .main-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
    & :nth-child(2) {
        margin-bottom: 30px;
    }
  }

  .buy-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25vh;
    gap: 8vw;
    margin-bottom: 20px;

    .address {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 20px;
      color: white;
      height: 100%;

      ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        li {
          font-size: 20px;
          list-style: none;
          color: black;
        }
      }
    }
    .order {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      gap: 20px;
      color: white;
      height: 100%;
      .order__infos {
        height: 20vh;
        display: flex;
        align-items: flex-start;
        position: relative;
        width: 200px;
        img {
            width: 50px;
            height: 50px;
            object-fit: cover;
            position: absolute;
            right: -4vw;
            border-radius: 15px;
        }
      }
    }
  }
  button {
      border: none;
      color: white;
      padding: 10px 20px;
      font-size: 20px;
      font-weight: 700;
      border-radius: 5px;
      box-shadow: 1px 2px 2px 1px hsl(0, 0%, 20%);
      cursor: pointer;
      background: goldenrod;
      &:hover {
        background: hsl(120, 8%, 70%);
      color: white;
      box-shadow: -1px -2px 2px 1px hsl(0, 0%, 20%);
    }
  }
  img {
    object-fit: cover;
  }
`;
