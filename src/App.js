import React, { useEffect, useState } from 'react';
import Recipe from './components/recipe.component';
import Titles from './components/title.component';
import FoodModal from './components/modal.component';



import './App.css';


const App = () => {

  const [recipes, setRecipes] = useState([]);

  //state for search element
  const [search, setSearch] = useState('');

  //state to ensure our search only submits after button is clicked, not on each key entered. Saves us API reqs.
  const [query, setQuery] = useState('');

  //second argument array makes useEffect function run. Empty = run once. Query means it runs when we hit submit button.
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=20`)
    //convert data to json, easy to work with
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }

  //onChange function for input search element
  const updateSearch = e => {
    setSearch(e.target.value);
  }

  //run upon form submission
  const getSearch = e => {
    //stop page refresh on submission
    e.preventDefault();
    setQuery(search);
    //set search back to empty string
    setSearch('');
  }



  return (

    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-5 title-container'>
          <Titles />
        </div>
        <div className='col-md-7 form-container'>
          <div className='row justify-content-center'>
            <div className='search-form'>
              <form onSubmit={getSearch}>
                <input className='search-bar' type='text' value={search} onChange={updateSearch} />
                <button className='search-button' type='submit'>Search</button>
              </form>
            </div>
          </div>

          <div className='row'>
            <div className='recipes'>
              {recipes.map(recipe => (
                <Recipe
                  key={recipe.recipe.label}
                  title={recipe.recipe.label}
                  img={recipe.recipe.image}
                  calories={recipe.recipe.calories}
                  ingredients={recipe.recipe.ingredients}
                  serving={recipe.recipe.yield}
                  digests={recipe.recipe.digest}
                ><div><FoodModal /></div>
                </Recipe>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default App;
