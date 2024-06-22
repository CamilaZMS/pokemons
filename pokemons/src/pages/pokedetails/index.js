import React from "react";
import { usePokemonDetails } from "./hooks";
import "./style.css";

const PokemonDetail = () => {
  const { pokemon, loading } = usePokemonDetails();

  if (loading) {
    return <p> Loading </p>;
  }

  if (!pokemon) {
    return null;
  }

  return (
    <div className="pokemon-detail">
      <h2 className="pokemon-detail-name">{pokemon.name}</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        alt={pokemon.name}
        className="pokemon-detail-image"
      />
      <div className="pokemon-detail-stats">
        <p>Altura: {pokemon.height / 10} m</p>
        <p>Peso: {pokemon.weight / 10} kg</p>
        <p>
          Tipos:{" "}
          {pokemon.types.map((typeInfo) => typeInfo.type.name).join(", ")}
        </p>
        <p>
          Habilidades:{" "}
          {pokemon.abilities
            .map((abilityInfo) => abilityInfo.ability.name)
            .join(", ")}
        </p>
      </div>
    </div>
  );
};

export default PokemonDetail;
