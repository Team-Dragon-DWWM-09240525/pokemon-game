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
      const li = createDOMElement.li();
      li.textContent = `${type}: ${count}`;
      getDOMElement.inventoryList.appendChild(li);
    }
  }

  /**
   * Met à jour l'affichage du nombre de Pokémon capturés.
   */

  updateCaughtCount() {
    getDOMElement.caughtCountDisplay.textContent = this.game.caughtCount;
  }

  /**
   * Met à jour l'affichage du Pokémon sauvage actuel.
   */
  updatePokemonDisplay(pokemon) {
    const displayElement = getDOMElement.pokemonDisplay;

    if (pokemon) {
      const pokemonImage = createDOMElement.img();
      pokemonImage.src = pokemon.sprite;
      pokemonImage.alt = pokemon.name;
      pokemonImage.width = 100;

      displayElement.innerHTML = "";

      displayElement.appendChild(pokemonImage);

      const pokemonInfo = createDOMElement.p();
      pokemonInfo.textContent = `${pokemon.name} (${pokemon.type})`;

      displayElement.appendChild(pokemonInfo);
    } else {
      displayElement.textContent = "Aucun Pokémon pour le moment.";
    }
  }

  /**
   * Affiche un message dans la section "log" pour enregistrer des événements du jeu.
   *
   * @param {string} message - Le message à afficher dans le log.
   */
  logMessage(message) {
    const logEntry = createDOMElement.p();
    logEntry.textContent = message;
    getDOMElement.log.prepend(logEntry);
  }

  /**
   * Génère les boutons pour chaque type de Pokéball à partir de l'inventaire.
   */
  generatePokeballButtons() {
    getDOMElement.pokeballButtonsContainer.innerHTML = "";
    const inventory = this.game.inventory.getInventory();

    for (const type of Object.keys(inventory)) {
      const button = createDOMElement.button();
      button.className = "button is-info is-medium";
      button.textContent = `${type}`;

      button.addEventListener("click", () => this.attemptCapture(type));
      getDOMElement.pokeballButtonsContainer.appendChild(button);
    }
  }

  /**
   * Gère l'apparition d'un Pokémon sauvage dans le jeu.
   */
  async spawnPokemon() {
    const pokemon = await this.game.spawnPokemon();

    if (pokemon) {
      this.updatePokemonDisplay(pokemon);
      this.logMessage(`Un ${pokemon.name} sauvage est apparu !`);
    } else {
      this.updatePokemonDisplay(null);
      this.logMessage(`Aucun Pokémon n'a été trouvé !`);
    }
  }

  /**
   * Réinitialise le jeu et réinitialise l'affichage.
   */
  resetGame() {
    this.game.resetGame();
    this.updateInventory();
    this.generatePokeballButtons();
    this.updateCaughtCount();
    this.updatePokemonDisplay();
    getDOMElement.log.innerHTML = "";
    this.logMessage("Le jeu a été réinitialisé !");
  }

  /**
   * Ajoute une Pokéball aléatoire à l'inventaire.
   */
  addPokeball() {
    const addedType = this.game.inventory.addRandomPokeball();
    this.updateInventory();
    this.logMessage(`Une ${addedType} a été ajoutée à l'inventaire.`);
  }

  /**
   * Tente de capturer un Pokémon en utilisant une Pokéball spécifique.
   *
   * @param {string} type - Le type de Pokéball à utiliser pour la capture.
   */
  attemptCapture(type) {
    const result = this.game.attemptCapture(type);
    this.logMessage(result.message);
    this.updateInventory();
    this.updateCaughtCount();
    this.updatePokemonDisplay();
  }
}
