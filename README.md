# Boilerplate 
Ce boilerplate a pour de faciliter le set up de plusieurs projets.  Vous trouverez sur la branche "pokedex_api" un projet fait à partir de ce Boilerplate. Il s'agit d'un Pokedex basé sur les jeux "Pokemon Rouge Feu et Vert Feuille". L'entiereté du Pokedex 3ème génération est disponible grâce à l'API "PokéAPI".

Les dépendances de ce boileplate sont les suivantes : Vite, Prettier, Jest, ESLint, Husky, Sass


- [Installation](#installation)
  - [Démarrage](#démarrage)
  - [Npm ou Pnpm ou Yarn](#npm-ou-pnpm-ou-yarn)
  - [Vite](#vite)
  - [Package.json](#packagejson)
  - [Jest](#jest)
  - [Prettier](#prettier)
  - [ESLint](#eslint)
  - [Husky](#husky)
  - [Sass](#sass)
- [Projet](#projet)



## Installation

### Démarrage

Vous pouvez commencer par créer fichier
- HTML : `index.html`
- CSS : `style.css`
- JS : `script.js`

### Npm ou Pnpm ou Yarn

- Vous pouvez utiliser le gestionnaire de paquets de votre choix. Pnppm et yarn sont toutefois plus rapide.
```bash
npm init
```
ou
```bash
pnpm init
```
ou
```bash
yarn init
```
- Un fichier `package.json` est créé. Il contient la liste des dépendances du projet et leurs versions.


### Vite

- Nous allons utiliser Vite. Vite est un outil de développement web qui offre une compilation rapide et un chargement instantané des modules pour améliorer la productivité des développeurs. 
```bash
npm install vite
```
ou
```bash
pnpm install vite
```
ou
```bash
yarn install vite
```

- Un dossier `node_modules` est créé.
- Un fichier `package-lock.json` est créé.

### Package.json

```json
"scripts": {
    "dev": "vite"
  }
```
- Penser a ajouter la commande "dev" afin de lancer Vite et faire tourner votre projet en localhost.
```bash
npm run dev
```
ou
```bash
pnpm run dev
```
ou
```bash
yarn run dev
```

### Prettier

- Prettier est un outil de formatage de code qui permet de rendre le code source JavaScript, HTML, CSS et d'autres langages plus lisible et cohérent en appliquant des règles de formatage automatiques.
```bash
npm install --save-dev --save-exact prettier
```
ou
```bash
pnpm add --save-dev --save-exact prettier
```
ou
```bash
yarn add --dev --exact prettier
```
- Pour l'executer utiliser la commande :
```bash
npx prettier . --write
```
ou
```bash
pnpm exec prettier . --write
```
ou
```bash
yarn prettier . --write
```


### Jest

- Pour nos test unitaires nous allons utiliser Jest
  Jest est un framework de test JavaScript populaire et puissant, souvent utilisé pour tester des applications JavaScript, notamment des applications frontales et des bibliothèques.
```bash
npm install --save-dev jest
```
ou
```bash
pnpm add --save-dev jest
```
ou
```bash
yarn add --save-dev jest
```
- Créez un dossier `__tests__` pour ajouter vos scripts de test
- Penser à ajouter la commande "test" dans votre package.json afin de lancer vos tests avec Jest

```json
"scripts": {
    "test": "jest"
  }
```

- Vous pouvez utiliser la commande :
```bash
npm run test
```
ou
```bash
pnpm run test
```
ou
```bash
yarn run test
```

### ESLint

```bash
npm install --save-dev eslint
```

- Créer un fichier `.eslintrc.json` à la racine du projet ou utiliser l'interactivité de la commande `eslint --init`.

```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
}
```

### Husky

```bash
npx husky-init && npm install
```
ou 
```bash
pnpm dlx husky-init && pnpm install
```
Cela ajoute automatiquement un hook `pre-commit` qui lance `npm test` avant chaque commit.

### Sass

- SCSS (ou SASS) est un langage de feuilles de style CSS avec des fonctionnalités avancées telles que les variables, les mixins et la nesting, facilitant la création et la gestion de styles CSS plus efficacement.
- Penser à installer tout d'abord Sass :
```bash
npm install -g sass
```

- Puis pour lancer la compilation de vos fichiers style il ne vous reste qu'à lancer la commande :
```bash
sass --watch nom_du_fichier_scss:snom_du_fichier_css
```
