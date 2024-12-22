"use strict";
/**
 * Classe principale de l'application qui initialise le jeu et l'interface utilisateur.
 * Elle s'occupe de la création des objets de jeu et d'interface, ainsi que de leur initialisation.
 *
 * @class GameApp
 */

import { Game } from "./Game.js"; // Importation de la classe Game pour pouvoir l'utiliser
import { UI } from "./UI.js"; // Importation de la classe UI pour pouvoir l'utiliser

export class GameApp {
  /**
   * Constructeur de la classe GameApp.
   * Crée une nouvelle instance du jeu et initialise l'interface utilisateur.
   *
   * @param {UI} ui - L'instance de la classe UI.
   */
  constructor() {
    this.game = new Game(); // Crée une instance de `Game` ici
    this.ui = new UI(this.game); // Crée une instance de `UI` en lui passant l'instance de `game`
  }

  /**
   * Initialisation de l'application.
   * Appelle la méthode `initialize()` de l'interface utilisateur.
   */
  init() {
    this.ui.initialize(); // Initialise l'UI
  }
}
