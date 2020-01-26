import React from 'react';

const Recipe = ({ title, calories, image, ingredients, time }) => {
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt='food' />
            <p>{calories}</p>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe;