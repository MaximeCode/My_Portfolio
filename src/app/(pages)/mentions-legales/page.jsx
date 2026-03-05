import Base from "@/app/Components/Front/Base";
import Title from "@/app/Components/Front/Title";
import { siteOwner, contact, legal } from "@/app/data/site.config";

export const metadata = {
  title: "Mentions légales",
  description: `Mentions légales du portfolio de ${siteOwner.fullName}`,
};

const legalInfo = {
  ...siteOwner,
  ...legal,
  emailAddress: contact.email,
  phoneNumber: contact.phoneDisplay,
  postalAddress: contact.postalAddress,
};

export default function MentionsLegales() {
  const {
    firstName,
    lastName,
    fullName,
    status,
    siretNumber,
    postalAddress,
    emailAddress,
    phoneNumber,
    lastUpdated,
  } = legalInfo;

  return (
    <Base>
      <main className="max-w-4xl mx-auto px-4 sm:px-6">
        <Title text="Mentions légales" />

        <p className="text-foreground/80 text-lg max-w-3xl mx-auto text-center mb-16">
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
          pour la confiance en l&apos;économie numérique, il est précisé aux
          utilisateurs du site l&apos;identité des différents intervenants dans
          le cadre de sa réalisation et de son suivi.
        </p>

        <div className="space-y-6">
          {/* 1. Éditeur du site */}
          <div>
            <h2 className="text-xl font-bold text-secondary mb-4">
              1. Éditeur du site
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              <strong className="text-foreground">Nom :</strong> {firstName}{" "}
              {lastName}
              <br />
              <strong className="text-foreground">Statut :</strong> {status}
              <br />
              <strong className="text-foreground">SIRET :</strong> {siretNumber}
              <br />
              <strong className="text-foreground">Adresse :</strong> {postalAddress}
              <br />
              <strong className="text-foreground">Email :</strong> {emailAddress}
              <br />
              <strong className="text-foreground">Téléphone :</strong> {phoneNumber}
            </p>
          </div>

          {/* 2. Hébergement */}
          <div>
            <h2 className="text-xl font-bold text-secondary mb-4">
              2. Hébergement
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              Ce site est hébergé par la société{" "}
              <strong className="text-foreground">Vercel Inc.</strong>
              <br />
              340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis
              <br />
              Site web :{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors duration-300 underline underline-offset-2"
              >
                vercel.com
              </a>
            </p>
          </div>

          {/* 3. Propriété intellectuelle */}
          <div>
            <h2 className="text-xl font-bold text-secondary mb-4">
              3. Propriété intellectuelle
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              L&apos;ensemble du contenu de ce site (textes, images, visuels,
              logo, structure) est la propriété exclusive de {fullName}
              , sauf mention contraire explicite. Toute reproduction,
              distribution, modification ou utilisation de ces contenus, sous
              quelque forme que ce soit, sans autorisation écrite préalable, est
              strictement interdite.
            </p>
          </div>

          {/* 4. Données personnelles */}
          <div>
            <h2 className="text-xl font-bold text-secondary mb-4">
              4. Données personnelles
            </h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Ce site ne collecte{" "}
              <strong className="text-foreground">aucune donnée personnelle</strong>{" "}
              de manière automatique. Aucun cookie, traceur ou outil
              d&apos;analyse n&apos;est utilisé.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Le seul traitement de données personnelles intervient lorsque vous
              remplissez volontairement le{" "}
              <strong className="text-foreground">formulaire de contact</strong>.
              Dans ce cas, les informations saisies (nom, prénom, adresse email,
              numéro de téléphone, message) sont utilisées{" "}
              <strong className="text-foreground">uniquement</strong> pour
              traiter et répondre à votre demande. Elles ne sont ni conservées
              dans une base de données, ni transmises à des tiers.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD – Règlement UE 2016/679) et à la loi Informatique et Libertés,
              vous disposez des droits suivants concernant vos données :
            </p>
            <ul className="list-disc list-inside text-foreground/90 space-y-1 mb-4 ml-2">
              <li>Droit d&apos;accès</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
              <li>Droit d&apos;opposition</li>
              <li>Droit à la limitation du traitement</li>
            </ul>
            <p className="text-foreground/90 leading-relaxed">
              Pour exercer ces droits, vous pouvez contacter le responsable du
              traitement à l&apos;adresse suivante :{" "}
              <strong className="text-foreground">{emailAddress}</strong>
            </p>
          </div>

          {/* 5. Cookies */}
          <div>
            <h2 className="text-xl font-bold text-secondary mb-4">
              5. Cookies
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              Ce site n&apos;utilise <strong className="text-foreground">aucun cookie</strong>,
              qu&apos;il soit technique, analytique ou publicitaire. Aucune
              donnée de navigation n&apos;est collectée ni stockée.
            </p>
          </div>

          {/* 6. Liens hypertextes */}
          <div>
            <h2 className="text-xl font-bold text-secondary mb-4">
              6. Liens hypertextes
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              Ce site peut contenir des liens vers des sites externes (LinkedIn,
              GitHub, etc.). {fullName} ne peut être tenu responsable
              du contenu de ces sites tiers ni de leur politique de
              confidentialité.
            </p>
          </div>

          {/* 7. Limitation de responsabilité */}
          <div>
            <h2 className="text-xl font-bold text-secondary mb-4">
              7. Limitation de responsabilité
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              Les informations contenues sur ce site sont fournies à titre
              indicatif. {fullName} s&apos;efforce de maintenir ces
              informations à jour et exactes, mais ne peut garantir leur
              exhaustivité ni leur parfaite actualité. La responsabilité du site
              ne saurait être engagée en cas d&apos;erreur, d&apos;omission ou
              d&apos;indisponibilité des informations.
            </p>
          </div>

          {/* 8. Droit applicable */}
          <div>
            <h2 className="text-xl font-bold text-secondary mb-4">
              8. Droit applicable
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              Les présentes mentions légales sont régies par le droit français.
              En cas de litige, et à défaut de résolution amiable, les tribunaux
              français seront seuls compétents.
            </p>
          </div>
        </div>

        <p className="text-foreground/50 text-sm text-center mt-12 italic">
          Dernière mise à jour : {lastUpdated}
        </p>
      </main>
    </Base>
  );
}
