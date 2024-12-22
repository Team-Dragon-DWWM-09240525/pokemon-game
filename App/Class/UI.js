"use strict";

import { getDOMElement, createDOMElement } from "../helpers/domUtils.js";

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
      throw new Error("Game instance is required"); // Vérifie que `game` est bien passé
    }
    this.game = game; // Référence à l'instance du jeu
  }

  /**
   * Initialisation de l'interface utilisateur.
   * Met en place les événements et actualise les affichages.
   */
  initialize() {
    this.setupEventListeners(); // Configure les écouteurs d'événements
    this.updateInventory(); // Met à jour l'affichage de l'inventaire
    this.generatePokeballButtons(); // Génère les boutons pour les Pokéballs en fonction de l'inventaire
    this.updateCaughtCount(); // Initialise le compteur de Pokémon capturés
  }

  /**
   * Configure les écouteurs d'événements pour les interactions de l'utilisateur.
   */
  setupEventListeners() {
    // Lorsque le bouton pour faire apparaître un Pokémon est cliqué
    getDOMElement.spawnButton.addEventListener("click", () =>
      this.spawnPokemon()
    );
    // Lorsque le bouton de réinitialisation du jeu est cliqué
    getDOMElement.resetButton.addEventListener("click", () => this.resetGame());
    // Lorsque le bouton pour ajouter une Pokéball est cliqué
    getDOMElement.addPokeballButton.addEventListener("click", () =>
      this.addPokeball()
    );
  }

  /**
   * Met à jour l'affichage de l'inventaire (affiche les quantités de chaque type de Pokéball).
   */
  updateInventory() {
    getDOMElement.inventoryList.innerHTML = ""; // Efface l'affichage précédent de l'inventaire

    // Récupère l'inventaire actuel du jeu
    const inventory = this.game.inventory.getInventory();

    for (const [type, count] of Object.entries(inventory)) {
     
    }
  }

  /**
   * Met à jour l'affichage du nombre de Pokémon capturés.
   */



  /**
   * Met à jour l'affichage du Pokémon sauvage actuel.
   */



  /**
   * Affiche un message dans la section "log" pour enregistrer des événements du jeu.
   *
   * @param {string} message - Le message à afficher dans le log.
   */



  /**
   * Génère les boutons pour chaque type de Pokéball à partir de l'inventaire.
   */


  /**
   * Gère l'apparition d'un Pokémon sauvage dans le jeu.
   */



  /**
   * Réinitialise le jeu et réinitialise l'affichage.
   */



  /**
   * Ajoute une Pokéball aléatoire à l'inventaire.
   */



  /**
   * Tente de capturer un Pokémon en utilisant une Pokéball spécifique.
   *
   * @param {string} type - Le type de Pokéball à utiliser pour la capture.
   */


}
