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
      const pokemons = await fetchPokemonApi(); // Récupère les Pokémon depuis l'API

      // Vérifie si l'API a renvoyé des Pokémon
      if (!Array.isArray(pokemons) || pokemons.length === 0) {
        this.currentPokemon = null; // Si aucun Pokémon n'est récupéré
        return null;
      }

      // Choisit un Pokémon au hasard dans la liste récupérée
      const randomPokemonData =
        pokemons[Math.floor(Math.random() * pokemons.length)];

      // Vérifie si le Pokémon aléatoire est valide
      if (!randomPokemonData) {
        console.error("Aucun Pokémon valide trouvé.");
        this.currentPokemon = null;
        return null;
      }

      // Crée une nouvelle instance de Pokémon avec les données de l'API
      const randomPokemon = new Pokemon(randomPokemonData);
      this.currentPokemon = randomPokemon;

      return randomPokemon; // Retourne le Pokémon choisi
    } catch (error) {
      console.error("Erreur lors de l'apparition du Pokémon :", error);
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
    const successRate = this.inventory.usePokeball(type); // Récupère le taux de réussite de la Pokéball

    if (!successRate) {
      return {
        success: false,
        message: "Pas de Pokéballs restantes !",
      };
    }

    // Vérification si un Pokémon est bien présent à capturer
    if (!this.currentPokemon) {
      return {
        success: false,
        message: "Aucun Pokémon à capturer. La Pokéball a été utilisée.",
      };
    }

    // Si un Pokémon est présent et qu'il est capturé
    if (this.currentPokemon && this.currentPokemon.isCaught(successRate)) {
      this.caughtCount++;
      const capturedPokemon = this.currentPokemon;
      this.currentPokemon = null;
      return {
        success: true,
        message: `Vous avez capturé ${capturedPokemon.name} !`,
      };
    }

    // Si aucun Pokémon n'est capturé mais que l'on tente une capture
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

    // Si le Pokémon décide de rester dans le combat
    return {
      success: false,
      message: `La Pokéball a été utilisée, mais ${this.currentPokemon.name} a résisté ! Il reste dans la bataille.`,
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
