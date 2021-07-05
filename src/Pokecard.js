import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    const pokemon = this.props;
    const POKE_API =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
    // const POKE_API =
    //   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

    // Force ID to always be 3 digits (padded by zeros)
    function convertID(id) {
      if (id <= 999) return `00${id}`.slice(-3);

      return id;
    }
    const image = `${POKE_API}${convertID(pokemon.id)}.png`;

    return (
      <div className="Pokecard animate__animated animate__backInLeft">
        <div className="Pokecard-container animate__animated animate__flip animate__delay-1s">
          <p className="Pokecard-name">{pokemon.name}</p>
          <div className="Pokecard-image">
            <img src={image} alt={pokemon.name} />
          </div>
          <p className="Pokecard-type">Type: {pokemon.type}</p>
          <p className="Pokecard-exp">EXP: {pokemon.exp}</p>
        </div>
      </div>
    );
  }
}

export default Pokecard;
