import React, { useEffect } from "react";
import { useFetchPokemons } from "./hooks.js";
import "./style.css";

const PokeList = () => {
  const {
    offset,
    loading,
    pokemons,
    fetchPokemons,
    fetchNextPage,
    fetchPrevPage,
    handleNavigate,
    getPokemonImageUrl,
    extractPokemonIdFromUrl,
  } = useFetchPokemons();

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  if (loading && pokemons.length === 0) {
    return <p> Loading </p>;
  }

  return (
    <div className="pokemon-list">
      <h1 className="title">Escolha seu Pokémon</h1>
      <div className="pokemon-cards-container">
        {pokemons.map((pokemon) => (
          <div
            key={extractPokemonIdFromUrl(pokemon.url)}
            className="pokemon-card"
            onClick={() => handleNavigate(extractPokemonIdFromUrl(pokemon.url))}
          >
            <h2 className="pokemon-name">{pokemon.name}</h2>
            <img
              src={getPokemonImageUrl(pokemon.url)}
              alt={pokemon.name}
              style={{ width: `100%`, objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
      <div className="pagination-buttons">
        <button onClick={fetchPrevPage} disabled={!offset}>
          Página Anterior
        </button>
        <button onClick={fetchNextPage}>Próxima Página</button>
      </div>
    </div>
  );
};

export default PokeList;
