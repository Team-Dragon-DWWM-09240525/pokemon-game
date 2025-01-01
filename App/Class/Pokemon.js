"use strict";
/**
 * Classe représentant un Pokémon sauvage.
 */
export class Pokemon {
  name;
  type;
  sprite;
  catchRate;

  /**
   * Le constructor sert à construire un nouvel objet
   *
   * @param {string} name - Le nom en français du Pokémon
   * @param {string} type - Le type du Pokémon
   * @param {string} sprite - Le sprite (image) du Pokémon
   * @param {number} catchRate - Le taux de capture depuis l'API
   */
  constructor(data) {
    this.name = data.name.fr;
    this.type = data.types.map((type) => type.name).join(", ");
    this.sprite = data.sprites.regular;
    this.catchRate = data.catch_rate;
  }
  /**
   * Vérifie si le Pokémon est capturé
   *
   * @param {number} successRate - Le taux de réussite de la pokéball.
   * @returns {boolean} - vrai si le Pokémon est capturé
   */
  isCaught(successRate) {
    //Calcule si le Pokémon est capturé en multipliant le taux de capture par le taux de réussite.
    return Math.random() < successRate * (this.catchRate / 255);
  }
}
