"use strict";

// Sélection des éléments DOM nécessaires pour manipuler l'interface utilisateur
export const getDOMElement = {
  pokemonDisplay: document.getElementById("pokemon-display"),
  inventoryList: document.getElementById("inventory-list"),
  caughtCountDisplay: document.getElementById("caught-count"),
  log: document.getElementById("log"),
  spawnButton: document.getElementById("spawn-pokemon"),
  resetButton: document.getElementById("reset-game"),
  addPokeballButton: document.getElementById("add-pokeball"),
  pokeballButtonsContainer: document.getElementById("pokeball-buttons"),
};

export const createDOMElement = {
  li: () => document.createElement("li"),
  p: () => document.createElement("p"),
  button: () => document.createElement("button"),
  img: () => document.createElement("img"),
};
