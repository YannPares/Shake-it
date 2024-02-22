import './card.css'
import useDrinks from '../../hooks/useDrinks';


const Card = () => {
const maxDrinks = 6;
const {drinks} = useDrinks();
const limitedDrinks = drinks.slice(0, maxDrinks);

return (
  <>
  {limitedDrinks && limitedDrinks.map((drink) => (
    
  <main className='main-card'>
    <span className='info-card'>
       
        <div >
          <header className='title-card'>{drink.strDrink}</header>
          <span className='img-card'>
            <img
              src={drink.strDrinkThumb} 
              alt="Cocktail"
              width="110vw"
              height="120vh"
            />
          </span>
          <p>Ingredients:</p>
          <p>{drink.Ingredients}
   
            
            </p>
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