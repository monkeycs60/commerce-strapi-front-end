import styled from "styled-components";

export const HeroBannerStyle = styled.div`
  display: flex;
  flex-direction: column;

  .hero-banner__container {
    background: var(--third);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 30px 30px 0 0;
    height: 400px;
    padding: 20px;
    font-family: "Roboto", sans-serif;
    position: relative;
    overflow: hidden;

    h1 {
      font-size: 30px;
      font-weight: 700;
      color: black;
      width: 16%;
    }
    .hero-banner__image {
      height: 80%;
      width: 30%;
      position: relative;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
      }
      p {
        position: absolute;
        top: 0;
        right: 0;
        background: #daa520;
        color: white;
        padding: 5px 10px;
        font-size: 16px;
        /* font-weight: 600; */
        border-radius: 5px 10px 5px 5px;
      }
      span {
        color: var(--sixth);
        font-size: 12px;
        font-weight: 700;
        text-decoration: underline;
      }
    }
    .hero-banner__details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 30px;
      align-items: flex-start;
      width: 30%;
      height: 100%;
      .hero-banner__price {
        font-size: 24px;
        font-weight: 700;
        font-family: "Cinzel", serif;
      }
      .hero-banner__description {
        font-size: 18px;
      }
      button {
        background: #daa520;
        color: var(--sixth);
        border: 1px solid #daa520;
        border-radius: 10px;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          background: var(--sixth);
          color: #daa520;
          transform: scale(1.05);
        }
      }
    }
    .hero-banner__new {
      position: absolute;
      top: 2vh;
      left: -3.5vw;
      background: #1a090d;
      color: white;
      padding: 2px 80px;
      transform: rotate(-45deg);
    }
  }
  .hero-banner__scroll {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding: 6px 40px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    border-radius: 0 0 30px 30px;
    background-image: linear-gradient(
      to right,
      #1a090d 33%,
      #daa520 55%,
      #1a090d 33%
    );
    background-size: 300% 100%;
    background-position: right;
    transition: background 1.5s ease-in;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &:hover {
      background-position: left;
      transition: background 1s ease-in;
    }
  }
`;
