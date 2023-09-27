import React from "react";
import { useSelector } from "react-redux";
import { collectionSelector } from "../../data/slices/collectionSlice";
import { Container } from "./artpage.style";

const ArtPage = () => {
  const art = useSelector(collectionSelector).selected[0];
  const image = useSelector(collectionSelector).images;

  return (
    <Container>
      <h1>{art.title}</h1>
      <img
        src={`${image.config.iiif_url}/${art.image_id}/full/843,/0/default.jpg`} // endpoint Chicago Art institute uses for providing images
        alt={art.title}
      />
      <p>Place of origin: {art.place_of_origin}</p>
      <p>{art.description?.replace("<p>", "")}</p>
    </Container>
  );
};

export default ArtPage;
