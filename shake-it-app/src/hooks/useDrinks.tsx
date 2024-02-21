// import axios from 'axios';

import { useEffect, useState } from "react";
import { fetchDrinks } from "../DB/API"
import { drinks } from "../types/drinks";





const useDrinks = () => {
    const [drinks, setDrinks] = useState<drinks[]>([]);

useEffect(() => {
    const getDrinks = async () => {
        const drinks = await fetchDrinks();
       setDrinks(drinks);
    }
    getDrinks();
},[]);

return {drinks}
}


export default useDrinks
  