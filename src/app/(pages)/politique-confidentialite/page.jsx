import Link from "next/link";
import Base from "@/app/Components/Front/Base";
import Title from "@/app/Components/Front/Title";
import { siteOwner, contact, legal } from "@/app/data/site.config";

export const metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité et protection des données du portfolio de ${siteOwner.fullName}.`,
};

export default function PolitiqueConfidentialite() {
  const { fullName, lastUpdated } = { ...siteOwner, ...legal };

  return (
    <Base>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <Title text="Politique de confidentialité" />

        <p className="text-foreground/80 text-lg max-w-3xl mx-auto text-center mb-16">
          Cette page décrit comment sont traitées vos données personnelles sur ce
          site, conformément au Règlement général sur la protection des données
          (RGPD) et à la loi Informatique et Libertés.
        </p>

        <div className="space-y-6">
          {/* 1. Responsable du traitement */}
          <div>
            <h2 className="text-xl font-bold text-secondary mb-4">
              1. Responsable du traitement
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              Le responsable du traitement des données personnelles collectées
              via ce site est {fullName}. Pour toute question relative à vos
              données, vous pouvez me contacter à l&apos;adresse :{" "}
              <a
                href={`mailto:${contact.email}`}
                className="text-secondary hover:text-primary transition-colors duration-300 underline underline-offset-2"
              >
                {contact.email}
              </a>
              .
            </p>
          </div>

          {/* 2. Données collectées */}
          <div>
            <h2 className="text-xl font-bold text-secondary mb-4">
              2. Données collectées
            </h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Ce site ne collecte <strong className="text-foreground">aucune donnée</strong> de
              manière automatique (pas de cookies, pas d&apos;outils d&apos;analyse).
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Les seules données traitées sont celles que vous fournissez
              volontairement via le <strong className="text-foreground">formulaire de contact</strong> :
              prénom, nom, adresse email, numéro de téléphone (optionnel) et
              message.
            </p>
          </div>

          {/* 3. Finalités et base légale */}
          <div>
            <h2 className="text-xl font-bold text-secondary mb-4">
              3. Finalités et base légale
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              Ces données sont utilisées <strong className="text-foreground">uniquement</strong> pour
              traiter votre demande et vous répondre. La base légale du
              traitement est votre consentement (envoi du formulaire) et
              l&apos;intérêt légitime à répondre aux sollicitations reçues.
            </p>
          </div>

          {/* 4. Conservation des données */}
          <div>
            <h2 className="text-xl font-bold text-secondary mb-4">
              4. Conservation des données
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              Les données du formulaire de contact ne sont{" "}
              <strong className="text-foreground">pas stockées</strong> dans une
              base de données sur ce site. Elles sont transmises par email pour
              permettre la réponse à votre message. Les échanges restent dans les
              boîtes mail concernées selon les durées de conservation de votre
              fournisseur d&apos;email et de la mienne.
            </p>
          </div>

          {/* 5. Destinataires et transferts */}
          <div>
            <h2 className="text-xl font-bold text-secondary mb-4">
              5. Destinataires et transferts
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              Vos données ne sont <strong className="text-foreground">pas transmises à des tiers</strong> à
              des fins commerciales ou publicitaires. L&apos;envoi du formulaire
              peut faire intervenir un prestataire technique (service d&apos;envoi
              d&apos;emails) dans le cadre strict du traitement de votre
              demande.
            </p>
          </div>

          {/* 6. Vos droits */}
          <div>
            <h2 className="text-xl font-bold text-secondary mb-4">
              6. Vos droits
            </h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Conformément au RGPD et à la loi Informatique et Libertés, vous
              disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-foreground/90 space-y-1 mb-4 ml-2">
              <li>
                <strong className="text-foreground">Droit d&apos;accès</strong> : obtenir une copie des données vous concernant
              </li>
              <li>
                <strong className="text-foreground">Droit de rectification</strong> : faire corriger des données inexactes
              </li>
              <li>
                <strong className="text-foreground">Droit à l&apos;effacement</strong> : demander la suppression de vos données
              </li>
              <li>
                <strong className="text-foreground">Droit d&apos;opposition</strong> : vous opposer à un traitement
              </li>
              <li>
                <strong className="text-foreground">Droit à la limitation</strong> : demander la limitation du traitement
              </li>
            </ul>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Pour exercer ces droits, contactez-moi à{" "}
              <a
                href={`mailto:${contact.email}`}
                className="text-secondary hover:text-primary transition-colors duration-300 underline underline-offset-2"
              >
                {contact.email}
              </a>
              . Vous pouvez également introduire une réclamation auprès de la{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors duration-300 underline underline-offset-2"
              >
                CNIL
              </a>
              .
            </p>
          </div>

          {/* 7. Cookies */}
          <div>
            <h2 className="text-xl font-bold text-secondary mb-4">
              7. Cookies
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              Ce site n&apos;utilise <strong className="text-foreground">aucun cookie</strong>, ni
              technique, ni analytique, ni publicitaire. Aucune donnée de
              navigation n&apos;est collectée ni stockée.
            </p>
          </div>

          {/* 8. Modifications */}
          <div>
            <h2 className="text-xl font-bold text-secondary mb-4">
              8. Modifications
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              Cette politique de confidentialité peut être mise à jour. La date
              de dernière mise à jour est indiquée en bas de page. En cas de
              changement substantiel, une information pourra être portée à votre
              connaissance si vous nous avez contactés récemment.
            </p>
          </div>
        </div>

        <p className="text-foreground/50 text-sm text-center mt-12 italic">
          Dernière mise à jour : {lastUpdated}
        </p>

        <p className="text-foreground/60 text-sm text-center mt-4">
          <Link
            href="/mentions-legales"
            className="text-secondary hover:text-primary transition-colors duration-300 underline underline-offset-2"
          >
            Voir les mentions légales
          </Link>
        </p>
      </main>
    </Base>
  );
}
