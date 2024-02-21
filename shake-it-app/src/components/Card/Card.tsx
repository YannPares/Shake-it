import './card.css'
import useDrinks from '../../hooks/useDrinks';


const Card = () => {

const {drinks} = useDrinks()

return (
  <>
  {drinks && drinks.map((drink) => (
    
  <main className='main-card'>
    <span className='info-card'>
       
        <div >
          <header className='title-card'>{drink.strDrink}</header>
          <span className='img-card'>
            <img
              src={drink.strDrinkThumb} 
              alt="Cocktail"
              width="200vh"
              height="200vh"
            />
          </span>
          <p>{drink.strInstructions}</p>
        
          <footer>
            <h6>contains {drink.strAlcoholic}% alcohol</h6>
          </footer>
        </div>
     
    </span>
  </main> 
 ))}  </>
  
);
 
        }


export default Card