import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="App-header">
      <a className="navbar-brand" href="/">
        <img
          src="https://res.cloudinary.com/moviehub/image/upload/v1708276046/ShakeItApp/shakeitApp_few8su.png"
          alt="logo"
          width="90"
          height="70"
          className="d-inline-block align-text-top"
        />
        <span className="ms-2">
          <strong>Shake It <i>"App"</i>!</strong>
        </span>
      </a>
      <nav >
        <div className="container-fluid">

          <span>Search by Ingredient</span>
          <span>All Cocktails</span>
          <span>Add Cocktail</span>

        </div>
      </nav>
    </header>
  )
}

export default Header