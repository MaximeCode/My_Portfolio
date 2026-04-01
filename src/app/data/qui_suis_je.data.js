import { User, Calendar, Mail, Phone, MapPin, GraduationCap, Github } from "lucide-react";
import { siteOwner, contact, social, location } from "./site.config";

export const aboutMeIntro = "Je ne fais pas ça pour la gloire. Juste pour voir la tête des gens quand ça marche exactement comme ils l'imaginaient.";

export const aboutMeParagraphs = [
    "Oups ! J'oubliais, moi c'est Maxime, passionné par le développement web depuis plus de 5 ans. J’ai eu l’opportunité de travailler sur des projets variés, allant de sites vitrines à des applications web plus complexes, ainsi que des solutions e-commerce. Mon approche combine créativité et rigueur technique afin de concevoir des interfaces à la fois performantes et esthétiques (même si on ne va pas se le cacher... je n'ai pas le talent d'un graphiste !).",
    // p2
    "Je suis déterminé à devenir un Lead développeur full-stack, spécialisé en architecture logicielle et en cybersécurité. Les technologies avec lesquelles je développe mes projets sont React avec Next.js et Node.js ainsi que PHP avec Symfony.",
    // p3
    "Actuellement en alternance, je poursuis activement ma montée en compétences en restant à l’écoute des évolutions du web. Celle-ci m'apporte la vision sur des projets plus complexes, e-commerce comme Symfony. J’apprécie particulièrement relever de nouveaux défis et collaborer sur des projets concrets.",
    // p4
    "Au fil de mes expériences et de mes rencontres, j’ai été amené à accompagner plusieurs porteurs de projets dans la réalisation de leurs besoins digitaux. Cette dynamique m’a naturellement conduit à me lancer en freelance. Je travaille actuellement sur plusieurs projets prometteurs, notamment une application mobile en phase de rédaction du cahier des charges, un site vitrine pour le club de badminton où je suis adhérent (meilleur sport au monde ;) et un site e-commerce pour un auto-entrepreneur lançant son activité de traiteur.",
    // p5
    "Enfin, je suis un passionné de sport, particulièrement de badminton et de la musique (les concerts & festivals, y a pas meilleur endroit pour se délivrer de la routine quotidienne ;).",
    // p6
    "BREF, si tu as lu jusqu'ici, t'as probablement une bonne raison ! À bientôt !"
];

export const personalInfo = [
    { icon: User, label: "Nom", value: siteOwner.fullName },
    { icon: Calendar, label: "Âge", value: "20 ans" },
    { icon: Mail, label: "Email", value: contact.email, link: `mailto:${contact.email}` },
    { icon: Phone, label: "Téléphone", value: contact.phoneDisplay, link: `tel:${contact.phoneHref}` },
    {
        icon: MapPin,
        label: "Localisation",
        value: location,
    },
    {
        icon: GraduationCap,
        label: "Diplôme",
        value: "BTS SIO SLAM Développement Web/Logiciel",
    },
    {
        icon: Github,
        label: "GitHub",
        value: social.githubUrl.replace("https://", ""),
        link: social.githubUrl,
    },
];

export const education = [
    {
        year: "2028",
        degree: "Master Architecture & Développement Logiciel",
        school: "CODA_ School, Orléans (45)",
        description:
            "J'ai pour projet de devenir chef de projet web et pour cela, je prévois de poursuivre mes études vers un master orienté architecture logicielle, gestion de projet et cybersécurité.",
    },
    {
        year: "2026",
        degree: "3ème année Bachelor Développeur Full-Stack",
        school: "CODA_ School, Orléans (45)",
        description:
            "En alternance chez Kiwik, avec un rythme de 3 semaines en entreprise et 1 semaine en école. Formation en Développement Web Full-Stack grâce à des intervenants expérimentés et des projets variés. Activités principales : Approfondissement de React, Node.JS, Diagrammes UML, API REST, Docker, Symfony... Passage du diplôme en juin 2026.",
    },
    {
        year: "2025",
        degree: "BTS SIO SLAM ",
        school: "Lycée Fulbert, Chartres (28)",
        description:
            "Formation en développement web full-stack, comprenant Front-end, Back-end, gestion de bases de données et de serveurs (SQL, Apache, Nginx...). Activités principales : développement web avec HTML, CSS, JavaScript, PHP, MySQL, et développement application en C#. Apprentissage de la Programmation Orientée Objet et des méthodologies agiles. Diplôme obtenu et option Mathématiques Approfondies validée.",
    },
    {
        year: "2023",
        degree: "BAC Pro Systèmes Numériques Option C : RISC",
        school: "Lycée Sully, Nogent-le-Rotrou (28)",
        description:
            "Formation aux réseaux et systèmes d'administration, et découverte de la programmation informatique. Activités principales : configuration, installation et test d'équipements réseaux tels que des switchs, des routeurs ou des serveurs ADDS, DNS, DHCP, Ipfire, GPO, VLAN... Également virtualisation de serveursavec VirtualBox et Proxmox. Diplôme obtenu avec mention Très Bien & mention Européenne.",
    },
];