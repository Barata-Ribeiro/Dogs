import React from "react";
import styles from "../styles/PhotoDelete.module.css";
import { PHOTO_DELETE } from "../../Api";
import useFetch from "../../Hooks/useFetch";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  const handleClick = async (e) => {
    e.preventDefault();
    const { url, options } = PHOTO_DELETE(id);
    const { response } = await request(url, options);
    if (response.ok) window.location.reload();
  };

  return (
    <>
      <button onClick={handleClick} className={styles.delete}>
        Deletar
      </button>
    </>
  );
};

export default PhotoDelete;
