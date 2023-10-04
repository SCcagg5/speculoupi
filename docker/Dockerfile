# Utilisez une image de base Node.js 16
FROM node:16

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le fichier package.json et package-lock.json dans le conteneur
COPY src/package*.json ./

# Installez les dépendances de votre application
RUN npm install

# Copiez le reste de votre application dans le conteneur
COPY src/ .

# Exécutez votre application Node.js
CMD ["node", "index.js"]
