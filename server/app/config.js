// app/config.js
require('dotenv').config();

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const nodemailer = require("nodemailer");

const app = express();

// CORS
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173"]
}));

// Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Dossier uploads
const uploadsDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log("📁 Dossier uploads créé");
}

// Multer - MODIFIÉ pour plusieurs fichiers
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ 
  storage,
  limits: { 
    fileSize: 10 * 1024 * 1024, // 10MB par fichier
    files: 10 // Max 10 fichiers
  }
});

// Nodemailer - MODIFIÉ pour Outlook ou Gmail
const emailService = process.env.EMAIL_SERVICE || 'gmail'; // 'gmail' ou 'outlook'

let transporterConfig = {};
if (emailService === 'outlook') {
  transporterConfig = {
    service: "hotmail", // Pour Outlook/Hotmail
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  };
  console.log("📧 Configuration Outlook");
} else {
  transporterConfig = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  };
  console.log("📧 Configuration Gmail");
}

const transporter = nodemailer.createTransport(transporterConfig);

// Test config au démarrage
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter.verify((error, success) => {
    if (error) {
      console.error("❌ Erreur email:", error.message);
    } else {
      console.log("✅ Email configuré pour:", process.env.EMAIL_USER);
    }
  });
} else {
  console.error("❌ Variables EMAIL_USER et EMAIL_PASS manquantes dans .env");
}

// Route contact - MODIFIÉE pour plusieurs fichiers
app.post("/api/contact", upload.array('fichiers', 10), async (req, res) => {
  try {
    const { firstName, email, phone, message } = req.body;
    const fichiers = req.files || []; // PLUSIEURS fichiers maintenant

    console.log("📨 Message reçu de:", firstName, email);
    console.log("📎 Nombre de fichiers:", fichiers.length);

    // Création du HTML avec liste des fichiers
    let fichiersHTML = '';
    if (fichiers.length > 0) {
      fichiersHTML = `
        <p><strong>Fichiers joints (${fichiers.length}):</strong></p>
        <ul>
          ${fichiers.map(f => `<li>${f.originalname} (${(f.size / 1024).toFixed(2)} KB)</li>`).join('')}
        </ul>
      `;
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_DEST || process.env.EMAIL_USER, // Email de destination
      replyTo: email,
      subject: `Nouveau message de ${firstName}${fichiers.length > 0 ? ` (${fichiers.length} fichier${fichiers.length > 1 ? 's' : ''})` : ''}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || 'Non renseigné'}</p>
        <p><strong>Message:</strong></p>
        <p style="background:#f5f5f5; padding:10px; border-left:3px solid #007bff;">${message}</p>
        ${fichiersHTML}
        <hr>
        <small>Reçu le ${new Date().toLocaleString('fr-FR')}</small>
      `,
      // ATTACHMENTS multiples
      attachments: fichiers.map(fichier => ({
        filename: fichier.originalname,
        path: fichier.path
      }))
    };

    await transporter.sendMail(mailOptions);

    // Supprimer TOUS les fichiers
    fichiers.forEach(fichier => {
      if (fs.existsSync(fichier.path)) {
        fs.unlinkSync(fichier.path);
      }
    });

    console.log("✅ Email envoyé avec succès");
    res.json({ 
      success: true, 
      message: `Message envoyé avec succès ! ${fichiers.length > 0 ? `(${fichiers.length} fichier${fichiers.length > 1 ? 's' : ''} joint${fichiers.length > 1 ? 's' : ''})` : ''}` 
    });

  } catch (err) {
    console.error("❌ Erreur:", err.message);
    
    // Nettoyer TOUS les fichiers en cas d'erreur
    if (req.files) {
      req.files.forEach(file => {
        if (fs.existsSync(file.path)) {
          fs.unlinkSync(file.path);
        }
      });
    }
    
    res.status(500).json({ 
      success: false, 
      message: "Erreur lors de l'envoi du message" 
    });
  }
});

// Route de test
app.get("/api/test", (req, res) => {
  res.json({ 
    success: true, 
    message: "🎉 API fonctionnelle !",
    emailService: emailService,
    maxFiles: 10,
    timestamp: new Date().toISOString()
  });
});

// Démarrage du serveur
const PORT = process.env.PORT || 5000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log('🚀 Serveur démarré sur le port:', PORT);
    console.log('🌐 URL: http://localhost:' + PORT);
    console.log('🔗 Test: http://localhost:' + PORT + '/api/test');
    console.log('📧 Service:', emailService);
  });
}

module.exports = app;