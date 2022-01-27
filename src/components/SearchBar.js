import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  // const onInputChange = (event) => {
  //   setTerm(event.target.value);
  // };
  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            //  onChange={e=>this.setState({term:e.target.value})};
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
