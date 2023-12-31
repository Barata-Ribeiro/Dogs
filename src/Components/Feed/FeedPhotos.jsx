import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/FeedPhotos.module.css";
import FeedPhotosItem from "./FeedPhotosItem";

const FeedPhotos = () => {
  const { list } = useSelector((state) => state.feed);
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {list.map((photo) => (
        <FeedPhotosItem key={photo.id} photo={photo} />
      ))}
    </ul>
  );
};

export default FeedPhotos;
