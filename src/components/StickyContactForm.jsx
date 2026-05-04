import { useRef, useState } from "react";
import "../style/StickyContactForm.css";

const API_URL = import.meta.env.VITE_API_URL ?? "https://api.laxer5.fr";

export default function StickyContactForm() {
    const MAX_FILES = 10;
    const fileInputRef = useRef(null);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        fichiers: [],
    });

    const [notification, setNotification] = useState("");
    const [isSending, setIsSending] = useState(false);

    // champs texte
    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // ajout fichiers
    const handleFileChange = (e) => {
        const selected = Array.from(e.target.files || []);
        const merged = [...formData.fichiers, ...selected];

        // dédoublonnage (name+size)
        const seen = new Set();
        const dedup = [];
        for (const f of merged) {
            const key = `${f.name}-${f.size}`;
            if (!seen.has(key)) {
                seen.add(key);
                dedup.push(f);
            }
        }

        const capped = dedup.slice(0, MAX_FILES);

        if (dedup.length > MAX_FILES) {
            setNotification(`Vous pouvez envoyer au maximum ${MAX_FILES} fichiers.`);
        } else {
            setNotification("");
        }

        setFormData((prev) => ({ ...prev, fichiers: capped }));

        // re-sélectionner les mêmes fichiers ensuite
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    // supprimer un fichier
    const handleRemoveFile = (index) => {
        setFormData((prev) => ({
            ...prev,
            fichiers: prev.fichiers.filter((_, i) => i !== index),
        }));
        if (fileInputRef.current) fileInputRef.current.value = "";
        setNotification("");
    };

    // envoi
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSending) return;

        setIsSending(true);

        const form = new FormData();
        form.append("firstName", formData.firstName);
        // si ton backend ne gère pas lastName, il l’ignorera (sinon tu peux le supprimer)
        form.append("lastName", formData.lastName);
        form.append("email", formData.email);
        form.append("phone", formData.phone);
        form.append("message", formData.message);

        formData.fichiers.forEach((f) => form.append("fichiers", f));

        try {
            const res = await fetch(`${API_URL}/api/contact`, {
                method: "POST",
                body: form,
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                setNotification(data.message || "Échec de l'envoi. Veuillez réessayer.");
                setIsSending(false);
                return;
            }

            setNotification(data.message || "Message envoyé.");

            // reset complet
            e.target.reset();
            if (fileInputRef.current) fileInputRef.current.value = "";
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
                fichiers: [],
            });
        } catch {
            setNotification("Échec de l'envoi de votre demande. Veuillez réessayer.");
        } finally {
            setIsSending(false);
            setTimeout(() => setNotification(""), 5000);
        }
    };

    const formatTelFR = (digits) => {
        const d = (digits || "").replace(/\D/g, "").slice(0, 10);
        // groupe par 2 : 02 51 57 65 15
        return d.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
    };


    return (
        <div className="stickyForm">
            <h3 className="stickyForm__title">Contactez-nous</h3>

            <form className="stickyForm__form" onSubmit={handleSubmit}>
                <label className="stickyForm__field">
                    <span className="stickyForm__label">Prénom</span>
                    <input
                        className={`stickyForm__input ${formData.firstName ? "isFilled" : ""}`}
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleTextChange}
                        required
                    />
                </label>

                <label className="stickyForm__field">
                    <span className="stickyForm__label">Nom</span>
                    <input
                        className="stickyForm__input"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleTextChange}
                    />
                </label>

                <label className="stickyForm__field">
                    <span className="stickyForm__label">Adresse mail</span>
                    <input
                        className="stickyForm__input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleTextChange}
                        required
                    />
                </label>

                <label className="stickyForm__field">
                    <span className="stickyForm__label">Téléphone</span>
                    <input
                        className="stickyForm__input"
                        type="tel"
                        name="phone"
                        value={formatTelFR(formData.phone)}          // 👈 affichage formaté
                        autoComplete="tel"
                        inputMode="tel"
                        onChange={(e) => {
                            const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                            setFormData((prev) => ({ ...prev, phone: digits })); // 👈 stock en chiffres
                        }}
                        onInput={(e) => {
                            // aide certains navigateurs/autofill à bien repasser dans ton pipe
                            const digits = e.currentTarget.value.replace(/\D/g, "").slice(0, 10);
                            if (digits !== formData.phone) {
                                setFormData((prev) => ({ ...prev, phone: digits }));
                            }
                        }}
                    />
                </label>

                <label className="stickyForm__field stickyForm__field--textarea">
                    <span className="stickyForm__label">Votre message</span>
                    <textarea
                        className="stickyForm__textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleTextChange}
                        rows={5}
                        required
                    />
                </label>

                <div className="stickyForm__files">
                    <input
                        ref={fileInputRef}
                        className="stickyForm__fileInput"
                        type="file"
                        multiple
                        onChange={handleFileChange}
                    />

                    <button
                        type="button"
                        className="stickyForm__fileBtn"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        Sélectionner des fichiers
                    </button>

                    {formData.fichiers.length > 0 && (
                        <div className="stickyForm__fileList">
                            {formData.fichiers.map((f, i) => (
                                <div className="stickyForm__fileRow" key={`${f.name}-${f.size}-${i}`}>
                                    <span className="stickyForm__fileName">{f.name}</span>
                                    <button
                                        type="button"
                                        className="stickyForm__fileRemove"
                                        onClick={() => handleRemoveFile(i)}
                                        aria-label="Supprimer le fichier"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {notification && <div className="stickyForm__notif">{notification}</div>}

                <button className="stickyForm__submit" type="submit" disabled={isSending}>
                    {isSending ? "Envoi..." : "Envoyer"}
                </button>
            </form>
        </div>
    );
}