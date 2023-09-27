import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  fetchCollection,
  fetchImages,
  selectedArtwork,
} from "../../data/slices/collectionSlice";
import { collectionSelector } from "../../data/slices/collectionSlice";
import { ArtPiece, ArtCollection } from "./homepage.style";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const collection = useSelector(collectionSelector).collection;
  const images = useSelector(collectionSelector).images;

  const imageIds = useMemo(() => {
    return collection.map((c) => c.id).toString();
  }, [collection]);

  useEffect(() => {
    dispatch(fetchCollection());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchImages(imageIds));
  }, [dispatch, imageIds]);

  const onArtClicked = useCallback(
    (collection) => {
      dispatch(selectedArtwork(collection.id));
      navigate(`/${collection.title}`);
    },
    [dispatch, navigate]
  );

  return (
    <ArtCollection>
      <h1>Art Institute of Chicago</h1>
      <p>
        Explore thousands of artworks in the museum’s collection—from our
        renowned icons to lesser-known works from every corner of the globe—as
        well as our books, writings, reference materials, and other resources.
      </p>
      <ArtPiece>
        {images?.data?.map((c, i) => (
          <div key={c.id} onClick={() => onArtClicked(c)}>
            <h3>{c.title}</h3>
            <img
              src={`${images.config.iiif_url}/${c.image_id}/full/843,/0/default.jpg`} // endpoint Chicago Art institute uses for providing images
              alt={c.title}
            />
          </div>
        ))}
      </ArtPiece>
    </ArtCollection>
  );
};

export default HomePage;
