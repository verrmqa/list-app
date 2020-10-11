import React from 'react';
import { FormGroup, InputGroup } from "@blueprintjs/core";

const Header = ({searchQuery, setQuery}) => {
  return (
    <header className="App-header">
      <FormGroup
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
    </header>
  );
};

export default Header;