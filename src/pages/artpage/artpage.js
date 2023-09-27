import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { collectionSelector } from "../../data/slices/collectionSlice";
import { Container } from "./artpage.style";

const ArtPage = () => {
  const art = useSelector(collectionSelector).selected[0];
  const image = useSelector(collectionSelector).images;

  const description = useMemo(() => {
    if (art.description) {
      return art.description.replace(/(<([^>]+)>)/gi, "");
    }
  }, [art.description]);

  return (
    <Container>
      <h1>{art.title}</h1>
      <div>
        <img
          src={`${image.config.iiif_url}/${art.image_id}/full/843,/0/default.jpg`} // endpoint Chicago Art institute uses for providing images
          alt={art.title}
        />
        <div className="description">
          {art.artist_display && <p>Artist: {art.artist_display}</p>}
          {art.place_of_origin && <p>Place of origin: {art.place_of_origin}</p>}
          <p>{description}</p>
        </div>
      </div>
    </Container>
  );
};

export default ArtPage;
