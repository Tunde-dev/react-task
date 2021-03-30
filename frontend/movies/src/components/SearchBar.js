import React from 'react';

const SearchBar = ({input, setInput}) => {
  
  const searchHandler = (e) => {
    setInput(e.target.value)
  }

  return (
    <input 
      className="search-bar"
      type="search" 
      placeholder="Find movie..."
      value={input}
      onChange={(e)=>searchHandler(e)}
    />
  );
}

export default SearchBar