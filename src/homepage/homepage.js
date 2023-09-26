import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollection } from "../data/slices/collectionSlice";
import { collectionSelector } from "../data/slices/collectionSlice";
import { ArtBox } from "./homepage.style";

const HomePage = () => {
  const [imageConfig, setImageConfig] = useState("");
  const [imageData, setImageData] = useState([]);

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
  }, []);

  return (
    <div>
      <h1>Art Institute of Chicago</h1>
      <ArtBox>
        {imageData?.map((c) => (
          <div key={c.id}>
            <h3>{c.title}</h3>
            <img
              src={`${imageConfig}/${c.image_id}/full/843,/0/default.jpg`}
              alt={c.title}
            />
          </div>
        ))}
      </ArtBox>
    </div>
  );
};

export default HomePage;
