import MealItem, { MealStrucutre } from './MealItem'
import classes from './MealsGrid.module.css'

type MealsGridProps = {
    meals: MealStrucutre[],
}

export default function MealsGrid({meals}: MealsGridProps) {
    return(
        <ul className={classes.meals}>
            {meals.map((meal: MealStrucutre)=> <li key={meal.id}>
                <MealItem {...meal} />
            </li>)}
        </ul>
    )
}