import './card.css'
import useDrinks from '../../hooks/useDrinks';


 const drinkArray = []



const Card = () => {

const {drinks} = useDrinks()

return (
  <main className='main-card'>
    <span className='info-card'>
       {drinks.map((drink) => (
        <div >
          <header className='title-card'>{drink.strDrink}</header>
          <span className='img-card'>
            <img
              src={drink.strDrinkThumb} 
              alt="Cocktail"
              width="40px"
              height="40px"
            />
          </span>
        
          <footer>
            <h6>contains {drink.strAlcoholic}% alcohol</h6>
          </footer>
        </div>
      ))} 
    </span>
  </main>
);
 
        }


export default Card