import styled from "styled-components";

export const HeroBannerStyle = styled.div`
  background-image: url("herobanner-fullplants-rogner.png");
  background-size: cover;
  /* background-position: center; */
  background-repeat: no-repeat;
  background-color: red;
  height: 400px;
  position: relative;
  border-radius: 20px;
  padding: 0 20px;
  .hero-banner__content {
    /* background: black; */
     h1 {
    color: black;
    font-size: 60px;
    font-weight: 700;
    text-shadow: 2px 2px 2px white;
    background-color: rgba(189, 195, 199, 0.4);
    text-align: end;

  }
}
`;
