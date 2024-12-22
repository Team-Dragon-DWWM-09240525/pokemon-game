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
      const li = createDOMElement.li(); // Crée un nouvel élément li
      li.textContent = `${type}: ${count}`; // Affiche le type et la quantité
      getDOMElement.inventoryList.appendChild(li); // Ajoute l'élément à la liste dans le DOM
    }
  }

  /**
   * Met à jour l'affichage du nombre de Pokémon capturés.
   */
  updateCaughtCount() {
    getDOMElement.caughtCountDisplay.textContent = this.game.caughtCount; // Affiche le nombre actuel de Pokémon capturés
  }

  /**
   * Met à jour l'affichage du Pokémon sauvage actuel.
   */
  updatePokemonDisplay() {
    if (this.game.currentPokemon) {
      getDOMElement.pokemonDisplay.textContent = `${this.game.currentPokemon.name} (${this.game.currentPokemon.type}) est apparu !`;
    } else {
      getDOMElement.pokemonDisplay.textContent =
        "Aucun Pokémon pour le moment.";
    }
  }

  /**
   * Affiche un message dans la section "log" pour enregistrer des événements du jeu.
   *
   * @param {string} message - Le message à afficher dans le log.
   */
  logMessage(message) {
    const logEntry = createDOMElement.p(); // Crée un nouvel élément de paragraphe pour le message
    logEntry.textContent = message; // Définit le texte du message
    getDOMElement.log.prepend(logEntry); // Ajoute le message en haut du journal
  }

  /**
   * Génère les boutons pour chaque type de Pokéball à partir de l'inventaire.
   */
  generatePokeballButtons() {
    getDOMElement.pokeballButtonsContainer.innerHTML = ""; // Efface les boutons existants

    const inventory = this.game.inventory.getInventory(); // Récupère l'inventaire actuel

    for (const type of Object.keys(inventory)) {
      const button = createDOMElement.button(); // Crée un bouton pour chaque type de Pokéball
      button.className = "button is-info is-medium"; // Applique une classe pour le style
      button.textContent = `${type}`; // Définit le texte du bouton

      // Lorsque le bouton est cliqué, tente de capturer un Pokémon avec la Pokéball correspondante
      button.addEventListener("click", () => this.attemptCapture(type));
      getDOMElement.pokeballButtonsContainer.appendChild(button); // Ajoute le bouton au conteneur
    }
  }

  /**
   * Gère l'apparition d'un Pokémon sauvage dans le jeu.
   */
  spawnPokemon() {
    const pokemon = this.game.spawnPokemon(); // Fait apparaître un Pokémon sauvage
    this.updatePokemonDisplay(); // Met à jour l'affichage du Pokémon sauvage
    this.logMessage(`Un ${pokemon.name} sauvage est apparu !`); // Affiche un message dans le log
  }

  /**
   * Réinitialise le jeu et réinitialise l'affichage.
   */
  resetGame() {
    this.game.resetGame(); // Réinitialise l'état interne du jeu
    this.updateInventory(); // Met à jour l'affichage de l'inventaire
    this.generatePokeballButtons(); // Régénère les boutons des Pokéballs
    this.updateCaughtCount(); // Réinitialise le compteur de Pokémon capturés
    this.updatePokemonDisplay(); // Réinitialise l'affichage du Pokémon sauvage
    getDOMElement.log.innerHTML = ""; // Efface le contenu du journal
    this.logMessage("Le jeu a été réinitialisé !"); // Affiche un message dans le log
  }

  /**
   * Ajoute une Pokéball aléatoire à l'inventaire.
   */
  addPokeball() {
    const addedType = this.game.inventory.addRandomPokeball(); // Ajoute une Pokéball aléatoire
    this.updateInventory(); // Met à jour l'affichage de l'inventaire
    this.logMessage(`Une ${addedType} a été ajoutée à l'inventaire.`); // Affiche un message dans le log
  }

  /**
   * Tente de capturer un Pokémon en utilisant une Pokéball spécifique.
   *
   * @param {string} type - Le type de Pokéball à utiliser pour la capture.
   */
  attemptCapture(type) {
    const result = this.game.attemptCapture(type); // Tente de capturer le Pokémon avec la Pokéball choisie
    this.logMessage(result.message); // Affiche le résultat de la capture dans le log
    this.updateInventory(); // Met à jour l'affichage de l'inventaire
    this.updateCaughtCount(); // Met à jour le compteur de Pokémon capturés
    this.updatePokemonDisplay(); // Met à jour l'affichage du Pokémon sauvage
  }
}
