import styled from "styled-components";

export const ProductStyle = styled.div`
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 10px;
  box-shadow: 6px 5px 2px hsl(0, 0%, 25%);
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 8px 8px 5px hsl(0, 0%, 20%);
    transform: scale(1.05);
  }

  h2,
  h3,
  p {
    padding: 8px;
  }
  .img-container {
    max-width: 85%;
    max-height: 300px;
    margin-top: 10px;
    margin: 10px auto 0 auto;

    img {
      width: 100%;

      aspect-ratio: 3/2;
      object-fit: cover;
      border-radius: 20px;
      cursor: pointer;
    }
  }
`;
