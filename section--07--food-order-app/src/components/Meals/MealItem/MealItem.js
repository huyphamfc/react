import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';


function MealItem({
    id,
    name,
    description,
    price
}) {
    const fixedPrice = price.toFixed(2);

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <p className={classes.description}>{description}</p>
                <p className={classes.price}>{fixedPrice}</p>
            </div>
            <MealItemForm id={id} />
        </li>
    );
}

export default MealItem;