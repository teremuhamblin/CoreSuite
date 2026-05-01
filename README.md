# ⚡ CoreSuite v1.0
>CoreSuite est une suite minimaliste d’outils intelligents pour analyser et résumer du texte.  
- Version simple, modulaire, prête à étendre.

## 📁 Structure du projet
```text
coresuite/
│
├── src/
│   ├── core.js
│   ├── cli.js
│   ├── api.js
│   ├── analyzers/
│   │   └── basic.js
│   └── generators/
│       └── summary.js
│
├── docs/
│   ├── overview.md
│   └── roadmap.md
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── package.json
└── README.md
```

---

## 🚀 Fonctionnalités
- Analyse basique (longueur, lignes, mots)
- Résumé automatique
- CLI simple
- Mini API Express

## 📦 Installation
npm install

## 🛠️ CLI
coresuite analyze fichier.txt  
coresuite summary fichier.txt

## 🌐 API
POST /analyze  
POST /summary

## 📚 Documentation
Voir docs/overview.md

## 🗺️ Roadmap
Voir docs/roadmap.md
