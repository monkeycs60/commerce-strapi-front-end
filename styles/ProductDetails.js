import styled from "styled-components";

export const ProductDetailsStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 10% auto;
  padding: 0 20px;
  background-color: hsl(0, 0%, 95%);
  width: 90%;
  height: 600px;
  border-radius: 15% 5% 10% 15%;
  img {
    width: 400px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }
  div {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    button {
      background: none;
      border: none;
      cursor: pointer;
    }
    #cart {
      padding: 10px 24px;
      margin-top: 20px;
      background-color: hsl(120, 38%, 70%);
      box-shadow: 1px 2px 3px 1px hsl(0, 0%, 20%);
    }
  }
`;
