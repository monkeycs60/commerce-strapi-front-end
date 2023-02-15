import styled from "styled-components";

export const ProductStyle = styled.div`
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

    h2, h3, p {
        padding: 10px;
    }
  img {
    border-radius: 10px;
    width: 300px;
    height: 200px;
    object-fit: cover;
    cursor: pointer;
  }
`;
