import React from "react";
import { ReactComponent as Enviar } from "../../assets/enviar.svg";
import useFetch from "../../Hooks/useFetch";

const PhotoCommentsForm = ({ id }) => {
  const [comment, setComment] = React.useState("");
  const { request, error } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    request(url, options);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">
        <textarea
          id="comment"
          name="comment"
          placeholder="Comente..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />
      </label>
      <button>
        <Enviar />
      </button>
    </form>
  );
};

export default PhotoCommentsForm;
