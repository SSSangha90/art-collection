import styled from "styled-components";

export const ArtCollection = styled.div`
  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.3rem;
    padding: 0 20%;
    width: 60%;
  }
`;

export const ArtPiece = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  position: relative;
  padding-bottom: 2rem;

  > div {
    cursor: pointer;
  }

  h3 {
    white-space: nowrap;
    overflow: hidden;
    width: 16rem;
    margin-left: 2rem;
    text-overflow: ellipsis;
    position: relative;
    top: 20rem;
    left: 0;
    color: #fff;
    font-size: 1.4rem;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
    padding: 0.5rem 0;
    border-radius: 0.25rem;
    z-index: 111;
  }

  img {
    width: 20rem;
    height: 20rem;
    border-radius: 0.25rem;
    transform: scale(1);
    transition: 0.3s ease-in-out;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

/**
 * .hover01 figure img {
	-webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}
.hover01 figure:hover img {
	-webkit-transform: scale(1.3);
	transform: scale(1.3);
}
 */
