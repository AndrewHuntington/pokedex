import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    const pokemon = this.props;
    const POKE_API =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    const image = `${POKE_API}${pokemon.id}.png`;

    return (
      <div className="Pokecard">
        <p className="Pokecard-name">{pokemon.name}</p>
        <img src={image} alt={pokemon.name} />
        <p className="Pokecard-type">Type: {pokemon.type}</p>
        <p className="Pokecard-exp">EXP: {pokemon.exp}</p>
      </div>
    );
  }
}

export default Pokecard;
