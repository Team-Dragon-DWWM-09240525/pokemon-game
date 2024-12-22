"use strict";

export const getDOMElement = {
  pokemonDisplay: document.getElementById("pokemon-display"),
  inventoryList: document.getElementById("inventory-list"),
  caughtCountDisplay: document.getElementById("caught-count"),
  log: document.getElementById("log"),
  spawnButton: document.getElementById("spawn-button"),
  resetButton: document.getElementById("reset-button"),
  addPokeballButton: document.getElementById("add-pokeball"),
  pokeballButtonsContainer: document.getElementById("pokeball-buttons"),
};

export const createDOMElement = {
  li: document.createElement("li"),
};
