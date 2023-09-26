import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCollections } from "../data/slices/collectionsSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollections());
  });

  return <div>HomePage</div>;
};

export default HomePage;
