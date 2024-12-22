"use strict";

import { Pokemon } from "./Pokemon.js";
import { Inventory } from "./Inventory.js";

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
  spawnPokemon() {
    const pokemons = [
      new Pokemon("Pikachu", "Electric", 0.6),
      new Pokemon("Charmander", "Fire", 0.4),
      new Pokemon("Bulbasaur", "Grass", 0.5),
    ];

    this.currentPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
    return this.currentPokemon;
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
      message: `Aucun Pokémon à capturer. La Pokéball a été utilisée`,
    };
  }

  /**
   * Réinitialise le jeu.
   */
  resetGame() {
    this.inventory = new Inventory();
    this.currentPokemon = null;
    this.caughtCount = 0;
  }
}
