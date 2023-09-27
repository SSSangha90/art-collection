import styled from "styled-components";

export const Container = styled.div`
  h1 {
    margin-top: 5rem;
  }
  span {
    font-size: 2rem;
    position: absolute;
    left: 3rem;
    cursor: pointer;
    top: 2rem;
  }

  img {
    width: 20rem;
    height: auto;
    box-shadow: 3px 3px 2px #000;
  }

  .description {
    padding: 1rem 10%;
    text-align: center;
    border: 0.5rem solid rgba(231, 189, 135, 0.2);
    margin: 2rem;
    font-size: 1.125rem;

    p:last-child {
      text-align: left;
    }
  }
`;
