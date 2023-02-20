import styled from "styled-components";

export const NavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: hsl(0, 0%, 95%);
  height: 80px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 30px;
  a {
    font-size: 28px;
    color: hsl(120, 81%, 17%);
    text-decoration: none;
  }
  div {
    display: flex;
    flex-direction: column-reverse;
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
`;
