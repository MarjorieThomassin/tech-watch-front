// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import { useResources } from "../contexts/ResourcesContext";

function SearchBar() {
  const { addResource } = useResources();
  const inputRef = useRef();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const url = inputRef.current.value;

        addResource(url);
      }}
    >
      <input
        type="url"
        ref={inputRef}
        placeholder="https://www.smashingmagazine.com/"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SearchBar;
