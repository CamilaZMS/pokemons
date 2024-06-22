import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetails } from "../../services/pokemons.js";

export const usePokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPokemonDetails = useCallback(async () => {
    try {
      setLoading(true);
      const pokemonData = await getPokemonDetails(id);
      setPokemon(pokemonData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchPokemonDetails();
  }, [fetchPokemonDetails]);

  return { pokemon, loading };
};
