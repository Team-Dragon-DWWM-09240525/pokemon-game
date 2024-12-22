"use strict";

/**
 * Récupère les Pokémon depuis l'API et renvoie la liste des Pokémon.
 * @returns {Array} Liste des Pokémon récupérés de l'API.
 */
export async function fetchPokemonApi() {
  try {
    const response = await fetch("https://tyradex.vercel.app/api/v1/pokemon");
    const data = await response.json(); // Parse les données JSON de la réponse

    return data; // Retourne les Pokémon récupérés
  } catch (error) {
    console.error("Erreur lors de la récupération des Pokémon :", error);
    return []; // Retourne un tableau vide en cas d'erreur
  }
}
