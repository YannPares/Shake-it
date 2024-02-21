import axios from 'axios'


const url =  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const filter = "a"




export const fetchDrinks = async () => {
  try {
    const response = await axios.get(`${url}${filter}`);
    const data = response.data.drinks || [];
    return data;
  } catch (error) {
    console.error('Error fetching drinks:', error);
    throw error; 
  }
};
