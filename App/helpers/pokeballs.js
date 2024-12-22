"use strict";

// Définition du types de Pokéballs, avec leur quantité et leur taux de réussite
export const pokeballs = {
  PokeBall: { count: 5, successRate: 1.0 },
  SuperBall: { count: 3, successRate: 1.5 },
  HyperBall: { count: 2, successRate: 1.9 },
  MasterBall: { count: 1, successRate: 3 },
};

// Ajoutez cette méthode pour réinitialiser les valeurs de pokeballs
export function resetPokeballs() {
  pokeballs.PokeBall.count = 5;
  pokeballs.SuperBall.count = 3;
  pokeballs.HyperBall.count = 2;
  pokeballs.MasterBall.count = 1;
}