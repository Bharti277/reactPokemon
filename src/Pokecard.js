import React, { Component } from "react";
import "./Pokecard.css";
var Poke_API =
  // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

  let getDigit = (num) => num<999 ? `00${num}`.slice(-3):num;

export default class Pokecard extends Component {
  render() {
    
    const imgSrc = `${Poke_API}${getDigit(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <img src={imgSrc} alt={this.props.name} />
        <p className="Pokecard-data">Type: {this.props.type}</p>
        <p className="Pokecard-data">EXP: {this.props.exp}</p>
      </div>
    );
  }
}