import styled from "styled-components";

export const SalesCardStyle = styled.div`
  perspective: 200px;
  transition: transform 0.7s;
  transform-style: preserve-3d;
  height: 500px;
  cursor: pointer;
  .card-front {
      position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    border-radius: 10px;
    background-color: var(--fifth);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.7s ease-in-out;
    gap: 20px;
    backface-visibility: hidden;
    height: 100%;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    .card-title {
      margin-bottom: 20px;
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
      color: var(--fourth);
    }
    img {
      width: 80%;
      height: 300px;
      object-fit: cover;
      border-radius: 10px;
      opacity: 0.6;
      filter: contrast(0.4);
    }
    .card-description {
      font-size: 1.1rem;
      text-align: center;
    }
    &:hover img {
      opacity: 1;
      filter: grayscale(0);
    }
    &:hover .corner {
        display: block;
    }
  }

  .corner {
    position: absolute;
    top: -20px;
    right: 5px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 12px;
    padding: 2px 5px;
    transition: transform 0.3s ease;
    display: none;
  }

  .card-back {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    border-radius: 10px;
    background-color: var(--fifth);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.7s ease-in-out;
    gap: 20px;
    transform: rotateY(180deg);
    backface-visibility: hidden;
    height: 100%;
    font-family: "Cinzel", serif;
    font-size: 20px;
  }

  &.flipped {
    transform: rotateY(180deg);
    .card-front {
      display: none;
    }
    .card-back {
      display: flex;
    }
  }
`;
