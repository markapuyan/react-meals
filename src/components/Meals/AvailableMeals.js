
import { useEffect, useState } from 'react'
import axios  from 'axios';
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css'

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  
  useEffect( () => {
    const fetchMeals = async () => {
      const res = await axios.get("https://custom-hooks-53089-default-rtdb.firebaseio.com/meals.json")
      let meals = []
      Object.entries(res.data).forEach(([key, value]) => { meals.push(value) });
      setMeals(meals)
    }
    fetchMeals()
  }, [])

    
    const mealsList = meals.map(meal => 
        (<MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name} 
            description={meal.description} 
            price={meal.price}
        />
    ))

    return <section className={classes.meals}>
        <Card>
            <ul>{mealsList}</ul>
        </Card>
    </section>

}


export default AvailableMeals