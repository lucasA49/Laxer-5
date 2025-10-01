// app/config.js
require('dotenv').config();

const express = require("express");
const cors = require("cors");
const multer = require("multer");

// --- App & middlewares
const app = express();
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173"]
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Multer en mémoire (pas d'écriture sur disque)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB par fichier
    files: 10
  }
});

// --- Mailjet client
const mailjet = require("node-mailjet").connect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_SECRET_KEY
);

// Helper simple pour valider un email "correct"
const looksLikeEmail = (s) => typeof s === "string" && /\S+@\S+\.\S+/.test(s);

// --- Route contact
app.post("/api/contact", upload.array('fichiers', 10), async (req, res) => {
  try {
    const { firstName, email, phone, message } = req.body;
    const fichiers = req.files || [];

    // Pièces jointes Mailjet
    const attachments = fichiers.map((f) => ({
      ContentType: f.mimetype,
      Filename: f.originalname,
      Base64Content: f.buffer.toString("base64"),
    }));

    const now = new Date().toLocaleString('fr-FR');
    const subject =
      `Nouveau message de ${firstName}` +
      (fichiers.length ? ` (${fichiers.length} fichier${fichiers.length > 1 ? 's' : ''})` : '');

    const html = `
      <h2>Nouveau message de contact</h2>
      <p><strong>Nom:</strong> ${firstName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Téléphone:</strong> ${phone || 'Non renseigné'}</p>
      <p><strong>Message:</strong></p>
      <p style="background:#f5f5f5; padding:10px; border-left:3px solid #007bff;">${message}</p>
      ${fichiers.length ? `
        <p><strong>Fichiers joints (${fichiers.length}):</strong></p>
        <ul>
          ${fichiers.map(f => `<li>${f.originalname} (${(f.size/1024).toFixed(2)} KB)</li>`).join('')}
        </ul>` : ''
      }
      <hr>
      <small>Reçu le ${now}</small>
    `;

    // Message Mailjet (Attachments ajouté uniquement s'il y en a)
    const messagePayload = {
      From: {
        Email: process.env.MAILJET_SENDER_EMAIL,
        Name: process.env.MAILJET_SENDER_NAME || "Contact",
      },
      To: [
        { Email: process.env.EMAIL_DEST || process.env.MAILJET_SENDER_EMAIL }
      ],
      Subject: subject,
      HTMLPart: html,
      ...(looksLikeEmail(email) ? { ReplyTo: { Email: email, Name: firstName } } : {}),
      ...(attachments.length ? { Attachments: attachments } : {})
    };

    const payload = { Messages: [messagePayload] };

    const resp = await mailjet
      .post("send", { version: "v3.1" })
      .request(payload);

    const mj = resp.body?.Messages?.[0];
    console.log("Mailjet:", mj?.Status, "→",
      Array.isArray(mj?.To) ? mj.To.map(t => t.MessageID).join(",") : "no-To");

    return res.json({
      success: true,
      message: `Message envoyé avec succès ! ${fichiers.length ? `(${fichiers.length} fichier${fichiers.length > 1 ? 's' : ''} joint${fichiers.length > 1 ? 's' : ''})` : ''}`
    });
  } catch (err) {
    // Log détaillé pour debug
    const detail = err?.response?.text || err?.message || String(err);
    console.error("❌ Erreur Mailjet:", detail);
    return res.status(500).json({ success: false, message: "Erreur lors de l'envoi du message" });
  }
});

// --- Route test
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "🎉 API fonctionnelle !",
    provider: "Mailjet",
    maxFiles: 10,
    timestamp: new Date().toISOString()
  });
});

// --- Démarrage
const PORT = process.env.PORT || 5000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log('🚀 Serveur démarré sur le port:', PORT);
    console.log('🌐 URL: http://localhost:' + PORT);
    console.log('📧 Provider: Mailjet');
  });
}

module.exports = app;
