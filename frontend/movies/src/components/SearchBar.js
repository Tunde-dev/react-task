import React from 'react';

const SearchBar = ({input, setInput, setCanBeSearched, setIsLoaded}) => {
  
  const searchHandler = (e) => {
    setInput(e.target.value)
    if (e.target.value.length > 3) {
      setCanBeSearched(true)
    }else{
      setCanBeSearched(false)
    }
  }

  return (
    <input 
      className="search-bar"
      type="search" 
      id="mySearch" 
      placeholder="Find movie..."
      value={input}
      onChange={(e)=>searchHandler(e)}
    />
  );
}

export default SearchBar