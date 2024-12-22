"use strict";

import { pokeballs, resetPokeballs } from "../helpers/pokeballs.js"; // NameSpace

/**
 * Classe représentant l'inventaire des Pokéballs par défaut.
 */

export class Inventory {
  constructor() {}

  /**
   * Récupère l'état actuelle de l'inventaire.
   *
   * @returns {Object} - Un objet contenant les types de Pokéballs et leur informations
   */
  getInventory() {
    const inventory = {};
    // Parcourt chaque type de Pokéball et récupère seulement la quantité
    for (const [type, data] of Object.entries(pokeballs)) {
      inventory[type] = data.count;
    }
    return inventory;
  }

  /**
   * Réinitialise l'inventaire aux valeurs par défaut.
   */
  resetInventory() {
    resetPokeballs(); // Appelle la fonction pour réinitialiser les Pokéballs
  }

  /**
   * Utilise une Pokéball de l'inventaire
   *
   * @param {string} type - Le type de Pokéball à utiliser
   * @returns {number|null} - Le taux de réussite de la Pokéball ou null *  si indisponible.
   */
  usePokeball(type) {
    const pokeball = pokeballs[type];
    if (pokeball && pokeball.count > 0) {
      pokeball.count--;
      return pokeball.successRate;
    } else {
      return null;
    }
  }

  /**
   * Ajoute une Pokéball aléatoire à l'inventaire.
   *
   * @returns {string} - Le type de Pokéball ajouté
   */
  addRandomPokeball() {
    const types = Object.keys(pokeballs);
    const randomType = types[Math.floor(Math.random() * types.length)];
    pokeballs[randomType].count++;
    return randomType;
  }
}
