import React, {Component} from 'react';
import {recipeByName} from './apiCalls/apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      recipies: [],
      error: ''
    }
  }

  async componentDidMount() {
    try{
      const recipies = await recipeByName('a')
      this.setState({ recipies })
    } catch ({message}){
      this.setState({error:message})
    }
  }

  getRecipeNames = () => {
    const recipeName = this.state.recipies.map(recipe => {
      return (
        <ul>
          <li>{recipe.strMeal}</li>
        </ul>
      )
    })
    return recipeName
  }

  render() {
    console.log(this.state.recipies)
    return (
      <div>
        {this.getRecipeNames()}
      </div>
    )
  }
}

export default App;
