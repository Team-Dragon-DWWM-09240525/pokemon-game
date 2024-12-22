"use strict";

/**
 * Point d'entrée de l'application.
 * Initialise l'application en créant une instance de la classe `GameApp` et lance l'initialisation.
 *
 * @module Main
 * @requires GameApp
 * @requires UI
 */

import { GameApp } from "./Class/GameApp.js"; // Importation de la classe GameApp qui initialise le jeu et l'interface utilisateur

// Crée une nouvelle instance de la classe `GameApp`
const gameApp = new GameApp();

/**
 * Démarre l'application en initialisant le jeu, l'UI et les écouteurs d'événements.
 */
gameApp.init(); // Démarre l'initialisation de l'application
