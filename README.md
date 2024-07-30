# 🐨 Simple Koa 🐨

## 🚀 Un projet rapide pour démarrer avec Koa.js ! 🚀

### 📚 Description

Simple Koa est un projet minimaliste qui vous permet de démarrer rapidement avec Koa.js, un framework web moderne et expressif pour Node.js. 🌟

### 🛠️ Installation

1. Clonez ce repository :

```
git clone https://github.com/Dilgo-dev/simple_koa.git
```

2. Installez les dépendances :

```
cd simple_koa
npm install
```

3. Créez un fichier `.env` à la racine du projet et ajoutez :

```
PORT=3000
```

### 🏃‍♂️ Démarrage

-   Pour lancer en mode développement :

```
npm run dev
```

-   Pour lancer en mode production :

```
npm start
```

### 🌳 Structure du projet

```
simple_koa/
│
├── src/
│ └── server.js
│
├── utils/
│ └── env.js
│
├── .env
├── package.json
└── README.md
```

### 🧙 Fonctionnalités

-   🔮 Configuration automatique du port via variables d'environnement
-   🐨 Message d'accueil Koa avec un koala (Quoi ?)
-   🔥 Rechargement à chaud en mode développement grâce à Nodemon

### 📝 Exemple de code

Voici le cœur de notre application (`src/server.js`) :

```javascript
import Koa from "koa";
import { PORT } from "./utils/env.js";

const app = new Koa();

app.use((ctx) => {
    ctx.body = "koa 🐨 !";
});

app.listen(PORT, () => {
    console.info(`Server started on http://localhost:${PORT} 🧙🔮🐨`);
});
```
