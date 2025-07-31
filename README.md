# 🧠 GoHighLevel MCP Server — Fork personnalisé pour Jarvis (usage non commercial)

> ⚠️ Ce projet est un **fork non commercial** de [mastanley13/ghl-mcp-server](https://github.com/mastanley13/ghl-mcp-server), distribué sous la [Community License](./LICENSE).  
> Toute utilisation doit rester **personnelle**, **éducative** ou **interne à votre entreprise**. Pour tout usage commercial, veuillez contacter l’auteur original : [mykelandrewstanley@gmail.com](mailto:mykelandrewstanley@gmail.com)

---

## ✨ Présentation

Ce serveur MCP (Model Context Protocol) permet de piloter des actions GoHighLevel à travers des requêtes JSON structurées.  
Il a été adapté ici pour être **totalement compatible avec l’assistant local Jarvis**, y compris en environnement offline avec un LLM comme **LM Studio**.

---

## 🧩 Fonctions principales

- 🔌 Interface JSON standardisée pour interagir avec l’API GoHighLevel
- 🧰 Exposition de plus de **210 outils** (contacts, calendriers, blogs, e-mails, etc.)
- 🧠 Intégration avec des assistants IA locaux ou cloud (ex : LM Studio, OpenAI, Mistral)
- 📚 Catalogue des outils accessible via `/tools`
- 🧪 Mode développement via `ts-node` et `nodemon`

---

## 📁 Dossiers principaux

- `src/tools/` : Tous les outils GoHighLevel exposés via MCP
- `src/clients/` : Clients HTTP et SDK GHL
- `src/types/` : Typage MCP + outils
- `src/http-server.ts` : Serveur principal (HTTP)
- `.env.local` et `.env.production` : Configuration par environnement

---

## 🚀 Lancer en développement

```bash
npm install
cp .env.example .env.local
npm run dev

Le serveur sera disponible sur http://localhost:8000 par défaut.

⸻

🛠️ Lancer en production

Créez un fichier .env.production avec les bonnes variables :

NODE_ENV=production
MCP_HOST=https://votre-nom-de-domaine
MCP_API_KEY=your_secure_key
MCP_LOCATION_ID=your_location_id
MCP_SERVER_PORT=your-port

Puis :

npm run build
npm run start:http

Déploiement validé avec Coolify

⸻

🔐 Sécurité (en cours d’ajout)

Une couche de middleware d’authentification par clé API (MCP_API_KEY) sera ajoutée pour restreindre l’accès aux endpoints MCP, notamment en production.

⸻

🧠 Intégration avec Jarvis

Ce serveur est utilisé comme source d’outils pour un assistant vocal local développé avec CrewAI et LM Studio.
Il permet à Jarvis d’interagir avec GoHighLevel pour :
	•	Trouver les leads du jour
	•	Ajouter une opportunité
	•	Lister les rendez-vous d’un calendrier
	•	Récupérer les derniers articles de blog

⸻

📜 Licence

Ce projet est distribué sous la GoHighLevel MCP Server Community License :

✅ Usage personnel, éducatif, interne
❌ Revente ou usage commercial
❌ Suppression ou modification de cette licence

📄 Voir la licence complète

⸻

🙌 Remerciements

Projet initial de : @mastanley13
Améliorations par : LeadsFlowAI | leadsflowai.com
Fork personnalisé par : Charles Gautier