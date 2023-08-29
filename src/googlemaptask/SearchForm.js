// SearchForm.js
import React from 'react';

const SearchForm = ({ onSubmit }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const searchTerm = event.target.searchTerm.value;
    onSubmit(searchTerm);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="searchTerm" placeholder="Search for shops..." />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
