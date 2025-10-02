// server.js
require('dotenv').config(); // Charger les variables d'environnement

const app = require('./app/config'); // Importe l'app Express (sans auto-start si NO_AUTOSTART=true)

const PORT = process.env.PORT || 5000;

// Liste des origines autorisées (CORS)
const allowedOrigins = (process.env.CLIENT_URLS || "http://localhost:3000,http://localhost:5173")
  .split(",")
  .map(s => s.trim())
  .filter(Boolean);

// Démarrage du serveur
const server = app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
  console.log(`🌐 CORS configuré pour: ${allowedOrigins.join(", ")}`);
  console.log(`📧 Mailjet From: ${process.env.MAILJET_SENDER_NAME || "Contact"} <${process.env.MAILJET_SENDER_EMAIL}>`);
  console.log(`📥 Destination: ${process.env.EMAIL_DEST || process.env.MAILJET_SENDER_EMAIL}`);
});

// Gestion propre de l'arrêt du serveur
function shutdown(sig) {
  console.log(`🛑 ${sig} reçu, arrêt du serveur...`);
  server.close(() => process.exit(0));
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT',  () => shutdown('SIGINT'));
