import React from 'react'
import './search.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import Container from '../../components/Container/Container'


type Props = {}

const Search = (props: Props) => {
  return (
    <>
    <main className='page-container'> 
    <SearchBar/>
    <Container/>
    </main>
    </>
  )
}

export default Search