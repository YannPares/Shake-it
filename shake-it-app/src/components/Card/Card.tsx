import React from 'react'
import './card.css'
type Props = {}

const Card = (props: Props) => {
  return (
    <main className='main-card'>
      <span className='info-card'>
        <header className='title-card'>Lorem ipsum dolor sit</header>
        <span className='img-card'>
        <img src="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" alt="Cocktail"
        width="40px"
        height="40px"
        />
      </span>
        <p className='description-card'> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corporis nostrum saepe. Optio expedita voluptate ratione aliquam. 
        </p>
        <footer>
          <h6>contains % alcohol</h6>
        </footer>
      </span>
    </main>
  )
}

export default Card