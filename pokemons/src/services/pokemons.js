import api from "./api";

export const getPokemonList = async (offset = 0, limit = 10) => {
  try {
    const response = await api.get(`/pokemon`, {
      params: {
        offset,
        limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar Pokémons:", error);
  }
};
