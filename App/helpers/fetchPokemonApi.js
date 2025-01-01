"use strict";

/**
 * Récupère les Pokémon depuis l'API et renvoie la liste des Pokémon.
 * @returns {Array} Liste des Pokémon récupérés de l'API.
 */

export async function fetchPokemonApi() {
  try {
    const response = await fetch("https://tyradex.vercel.app/api/v1/pokemon");

    if (!response.ok) {
      throw new Error("La réponse du serveur n'est pas correcte.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des Pokémon : ",
      error.message
    );
    return [];
  }
}
