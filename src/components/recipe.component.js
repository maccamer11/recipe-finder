import React from 'react';
import FoodModal from './modal.component';


const Recipe = ({ title, calories, img, ingredients, digests, serving }) => {

    const convertCalorie = Math.round(calories / serving)
    const convertLabel = digests.map(digest => (
        <li>{digest.label}</li>
    ))

    const convertTotal = digests.map(digest => (
        digest.total
    ))



    var x = 0;
    var len = convertTotal.length
    while (x < len) {
        convertTotal[x] = convertTotal[x].toFixed();
        x++
    }
    console.log(convertTotal)


    /* const roundTotal = convertTotal.toString()
    const numTotal = roundTotal.split(',').map(function (item) {
        return parseInt(item, 10);
    });
    
    console.log(roundTotal)
    console.log(numTotal) */




    return (
        <div>
            <span><h3 className='heading'>{title}</h3></span>
            <span><img className='rounded-circle pic' src={img} alt='food' /></span>
            <span><p>Calories per serving: {convertCalorie}</p></span>
            {/* <span><FoodModal /></span> */}
            <span>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </span>
            <span>
                <li>{convertLabel}</li>
                <li>{convertTotal.map(convert => (
                    <li>{convert}</li>
                ))}</li>
            </span>
        </div>
    )
}
//map convertTotal to list each element in the array

export default Recipe;