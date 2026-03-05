import {
    Html, Head, Body, Container, Section,
    Text, Link, Hr, Preview, Heading, Row, Column
} from "@react-email/components";

export default function ContactEmailTemplate({ firstName, lastName, email, phone, message }) {
    return `
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>Nouveau message de ${firstName} ${lastName} depuis ton portfolio</title>
    <style>
      body {
        background-color: #0f1629;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 0; padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        background-color: #141b3d;
        border-radius: 16px;
        overflow: hidden;
        border: 1px solid rgba(96,165,250,0.2);
      }
      .header {
        padding: 32px 40px;
        background: linear-gradient(135deg, #1e3a8a, #1e40af);
        text-align: center;
      }
      .header-label {
        margin: 0 0 8px 0;
        font-size: 13px;
        color: #93c5fd;
        letter-spacing: 3px;
        text-transform: uppercase;
      }
      .header-title {
        margin: 0;
        font-size: 24px;
        color: #ffffff;
        font-weight: 700;
      }
      .content {
        padding: 36px 40px;
      }
      .info-block {
        background-color: #0f1629;
        border-radius: 10px;
        margin-bottom: 28px;
      }
      .info-row {
        padding: 14px 16px;
        display: flex;
        align-items: flex-start;
      }
      .info-label {
        margin: 0 0 4px 0;
        font-size: 11px;
        color: #60a5fa;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .info-value,
      .info-link {
        font-size: 16px;
        color: #f1f5f9;
        font-weight: 600;
        margin: 0;
        text-decoration: none;
      }
      .info-link {
        color: #fbbf24;
      }
      .info-separator {
        border: none;
        border-bottom: 1px solid rgba(96,165,250,0.1);
        margin: 0;
      }
      .message-label {
        margin: 0 0 12px 0;
        font-size: 11px;
        color: #60a5fa;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .message-block {
        background-color: #0f1629;
        border-left: 3px solid #fbbf24;
        border-radius: 0 10px 10px 0;
        padding: 20px 24px;
        margin-bottom: 28px;
      }
      .message-text {
        margin: 0;
        font-size: 15px;
        color: #e2e8f0;
        line-height: 1.7;
      }
      .cta-section {
        text-align: center;
      }
      .cta-btn {
        display: inline-block;
        background: linear-gradient(135deg, #fbbf24, #f59e0b);
        color: #0a0e27 !important;
        font-size: 15px;
        font-weight: 700;
        text-decoration: none !important;
        padding: 14px 32px;
        border-radius: 8px;
        letter-spacing: 0.5px;
        border: 1px solid rgba(10, 14, 39, 0.2);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      }
      a.cta-btn:hover {
        color: #0a0e27 !important;
        text-decoration: none !important;
      }
      .footer {
        padding: 20px 40px;
        border-top: 1px solid rgba(96,165,250,0.1);
        text-align: center;
      }
      .footer-text {
        margin: 0;
        font-size: 12px;
        color: #475569;
      }
    </style>
  </head>
  <body>
    <div class="container">

      <!-- Header -->
      <div class="header">
        <div class="header-label">Portfolio</div>
        <h1 class="header-title">Nouveau message reçu</h1>
      </div>

      <!-- Content -->
      <div class="content">

        <!-- Infos expéditeur -->
        <div class="info-block">
          <div class="info-row">
            <div>
              <div class="info-label">Nom</div>
              <div class="info-value">${firstName} ${lastName}</div>
            </div>
          </div>
          <hr class="info-separator"/>
          <div class="info-row">
            <div>
              <div class="info-label">Email</div>
              <a href="mailto:${email}" class="info-link">${email}</a>
            </div>
          </div>
          <hr class="info-separator"/>
          <div class="info-row">
            <div>
              <div class="info-label">Téléphone</div>
              <div class="info-value">${phone || "Non renseigné"}</div>
            </div>
          </div>
        </div>

        <!-- Message -->
        <div class="message-label">Message</div>
        <div class="message-block">
          <div class="message-text">${message}</div>
        </div>

        <!-- CTA -->
        <div class="cta-section">
          <a href="mailto:${email}" class="cta-btn" style="color: #0a0e27; text-decoration: none;">
            Répondre à ${firstName}
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div class="footer">
        <div class="footer-text">
          Reçu depuis le formulaire de contact de mon portfolio (<a href="https://portfolio.maximecode.fr" target="_blank" rel="noopener noreferrer">portfolio.maximecode.fr</a>)
        </div>
      </div>

    </div>
  </body>
</html>
    `;
}

// Rappel des styles pour le template de l'email
// const styles = {
//     body: { backgroundColor: "#0f1629", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", margin: 0, padding: 0 },
//     container: { maxWidth: "600px", margin: "40px auto", backgroundColor: "#141b3d", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(96,165,250,0.2)" },
//     header: { padding: "32px 40px", background: "linear-gradient(135deg, #1e3a8a, #1e40af)", textAlign: "center" },
//     headerLabel: { margin: "0 0 8px 0", fontSize: "13px", color: "#93c5fd", letterSpacing: "3px", textTransform: "uppercase" },
//     headerTitle: { margin: 0, fontSize: "24px", color: "#ffffff", fontWeight: 700 },
//     content: { padding: "36px 40px" },
//     infoBlock: { backgroundColor: "#0f1629", borderRadius: "10px", marginBottom: "28px" },
//     infoRow: { padding: "14px 16px" },
//     infoSeparator: { borderColor: "rgba(96,165,250,0.1)", margin: 0 },
//     infoLabel: { margin: "0 0 4px 0", fontSize: "11px", color: "#60a5fa", textTransform: "uppercase", letterSpacing: "1px" },
//     infoValue: { margin: 0, fontSize: "16px", color: "#f1f5f9", fontWeight: 600 },
//     infoLink: { fontSize: "16px", color: "#fbbf24", fontWeight: 600, textDecoration: "none" },
//     messageLabel: { margin: "0 0 12px 0", fontSize: "11px", color: "#60a5fa", textTransform: "uppercase", letterSpacing: "1px" },
//     messageBlock: { backgroundColor: "#0f1629", borderLeft: "3px solid #fbbf24", borderRadius: "0 10px 10px 0", padding: "20px 24px", marginBottom: "28px" },
//     messageText: { margin: 0, fontSize: "15px", color: "#e2e8f0", lineHeight: "1.7" },
//     ctaSection: { textAlign: "center" },
//     ctaButton: { display: "inline-block", background: "linear-gradient(135deg, #fbbf24, #f59e0b)", color: "#0f1629", fontSize: "14px", fontWeight: 700, textDecoration: "none", padding: "14px 32px", borderRadius: "8px", letterSpacing: "0.5px" },
//     footer: { padding: "20px 40px", borderTop: "1px solid rgba(96,165,250,0.1)", textAlign: "center" },
//     footerText: { margin: 0, fontSize: "12px", color: "#475569" },
// };