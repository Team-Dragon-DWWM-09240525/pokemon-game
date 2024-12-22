"use strict";

import { getDOMElement, createDOMElement } from "../helpers/domUtilis.js";

/**
 * Classe qui gère l'interface utilisateur de l'application.
 * Elle met à jour l'affichage des éléments du DOM et gère les interactions avec l'utilisateur.
 *
 * @class UI
 */

export class UI {
  game;
  /**
   * Constructeur de la classe UI.
   * Initialise les références aux éléments du DOM et garde une référence à l'objet `game`.
   *
   * @param {Game} game - L'instance du jeu pour interagir avec sa logique.
   */
  constructor(game) {
    if (!game) {
      throw new Error("Game instance is required");
    }
    this.game = game;
  }

  /**
   * Initialisation de l'interface utilisateur.
   * Met en place les événements et actualise les affichages.
   */
  initialize() {
    this.setupEventListeners();
    this.updateInventory();
    this.generatePokeballButtons();
    this.updateCaughtCount();
  }

  /**
   * Configure les écouteurs d'événements pour les interactions de l'utilisateur.
   */

  setupEventListeners() {
    getDOMElement.spawnButton.addEventListener("click", () =>
      this.spawnPokemon()
    );
    getDOMElement.resetButton.addEventListener("click", () => this.resetGame());
    getDOMElement.addPokeballButton.addEventListener("click", () =>
      this.addPokeball()
    );
  }

  /**
   * Met à jour l'affichage de l'inventaire (affiche les quantités de chaque type de Pokéball).
   */
  updateInventory() {
    getDOMElement.inventoryList.innerHTML = "";

    const inventory = this.game.inventory.getInventory();
    for (const [type, count] of Object.entries(inventory)) {
    }
  }
}
