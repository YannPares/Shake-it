import React from 'react'
import './searchBar.css'
type Props = {}

const SearchBar = (props: Props) => {
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
   </div>
  )
}

export default SearchBar