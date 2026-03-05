import { User, Calendar, Mail, Phone, MapPin, GraduationCap, Github } from "lucide-react";
import { siteOwner, contact, social, location } from "./site.config";

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