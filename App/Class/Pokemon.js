"use strict";
/**
 * Classe représentant un Pokémon sauvage.
 */
export class Pokemon {
  name;
  type;
  catchRate;

  /**
   * Le constructor sert à construire un nouvel objet
   *
   * @param {string} name - Le nom du Pokémon
   * @param {string} type - Le type du Pokémon
   * @param {number} catchRate - Le taux de capture du Pokémon (0 à 1)
   */
  constructor(name, type, catchRate) {
    this.name = name;
    this.type = type;
    this.catchRate = catchRate;
  }
  /**
   * Vérifie si le Pokémon est capturé
   *
   * @param {number} successRate - Le taux de réussite de la pokéball.
   * @returns {boolean} - vrai si le Pokémon est capturé
   */
  isCaught(successRate) {
    //Calcule si le Pokémon est capturé en multipliant le taux de capture par le taux de réussite.
    return Math.random() < successRate * this.catchRate;
  }
}


