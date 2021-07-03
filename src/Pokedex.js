import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    const pokemon = this.props.hand;
    const totalExp = this.props.totalExp;
    const isWinner = this.props.isWinner;
    const monsters = pokemon.map((p) => (
      <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
    ));
    const winMsg = isWinner ? "You win!" : "You lose!";
    const msgClass = isWinner ? "Pokedex-win" : "Pokedex-lose";

    return (
      <div className="Pokedex">
        <h1 className={msgClass}>{winMsg}</h1>
        <h4>Your total EXP: {totalExp}</h4>
        <div className="Pokedex-cards">{monsters}</div>
      </div>
    );
  }
}

export default Pokedex;
