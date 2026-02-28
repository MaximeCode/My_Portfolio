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
            // {
            //     title: "Site vitrine pour le club de badminton d'Orléans (45)",
            //     description:
            //         "Refonte fonctionnelle et visuelle du site vitrine du club de badminton d'Orléans (45) dont je suis adhérent.",
            //     technologies: [],
            //     image: "Logo_CLTO",
            //     link: "",
            //     github: "",
            //     fav: true,
            //     in_progress: true,
            //     object_classes: "object-center object-contain"
            // },
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
                title: "Satival Hemp-IT",
                description:
                    "Projet professionnel réalisé en alternance chez Kiwik. Création d'une API REST complète pour une application de gestion de parcelles pour une coopérative d'agriculteurs. Authentification JWT, Refresh Token, gestion des parcelles et des utilisateurs.<br>Création d'une nouvelle partie dans l'application pour gérer la nouvelle culure. J'ai suivi les étapes de développement agiles pour la réalisation du projet, encadré par mon chef de projet. J'ai participé aux réunions avec le client pour comprendre les besoins et les contraintes, et je l'ai accompagné dans son utilisation. L'application est disponible publiquement mais seuls les membres de la coopérative peuvent y accéder.",
                image: "hp_satival",
                technologies: ["Symfony", "API REST", "PHP", "MySQL", "JWT"],
            },
            {
                title: "Karl Storz - Endocontact",
                description: "Projet professionnel réalisé en alternance chez Kiwik. Création d'une nouvelle section dans l'intranet de l'entreprise de location de matériel médical de Karl Storz. Cette section permet de gérer les rapports d'inspection de l'équipement médical. J'ai travaillé sous la directive de mon chef de projet, appliqué les méthodologies agiles et formé le client au fonctionnement de cette nouvelle partie. J'ai modifié la base de données pour gérer toutes les données et les reliées aux clients/utilisateurs/articles médicaux...",
                image: "hp_ks",
                technologies: ["Symfony", "PHP", "MySQL", "Twig"],
            }
        ],
    }
];