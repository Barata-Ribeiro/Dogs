import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../store/photo";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";
import styles from "../styles/FeedModal.module.css";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { loading, error, data } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhoto(photo.id));
  }, [photo, dispatch]);

  const handleOutsideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) setModalPhoto(null);
  };

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </div>
  );
};

export default FeedModal;
