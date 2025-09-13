require('dotenv').config(); // Charger les variables d'environnement

const app = require('./app/config'); // Import ton config.js

const PORT = process.env.PORT || 5000;

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
  console.log(`📧 Service de mail configuré pour: ${process.env.EMAIL_USER}`);
  console.log(`🌐 CORS configuré pour: http://localhost:3000`);
});

// Gestion propre de l'arrêt du serveur
process.on('SIGTERM', () => {
  console.log('🛑 Arrêt du serveur...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('🛑 Arrêt du serveur...');
  process.exit(0);
});