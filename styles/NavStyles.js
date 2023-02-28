import styled from "styled-components";

export const NavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: var(--fifth);
  height: 80px;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 70px;
  a {
    font-size: 36px;
    color: hsl(120, 81%, 17%);
    text-decoration: none;
    font-family: "Cinzel", serif;
    font-weight: 600;
  }
  .clickable-pannel {
    display: flex;
    align-items: center;
    gap: 20px;
    div {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: center;
      position: relative;
      svg {
        cursor: pointer;
      }
      p {
        position: absolute;
        top: -12px;
        right: -16px;
        font-size: 16px;
        font-weight: 500;
        color: white;
        background: goldenrod;
        border-radius: 50%;
        width: 22px;
        height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
