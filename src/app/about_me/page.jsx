"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  User,
  Calendar,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Github,
  Eye,
  ArrowRight,
  ExternalLink,
  Lock,
  MailPlus,
} from "lucide-react";
import { useRef, useState } from "react";
import BtnDownloadCV from "@/app/Components/btn/BtnDownloadCV";
import Btn from "@/app/Components/btn/Btn";
import { classNameForIcon } from "@/app/layout";

export default function AboutPage() {
  const [showSchoolProjectModal, setShowSchoolProjectModal] = useState(false);

  const scrollToEducation = (year) => {
    const ref = educationRefs[year];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const personalInfo = [
    { icon: User, label: "Nom", value: "Maxime BAUDE" },
    { icon: Calendar, label: "Âge", value: "20 ans" },
    { icon: Mail, label: "Email", value: "contact.mbaude@gmail.com" },
    { icon: Phone, label: "Téléphone", value: "+33 7 62 17 11 77" },
    { icon: MapPin, label: "Localisation", value: "Orléans, France" },
    {
      icon: GraduationCap,
      label: "Diplôme",
      value: "BTS SIO Développement Web",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/MaximeCode",
      link: "https://github.com/MaximeCode",
    },
  ];

  const projects = [
    {
      title: "Site vitrine pour le club de badminton de lucé (28)",
      description:
        "En freelance, j'ai développé le site vitrine pour le club de badminton de lucé (28), avec WordPress pour une administration plus simple pour les dirigeants du club. Ce site est hébergé sur un serveur mutualisé chez OVH et est optimisé pour les moteurs de recherche grâce à du référencement naturel.",
      technologies: ["WordPress", "PHP", "Apache", "MySQL"],
      image: "hp_alba",
      link: "https://albabadminton.fr",
    },
    {
      title:
        "Application pour l'évènement caritatif du lycée Fulbert : La Solirun",
      description:
        "Création d'une application pour gérer l'évènement annuel du lycée Fulbert à Chartres (28), avec une interface admin pour gérer les participants et les courses. Le tout en Next.js avec React, TailwindCSS et daisyUI, PHP et MySQL pour le back-end. Un websocket a également été implémenté pour la communication en temps réel entre l'application et l'écran géant affichant les résultats en direct à tous les élèves et professeurs. Cet application a été développée par un collègue et moi-même, et n'est pas disponible publiquement (le lycée étant le propriétaire).",
      technologies: [
        "Next.js",
        "JavaScript",
        "TailwindCSS",
        "daisyUI",
        "PHP",
        "MySQL",
      ],
      image: "minia_hp_solirun",
      // link: "https://example.com",
    },
  ];

  const education = [
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

  // Prends les années de l'array education et crée un ref pour chaque année
  const educationRefs = {};
  education.map((edu) => (educationRefs[edu.year] = useRef(null)));

  return (
    <div className="min-h-screen bg-[#0a0e27] text-[#f5e6d3] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-10">
        {/* Two Columns Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Description Column */}
          <div className="lg:col-span-2">
            {/* Title */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-[#fbbf24] mb-4">
                Qui suis-je ?
              </h1>
            </div>
            <p className="text-[#f5e6d3] mb-4 text-lg">
              Passionné par le développement web depuis plus de 5 ans, j&apos;ai
              eu l&apos;opportunité de travailler sur de nombreux projets
              variés, allant de sites vitrines élégants à des applications web
              complexes en passant par des sites e-commerce. Mon approche
              combine créativité et rigueur technique pour offrir des solutions
              performantes et esthétiques.
            </p>
            <p className="text-[#f5e6d3] mb-4 text-lg">
              Je me spécialise dans le développement front-end avec React et
              TypeScript, tout en maîtrisant également le back-end avec Node.js.
              Mon objectif est toujours de créer des expériences utilisateur
              fluides et intuitives qui répondent aux besoins réels des
              utilisateurs.
            </p>
            <p className="text-[#f5e6d3] text-lg">
              Curieux de nature, je me tiens constamment à jour des dernières
              technologies et tendances du web. J&apos;aime relever de nouveaux
              défis et collaborer avec des équipes dynamiques pour transformer
              des idées en produits concrets et impactants.
            </p>
          </div>

          {/* Quick Info Column */}
          <div className="bg-[#141b3d] rounded-lg p-6 border border-[#fbbf24]/20 h-fit">
            <h3 className="text-xl font-semibold text-[#fbbf24] mb-6 text-center">
              Informations
            </h3>
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <info.icon className="w-5 h-5 text-[#60a5fa] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-[#f5e6d3]/60 text-sm">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#60a5fa] hover:text-[#fbbf24] transition-colors text-sm break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[#f5e6d3] text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#fbbf24] mb-8 text-center">
            Mes Projets Favoris
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index}>
                <Card className="pt-0 bg-[#141b3d] border-[#fbbf24]/20 overflow-hidden h-full hover:border-[#60a5fa]/50 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={`/img/${project.image}.png`}
                      alt={project.title}
                      width={1080}
                      height={500}
                      className="w-full h-full object-top object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141b3d] via-[#141b3d]/20 to-transparent" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-[#f5e6d3] flex items-center justify-between">
                      {project.title}
                      <a
                        href={project.link || "#modal_info_no_public_project"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#60a5fa] hover:text-[#fbbf24] transition-colors cursor-pointer"
                      >
                        {project.link ? (
                          <ExternalLink className="w-5 h-5" />
                        ) : (
                          <Lock className="w-5 h-5" />
                        )}
                      </a>
                    </CardTitle>
                    <CardDescription className="text-[#f5e6d3]/70">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="bg-[#fbbf24]/10 text-[#fbbf24] border-[#fbbf24]/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Btn
              icon={<Eye className={classNameForIcon} />}
              text="Voir tous mes projets"
              href="/mes_realisations"
              size="md"
            />
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#fbbf24] mb-12 text-center">
            Mon Parcours
          </h2>

          {/* Timeline Navigation */}
          <div className="flex justify-center gap-4 mb-12">
            {Object.keys(educationRefs)
              .reverse()
              .map((year) => (
                <button
                  type="button"
                  key={year}
                  onClick={() => scrollToEducation(year)}
                  className="cursor-pointer px-6 py-2 bg-[#141b3d] border border-[#60a5fa]/30 text-[#60a5fa] rounded-full hover:bg-[#60a5fa]/10 hover:border-[#fbbf24] hover:text-[#fbbf24] transition-all duration-300"
                >
                  {year}
                </button>
              ))}
          </div>

          {/* Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 mx-auto bg-gradient-to-b from-[#60a5fa] via-[#fbbf24] to-[#60a5fa]" />

            {education.map((edu, index) => (
              <div
                key={index}
                ref={educationRefs[edu.year]}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0
                    ? "pr-12 mr-auto text-right"
                    : "pl-12 ml-auto text-left"
                } w-1/2`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute top-0 w-4 h-4 bg-[#fbbf24] rounded-full border-4 border-[#0a0e27] ${
                    index % 2 === 0 ? "-right-2" : "-left-2"
                  }`}
                />

                {/* Content Card */}
                <div className="bg-[#141b3d] p-6 rounded-lg border border-[#60a5fa]/20 hover:border-[#fbbf24]/50 transition-all duration-300">
                  <div className="inline-block px-4 py-1 bg-[#fbbf24]/20 text-[#fbbf24] rounded-full mb-4">
                    {edu.year}
                  </div>
                  <h3 className="text-xl font-semibold text-[#f5e6d3] mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-[#60a5fa] mb-3">{edu.school}</p>
                  <p className="text-[#f5e6d3]/70">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative bg-gradient-to-r from-[#141b3d] to-[#0a0e27] rounded-2xl p-8 md:p-12 border border-[#fbbf24]/20 text-center max-w-4xl overflow-hidden">
          {/* Lumière 1 - Commence en haut à gauche */}
          <div
            className="light-1 absolute w-16 h-1.5 bg-gradient-to-r from-red-800 via-[#fbbf24] to-red-800 rounded-full shadow-2xl"
            style={{
              top: 0,
              left: 0,
              transformOrigin: "center center",
            }}
          />

          {/* Lumière 2 - Commence en bas à droite (opposée à 180°) */}
          <div
            className="light-2 absolute w-16 h-1.5 bg-gradient-to-r from-red-800 via-[#fbbf24] to-red-800 rounded-full shadow-2xl"
            style={{
              bottom: 0,
              right: 0,
              transformOrigin: "center center",
            }}
          />
          {/* Contenu */}
          <h3 className="text-3xl font-bold text-[#fbbf24] mb-4">
            Vous avez un projet à réaliser ?
          </h3>
          <p className="text-[#f5e6d3] text-lg mb-8 max-w-2xl mx-auto">
            Je peux vous aider à améliorer votre visibilité sur le web et à
            concrétiser vos idées. Transformons ensemble votre vision en une
            solution digitale performante et attractive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <BtnDownloadCV size="md" />
            <Btn
              icon={<MailPlus className={classNameForIcon} />}
              href="#contact"
              text="Me contacter"
              size="md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
