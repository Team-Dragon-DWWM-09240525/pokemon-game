# Pokémon Game - Projet de Formation DWWM

[![Version](https://img.shields.io/badge/version-1.1.0-blue)](https://github.com/Team-Dragon-DWWM-09240525/pokemon-game)
[![Licence](https://img.shields.io/badge/licence-MIT-green)](https://opensource.org/licenses/MIT)

## Démo en ligne

Vous pouvez accéder à la version en ligne de ce projet via le lien suivant :

[Pokémon Game - GitHub Pages](https://team-dragon-dwwm-09240525.github.io/pokemon-game/)

## Description

Ce projet implémente un jeu Pokémon en utilisant les principes de la programmation orientée objet (POO) pour faciliter l'apprentissage des étudiants en développement web. Le jeu permet aux utilisateurs de capturer des Pokémon à l'aide de différentes Pokéballs, gérer un inventaire, et afficher les événements dans un journal.

L'API Pokémon est intégrée pour enrichir l'expérience en récupérant des données en temps réel sur les Pokémon, telles que leur nom, type, et image, directement depuis la base de données Pokémon publique.

La nouvelle version 1.1.0 intègre désormais une API Pokémon pour générer dynamiquement les Pokémon dans le jeu.

Le projet se compose de plusieurs classes permettant de gérer les fonctionnalités du jeu, l'interface utilisateur (UI), ainsi que la logique du jeu elle-même. Ce projet est conçu pour aider les étudiants à comprendre les concepts clés de la POO, tels que l'encapsulation, l'héritage, et les objets, tout en travaillant sur une application interactive.

## Fonctionnalités

- **Capturer des Pokémon** : Faites apparaître un Pokémon sauvage en utilisant l'API Pokémon et tentez de le capturer avec des Pokéballs.
- **Gestion de l'inventaire** : Gérer les Pokéballs disponibles et les ajouter de manière aléatoire à l'inventaire.
- **Journal des actions** : Un log affiche les actions réalisées pendant le jeu (Pokémon capturé, Pokémon échappé, etc.).
- **Réinitialisation du jeu** : Réinitialisez le jeu à tout moment pour repartir à zéro.
- **Utilisation de l'API Pokémon** : L'API Pokémon permet de récupérer des informations détaillées sur les Pokémon (nom, type, image, etc.) et d'afficher ces données dans le jeu.

## Structure du Projet

Le projet est structuré de manière claire pour séparer les différentes parties du jeu, y compris l'intégration de l'API Pokémon, la logique du jeu et l'interface utilisateur.

```
pokemon-game
├─ App
│  ├─ Class
│  │  ├─ Game.js           # Logique du jeu, gestion des Pokémon
│  │  ├─ Inventory.js      # Gère l'inventaire des Pokéballs
│  │  ├─ GameApp.js        # Initialise le jeu et l'UI
│  │  ├─ Pokemon.js        # Modélise un Pokémon avec données de l'API
│  │  └─ UI.js             # Gère l'affichage et les interactions UI
│  ├─ helpers
│  │  ├─ domUtils.js       # Fonctions utilitaires pour le DOM
│  │  ├─ pokeballs.js      # Définition et gestion des Pokéballs
│  │  └─ fetchPokemonApi.js # Intégration de l'API Pokémon pour récupérer les données
│  └─ app.js               # Point d'entrée de l'application
├─ favicon.ico             # Favicon du site
├─ index.html             # Structure HTML du jeu
├─ README.md              # Documentation du projet
└─ docs
   ├─ 01-diagramme-sequence-pokemon.wsd   # Diagramme de séquence pour les actions Pokémon
   ├─ 02-usecase-pokemon.wsd               # Cas d'utilisation détaillant le processus de capture
   └─ 03-diagramme-class-pokemon.wsd      # Diagramme de classes représentant les objets du jeu
```

## Prérequis

- Un navigateur moderne (Chrome, Firefox, etc.)
- Connexion internet pour charger Bulma (framework CSS) et récupérer les données de l'API Pokémon.

## Installation

1. Clonez ce repository sur votre machine locale :

   ```bash
   git clone https://github.com/Team-Dragon-DWWM-09240525/pokemon-game.git
   ```

2. Ouvrez le fichier `index.html` dans votre navigateur pour lancer le jeu.

## Utilisation

### Jouer au jeu

1. Cliquez sur **Faire apparaître un Pokémon** pour faire apparaître un Pokémon sauvage. Les données sont récupérées via l'API Pokémon.
2. Le jeu affiche le nom, le type, et l'image du Pokémon, ainsi que son taux de capture.
3. Utilisez les boutons Pokéball pour tenter de capturer le Pokémon.
4. Consultez l'inventaire pour voir le nombre de Pokéballs restantes et leur taux de réussite.
5. Ajoutez de nouvelles Pokéballs à l'inventaire en cliquant sur **Ajouter une Pokéball aléatoire**.
6. Consultez le **Journal** pour voir les messages relatifs à vos actions dans le jeu.
7. Cliquez sur **Réinitialiser le jeu** pour repartir à zéro.

### Structures principales

- **Game.js** : Cette classe coordonne la logique du jeu, gère l'apparition des Pokémon, les tentatives de capture, et le suivi des captures réussies.
- **Inventory.js** : Gère l'inventaire des Pokéballs, y compris la gestion des stocks et la réinitialisation.
- **Pokemon.js** : Modélise un Pokémon avec des propriétés telles que le nom, le type et l'image, récupérés via l'API Pokémon.
- **UI.js** : Gère l'interface utilisateur, mettant à jour l'affichage de l'inventaire, des Pokémon, et du journal.
- **fetchPokemonApi.js** : Effectue des appels à l'API Pokémon pour récupérer des données en temps réel sur les Pokémon.

## Objectifs pédagogiques

Ce projet est destiné à :

1. **Comprendre les concepts de la POO** :
   - Création et utilisation des classes en JavaScript.
   - Gestion de l'état des objets (Pokémon, inventaire, etc.).
   - Interaction entre objets via des méthodes (par exemple, `isCaught()` dans la classe `Pokemon`).
2. **Apprendre à manipuler le DOM** :
   - Mise à jour dynamique de l'interface utilisateur avec JavaScript.
   - Gestion des événements et interactions utilisateur via `addEventListener`.
3. **Travailler sur la logique de jeu et la gestion des événements** :
   - Implémentation d'un système de captures avec des taux de réussite et des réactions aléatoires.
   - Mise en place d'un journal pour suivre les actions du jeu.
4. **Utiliser une API externe** :
   - Récupérer et afficher des données en temps réel à partir de l'API Pokémon.

## Améliorations possibles

- Ajouter la création d'un compte et un Pokédex pour afficher les Pokemon capturés.
- Intégrer des fonctionnalités de sauvegarde du jeu pour reprendre la partie plus tard.
- Ajouter des animations pour rendre le jeu plus interactif et immersif.
- Explorer l'utilisation de l'API Pokémon pour enrichir encore plus le jeu (nouveaux Pokémon, capacités spéciales, etc.).

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

### Auteurs

- Développé par l'équipe de formation Team Dragon DWWM.

---

Ce README peut être enrichi en fonction des ajouts et évolutions du projet, selon les objectifs pédagogiques et les améliorations futures.
