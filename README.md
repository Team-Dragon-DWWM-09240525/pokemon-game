# Pokémon Game - Projet de Formation DWWM

[![Version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/votre-utilisateur/pokemon-game)
[![Licence](https://img.shields.io/badge/licence-MIT-green)](https://opensource.org/licenses/MIT)

## Démo en ligne

Vous pouvez accéder à la version en ligne de ce projet via le lien suivant :

[Pokémon Game - GitHub Pages](https://team-dragon-dwwm-09240525.github.io/pokemon-game/)

## Description

Ce projet implémente un jeu Pokémon en utilisant les principes de la programmation orientée objet (POO) pour faciliter l'apprentissage des étudiants en développement web. Le jeu permet aux utilisateurs de capturer des Pokémon à l'aide de différentes Pokéballs, gérer un inventaire, et afficher les événements dans un journal.

Le projet se compose de plusieurs classes permettant de gérer les fonctionnalités du jeu, l'interface utilisateur (UI), ainsi que la logique du jeu elle-même. Ce projet est conçu pour aider les étudiants à comprendre les concepts clés de la POO, tels que l'encapsulation, l'héritage, et les objets, tout en travaillant sur une application interactive.

## Fonctionnalités

- **Capturer des Pokémon** : Faites apparaître un Pokémon sauvage et tentez de le capturer avec des Pokéballs.
- **Gestion de l'inventaire** : Gérer les Pokéballs disponibles et les ajouter de manière aléatoire à l'inventaire.
- **Journal des actions** : Un log affiche les actions réalisées pendant le jeu (Pokémon capturé, Pokémon échappé, etc.).
- **Réinitialisation du jeu** : Réinitialisez le jeu à tout moment pour repartir à zéro.

## Structure du Projet

Le projet est structuré de manière à séparer clairement la logique du jeu, l'interface utilisateur, et les utilitaires associés.

```
pokemon-game
├─ App
│  ├─ Class
│  │  ├─ Inventory.js      # Gère l'inventaire des Pokéballs
│  │  ├─ GameApp.js        # Initialise le jeu et l'UI
│  │  ├─ Game.js           # Logique du jeu, gestion des Pokémon
│  │  ├─ Pokemon.js        # Modélise un Pokémon
│  │  └─ UI.js             # Gère l'affichage et les interactions UI
│  ├─ helpers
│  │  ├─ domUtils.js       # Fonctions utilitaires pour le DOM
│  │  └─ pokeballs.js      # Définition et gestion des Pokéballs
│  └─ app.js               # Point d'entrée de l'application
├─ index.html              # Structure HTML du jeu
├─ README.md               # Documentation du projet
├─ docs
│  ├─ 01-diagramme-sequence-pokemon.wsd   # Diagramme de séquence
│  ├─ 02-usecase-pokemon.wsd               # Cas d'utilisation
│  └─ 03-diagramme-class-pokemon.wsd      # Diagramme de classes
├─ LICENSE                  # Licence du projet
├─ .gitignore               # Fichiers à ignorer par Git
├─ favicon.ico              # Favicon du site
└─ .vscode
   └─ extensions.json       # Extensions recommandées pour VS Code

```

## Prérequis

- Un navigateur moderne (Chrome, Firefox, etc.)
- Connexion internet pour charger Bulma (framework CSS)

## Installation

1. Clonez ce repository sur votre machine locale :

   ```bash
   git clone https://github.com/votre-utilisateur/pokemon-game.git
   ```

2. Ouvrez le fichier `index.html` dans votre navigateur pour lancer le jeu.

## Utilisation

### Jouer au jeu

1. Cliquez sur **Faire apparaître un Pokémon** pour faire apparaître un Pokémon sauvage.
2. Utilisez les boutons Pokéball pour tenter de capturer le Pokémon.
3. Consultez l'inventaire pour voir le nombre de Pokéballs restantes et leur taux de réussite.
4. Ajoutez de nouvelles Pokéballs à l'inventaire en cliquant sur **Ajouter une Pokéball aléatoire**.
5. Consultez le **Journal** pour voir les messages relatifs à vos actions dans le jeu.
6. Cliquez sur **Réinitialiser le jeu** pour repartir à zéro.

### Structures principales

- **Game.js** : Cette classe coordonne la logique du jeu. Elle gère l'apparition des Pokémon, les tentatives de capture, et le suivi des captures réussies.
- **Inventory.js** : Gère l'inventaire des Pokéballs, y compris la gestion des stocks et la réinitialisation.
- **Pokemon.js** : Modélise un Pokémon, avec des propriétés comme le nom, le type et le taux de capture.
- **UI.js** : Gère l'interface utilisateur, mettant à jour l'affichage de l'inventaire, des Pokémon, et du journal.

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

## Améliorations possibles

- Ajouter des niveaux de difficulté avec des Pokémon plus difficiles à capturer.
- Intégrer des fonctionnalités de sauvegarde du jeu pour reprendre la partie plus tard.
- Ajouter des animations pour rendre le jeu plus interactif et immersif.

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

### Auteurs

- Développé par l'équipe de formation Team Dragon DWWM.

---

Ce README peut être enrichi en fonction des ajouts et évolutions du projet, selon les objectifs pédagogiques et les améliorations futures.
