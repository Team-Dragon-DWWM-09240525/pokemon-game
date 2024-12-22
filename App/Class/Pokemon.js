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
   * @param {string} sprite - Le sprite du Pokémon
   * @param {number} catchRate - Le taux de capture depuis l'API
   */
  constructor(data) {
    this.name = data.name.fr;
    this.type = data.types.map((type) => type.name).join(", ");
    this.sprite = data.sprites.regular;
    this.catchRate = data.catch_rate;
  }

  /**
   * Vérifie si le Pokémon a été capturé.
   * @param {number} successRate - Le taux de réussite de la Pokéball.
   * @returns {boolean} - Retourne vrai si le Pokémon est capturé, sinon faux.
   */
  isCaught(successRate) {
    // Utilise le catch_rate de l'API pour déterminer la probabilité de capture
    return Math.random() < successRate * (this.catchRate / 255); // catch_rate est souvent entre 0 et 255
  }
}
