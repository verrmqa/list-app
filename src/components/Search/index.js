import React from "react";
import { FormGroup, InputGroup } from "@blueprintjs/core";
import "./style.css";
import "./mobile.css";

const Search = ({ searchQuery, setQuery }) => {
  return (
    <FormGroup
      className="form--search"
      helperText="Search post..."
      label="Search"
      labelFor="text-input"
    >
      <InputGroup
        id="text-input"
        placeholder="lorem ipsum"
        value={searchQuery}
        onChange={(event) => setQuery(event.target.value)}
      />
    </FormGroup>
  );
};

export default Search;
