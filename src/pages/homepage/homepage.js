import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  fetchCollection,
  selectedArtwork,
} from "../../data/slices/collectionSlice";
import { collectionSelector } from "../../data/slices/collectionSlice";
import { ArtPiece, ArtCollection } from "./homepage.style";

const HomePage = () => {
  const [imageConfig, setImageConfig] = useState("");
  const [imageData, setImageData] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const collection = useSelector(collectionSelector).collection;

  const imageIds = useMemo(() => {
    return collection.map((c) => c.id).toString();
  }, [collection]);

  const fetchImageData = async () => {
    const res = await fetch(
      `https://api.artic.edu/api/v1/artworks?ids=${imageIds}&fields=id,title,image_id`
    );
    const resJson = await res.json();
    setImageData(resJson.data);
    setImageConfig(resJson.config.iiif_url);
  };

  useEffect(() => {
    dispatch(fetchCollection());
  }, [dispatch]);

  useEffect(() => {
    fetchImageData();
  }, [collection]);

  const onArtClicked = useCallback(
    (collection) => {
      dispatch(selectedArtwork(collection.id));
      navigate(`/${collection.title}`);
    },
    [dispatch]
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
        {imageData?.map((c, i) => (
          <div key={c.id} onClick={() => onArtClicked(c)}>
            <h3>{c.title}</h3>
            <img
              src={`${imageConfig}/${c.image_id}/full/843,/0/default.jpg`} // endpoint Chicago Art institute uses for providing images
              alt={c.title}
            />
          </div>
        ))}
      </ArtPiece>
    </ArtCollection>
  );
};

export default HomePage;
