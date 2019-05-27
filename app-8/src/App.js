import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import PokemonList from './components/PokemonList/PokemonList'
import Axios from "axios";

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemonList: "",
      pokemon
    }
  }

  componentDidMount(){
    grabNewPokemon(this.state.count)
   
  }

  grabNewPokemon(){
    let pokemonCopyList = this.state.pokemonList.slice()
    Axios.get('https://pokeapi.co/api/v2/pokemon/${num}').then(resp => {
      pokemonCopyList.push resp.data     
    })
  }


  render() {
    return (
      <div className="App">
        <PokemonList />
      
      </div>
    );
  }
}

export default App;
