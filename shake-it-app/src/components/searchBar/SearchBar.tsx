import React, { useState } from 'react'
import './searchBar.css'
type Props = {}

const SearchBar = (props: Props) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  }
 
  return (
  <div className='search-bar-container'>
   
 
  <input className='search-bar' 
  id="search" 
  name="search" 
  autoComplete="on" 
  autoFocus
  maxLength={50}
  minLength={3}
  type="text" 
  placeholder="Search here" />
  <button className='search-button' type="submit" value="Search"
  onClick={() => handleSearchInputChange }
  >
    Search  </button> 
  </div>

  )
}

export default SearchBar