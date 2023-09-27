import styled from "styled-components";

export const Container = styled.div`
  span {
    font-size: 2rem;
    position: absolute;
    left: 2rem;
    cursor: pointer;
  }

  img {
    width: 20rem;
    height: auto;
    box-shadow: 3px 3px 2px #000;
  }

  .description {
    padding: 1rem 10%;
    text-align: center;

    p:last-child {
      text-align: left;
    }
  }
`;
