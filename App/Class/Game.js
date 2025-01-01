"use strict";

import { Pokemon } from "./Pokemon.js";
import { Inventory } from "./Inventory.js";
import { fetchPokemonApi } from "../helpers/fetchPokemonApi.js";

/**
 * Classe coordonnant le jeu Pokémon.
 */

export class Game {
  inventory;
  currentPokemon;
  caughtCount;

  /**
   * Initialise le jeu en créant un nouvel inventaire, en réinitialisant le Pokémon actuel
   * et en configurant le compteur de Pokémon capturés.
   *
   * @constructor
   * @property {Inventory} inventory - L'inventaire contenant les Pokéballs disponibles.
   * @property {Pokemon|null} currentPokemon - Le Pokémon actuellement sauvage ou null s'il n'y en a pas.
   * @property {number} caughtCount - Le nombre total de Pokémon capturés.
   */
  constructor() {
    this.inventory = new Inventory();
    this.currentPokemon = null;
    this.caughtCount = 0;
  }

  /**
   * Fait apparaître un Pokémon aléatoire.
   * @returns {Pokemon} Le Pokémon apparu.
   */
  async spawnPokemon() {
    try {
      const pokemons = await fetchPokemonApi();

      if (!Array.isArray(pokemons) || pokemons.length === 0) {
        this.currentPokemon = null;
        return null;
      }

      const randomPokemonData =
        pokemons[Math.floor(Math.random() * pokemons.length)];

      if (!randomPokemonData) {
        console.error("Aucun Pokémon valide trouvé");
        this.currentPokemon = null;
        return null;
      }

      const randomPokemon = new Pokemon(randomPokemonData);
      this.currentPokemon = randomPokemon;

      return randomPokemon;
    } catch (error) {
      console.error("Erreur lors de l'appartion du Pokémon : ", error.message);
      this.currentPokemon = null;
      return null;
    }
  }

  /**
   * Tente de capturer le Pokémon.
   * @param {string} type - Le type de Pokéball utilisé.
   * @returns {Object} Résultat de la tentative (succès et message).
   */

  attemptCapture(type) {
    const successRate = this.inventory.usePokeball(type);
    if (!successRate) {
      return {
        success: false,
        message: "Pas de Pokéballs restantes !",
      };
    }

    if (this.currentPokemon && this.currentPokemon.isCaught(successRate)) {
      this.caughtCount++;
      const capturedPokemon = this.currentPokemon;
      this.currentPokemon = null;
      return {
        success: true,
        message: `Vous avez capturé ${capturedPokemon.name} !`,
      };
    }

    if (this.currentPokemon && Math.random() > 0.5) {
      const escapedPokemon = this.currentPokemon;
      this.currentPokemon = null;
      if (escapedPokemon) {
        return {
          success: false,
          message: `${escapedPokemon.name} s'est échappé !`,
        };
      }
    }

    return {
      success: false,
      message: `Aucun Pokémon à capturer. La ${type} a été utilisée`,
    };
  }

  /**
   * Réinitialise le jeu.
   */
  resetGame() {
    this.inventory.resetInventory(); // Appelle la méthode pour réinitialiser l'inventaire
    this.currentPokemon = null;
    this.caughtCount = 0;
  }
}
