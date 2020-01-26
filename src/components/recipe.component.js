import React from 'react';

const Recipe = ({ title, calories, image, ingredients, totalNutrients }) => {

    const convertCalorie = Math.round(calories)

    return (
        <div>
            <span><h3 className='heading'>{title}</h3></span>
            <span><img className='rounded-circle pic' src={image} alt='food' /></span>
            <span><p>Calories: {convertCalorie}</p></span>
            <span><ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol></span>
        </div>
    )
}

export default Recipe;