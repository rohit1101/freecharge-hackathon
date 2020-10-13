import { Link } from '@reach/router';
import React from 'react';



export default class App extends React.Component {
  state={
    recipe_arr:[]
  }

  async componentDidMount() {
    const res=await fetch('http://starlord.hackerearth.com/recipe')
    const data=await res.json()
    this.setState({recipe_arr:data})
    localStorage.setItem('recipe_arr',JSON.stringify(this.state.recipe_arr))
  }
  
  render() {
    return (
      <div>
        <h1>Recipes</h1>
        {this.state.recipe_arr.map(recipe=> {
          return (
            <div key={recipe.id}>
                <h2>{recipe.name}</h2>
                <h3>{recipe.category}</h3>
                <h4>${recipe.price}</h4>
                <img src={recipe.image} alt={recipe.name} />
                <p>{recipe.description}</p>
                <h5>Label: {recipe.label ? recipe.label : 'Random' }</h5>
                
                <Link to={`/payment/${recipe.id}`}>Pay Now</Link>
                <hr/>
            </div>
          )
        })}
      </div>
    )
  }
}


