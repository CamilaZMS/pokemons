import { useCallback, useState } from "react";
import { getPokemonList } from "../../services/pokemons";
import { useNavigate } from "react-router-dom";

export const useFetchPokemons = () => {
  const navigation = useNavigate();
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const limit = 30;

  const fetchPokemons = useCallback(async () => {
    try {
      setLoading(true);
      const pokemonData = await getPokemonList(offset, limit);
      setPokemons(pokemonData.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [offset, limit]);

  const fetchNextPage = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    setOffset((prevOffset) => prevOffset + limit);
  }, [limit]);

  const fetchPrevPage = useCallback(() => {
    setOffset((prevOffset) => {
      if (prevOffset >= limit) {
        return prevOffset - limit;
      }
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
      return prevOffset;
    });
  }, [limit]);

  const getPokemonImageUrl = useCallback((pokemonUrl) => {
    const pokemonId = pokemonUrl.split("/")[6];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
  }, []);

  const handleNavigate = useCallback(
    (id) => {
      navigation(`/pokemon/${id}`);
    },
    [navigation]
  );

  const extractPokemonIdFromUrl = useCallback((url) => {
    const urlParts = url.split("/");
    return urlParts[urlParts.length - 2];
  }, []);

  return {
    offset,
    loading,
    pokemons,
    fetchPokemons,
    fetchNextPage,
    fetchPrevPage,
    handleNavigate,
    getPokemonImageUrl,
    extractPokemonIdFromUrl,
  };
};
