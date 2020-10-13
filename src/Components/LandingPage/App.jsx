import { Link } from '@reach/router';
import React from 'react';
import styles from './App.module.css'

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
      <div className={styles.container}>
        <h1>Recipes</h1>
        <div className={styles.card_container}>
        {this.state.recipe_arr.map(recipe=> {
          return (
            <div key={recipe.id} className={styles.card}>
            
                <h2>{recipe.name}</h2>
                <h3>{recipe.category}</h3>
                <h4>${recipe.price}</h4>
                <img width="200px" height="150px" src={recipe.image} alt={recipe.name} />
                <p>{recipe.description}</p>
                <h5>Label: {recipe.label ? recipe.label : 'Random' }</h5>
                <Link to={`/payment/${recipe.id}`}>Pay Now</Link>
            </div>
            
          )
        })}
        </div>

      </div>
    )
  }
}


