import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/ui";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";
import styles from "../styles/FeedModal.module.css";

const FeedModal = () => {
  const { modal } = useSelector((state) => state.ui);
  const { loading, error, data } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  const handleOutsideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) dispatch(closeModal());
  };

  useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);

  if (!modal) return null;
  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </div>
  );
};

export default FeedModal;
