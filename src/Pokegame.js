import React, { Component } from "react";
import Pokedex from "./Pokedex";
import "./Pokegame.css";

class Pokegame extends Component {
  render() {
    const pokemon = [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ];
    let hand1XP, hand2XP;
    let hand1 = pokemon;
    let hand2 = [];

    function createHands(hand1, hand2) {
      while (hand2.length < hand1.length) {
        let randomNum = Math.floor(Math.random() * hand1.length);
        hand2.unshift(hand1[randomNum]);
        hand1 = [...hand1.slice(0, randomNum), ...hand1.slice(randomNum + 1)];
      }
      return hand1;
    }

    function calcExp(hand) {
      return hand.reduce((prev, curr) => {
        return prev + curr.base_experience;
      }, 0);
    }

    function isWinner(exp1, exp2) {
      return exp1 > exp2;
    }

    hand1 = createHands(hand1, hand2);
    hand1XP = calcExp(hand1);
    hand2XP = calcExp(hand2);

    return (
      <div className="Pokegame">
        <Pokedex
          hand={hand1}
          totalExp={hand1XP}
          isWinner={isWinner(hand1XP, hand2XP)}
        />
        <Pokedex
          hand={hand2}
          totalExp={hand2XP}
          isWinner={isWinner(hand2XP, hand1XP)}
        />
      </div>
    );
  }
}

export default Pokegame;
