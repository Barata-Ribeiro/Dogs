import React from "react";
import styles from "../styles/FeedModal.module.css";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../Api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";

const FeedModal = ({ photo }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div className={styles.modal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <img src={data.src} alt="" />}
    </div>
  );
};

export default FeedModal;
