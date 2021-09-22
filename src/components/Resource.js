import { useRef } from "react";
import { useParams } from "react-router-dom";

import { useResources } from "../contexts/ResourcesContext";

function Resource() {
  const id = parseInt(useParams().id, 10);
  const { addComment, resources } = useResources();

  const commentRef = useRef();

  const resource = resources.find((candidate) => candidate.id === id);

  return (
    <>
      <p>hello {resource.url}</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const comment = commentRef.current.value;

          addComment(id, comment);
        }}
      >
        <label htmlFor="comment">Leave a comment</label>
        <input
          type="text"
          ref={commentRef}
          id="comment"
          placeholder="hello world !!!"
        />
        <button type="submit">Submit comment</button>
      </form>
      {resource.comments?.map((comment) => (
        <p>{comment}</p>
      ))}
    </>
  );
}

export default Resource;
