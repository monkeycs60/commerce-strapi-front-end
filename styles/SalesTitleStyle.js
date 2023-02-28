import styled from "styled-components";

export const SalesTitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin: 80px 0 10px 0;
  h2 {
    color: var(--primary);
    font-size: 26px;
    font-family: "Cinzel", serif;
  }
  &::after {
    content: "";
    display: block;
    width: 30%;
    height: 5px;
    background: var(--primary);
    margin: 10px 0;
  }
`;
