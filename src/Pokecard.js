import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  static defaultProps = {
    Pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };

  render() {
    const pokemon = this.props.Pokemon[0];
    const POKE_API =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    const image = `${POKE_API}${pokemon.id}.png`;

    return (
      <div className="Pokecard">
        <p>{pokemon.name}</p>
        <img src={image} alt={pokemon.name} />
        <p>Type: {pokemon.type}</p>
        <p>EXP: {pokemon.base_experience}</p>
      </div>
    );
  }
}

export default Pokecard;
