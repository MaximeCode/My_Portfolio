import { ReactLight } from "@/components/ui/svgs/reactLight";

export const projectsByTechnology = [
    {
        technology: "Full-Stack",
        icon: "🚀",
        projects: [
            {
                title: "Site vitrine pour le club de badminton de lucé (28)",
                description:
                    "En freelance, j'ai développé le site vitrine pour le club de badminton de lucé (28), avec WordPress pour une administration plus simple pour les dirigeants du club. Ce site est hébergé sur un serveur mutualisé chez OVH et est optimisé pour les moteurs de recherche grâce à du référencement naturel.",
                technologies: ["WordPress", "PHP", "Apache", "MySQL"],
                image: "hp_alba",
                link: "https://albabadminton.fr",
                github: "https://github.com/MaximeCode/alba_badminton",
                fav: true,
            },
            {
                title: "Site vitrine pour le club de badminton d'Orléans (45)",
                description:
                    "Refonte fonctionnelle et visuelle du site vitrine du club de badminton d'Orléans (45) dont je suis adhérent.",
                technologies: [],
                image: "Logo_CLTO",
                link: "",
                github: "",
                fav: true,
                in_progress: true,
                object_classes: "object-center object-contain"
            },
        ],
    },
    {
        technology: "Next.js & React",
        icon: <ReactLight />,
        projects: [
            {
                title:
                    "Application pour l'évènement caritatif du lycée Fulbert : La Solirun",
                description:
                    "Création d'une application pour gérer l'évènement annuel du lycée Fulbert à Chartres (28), avec une interface admin pour gérer les participants et les courses. Le tout en Next.js avec React, TailwindCSS et daisyUI, PHP et MySQL pour le back-end. Un websocket a également été implémenté pour la communication en temps réel entre l'application et l'écran géant affichant les résultats en direct à tous les élèves et professeurs. Cet application a été développée par un collègue et moi-même, et n'est pas disponible publiquement (le lycée étant le propriétaire).",
                technologies: [
                    "Next.JS",
                    "React",
                    "TailwindCSS",
                    "daisyUI",
                    "PHP",
                    "MySQL",
                ],
                image: "minia_hp_solirun",
                github: "https://github.com/MaximeCode/Solirun_2025",
                fav: true,
            },
            {
                title: "Nuit de l'Info 2025",
                description:
                    "En tant que chef de projet, j'ai encadré notre petite équipe composée d'un ami et de moi-même pour développer une application web en Next.JS et React durant l'édition de la Nuit de l'Info 2025. Celle-ci soutient l'idéologie de l'association NIRD contre l'utilisation de ressources provenant d'autres pays, l'obsolescence programmée du matériel informtique... Nous avons eu 15h30 pour la réaliser (de 16h30 à 8h le lendemain matin). Durant l'évènement, nous avions à choisir 5 défis à réaliser, tous sont présent et fonctionnels dans notre app. L'un d'eux est le chatbot présent sur la page d'accueil, je l'ai connecté avec l'IA française MistralAI pour qu'il répondre à toutes les questions de utilisateur. L'app est hébergé sur notre serveur personnel, conteneurisée avec Docker. PS: Il y a un jeu Snake caché dans l'app, saurez-vous le trouver ?",
                technologies: [
                    "Next.JS",
                    "React",
                    "TailwindCSS",
                    "API MistralAI",
                    "Docker",
                ],
                image: "hp_NI25",
                github: "https://github.com/MaximeCode/InfoNight25",
                fav: true,
            },
        ],
    },
    {
        technology: "Backend & API",
        icon: "🔧",
        projects: [
            {
                title: "API RESTful E-commerce",
                description:
                    "API complète pour plateforme e-commerce avec authentification, gestion produits et paiements.",
                image:
                    "https://images.unsplash.com/photo-1641156803026-0b819059b04d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrZW5kJTIwc2VydmVyJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjMwNzc4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                technologies: ["Node.js", "Express", "MongoDB", "JWT"],
                github: "https://github.com",
            },
        ],
    }
];