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
  Eye,
  ExternalLink,
  Lock,
  MailPlus,
} from "lucide-react";
import { useRef } from "react";
import BtnDownloadCV from "@/app/Components/Front/BtnDownloadCV";
import Btn from "@/app/Components/Front/Btn";
import { classNameForIcon } from "@/app/layout";
import Title from "@/app/Components/Front/Title";
import Base from "@/app/Components/Front/Base";

import { personalInfo, education } from "@/app/data/qui_suis_je.data";
import { projectsByTechnology } from "@/app/data/projects.data";

export default function AboutPage() {
  const scrollToEducation = (year) => {
    const ref = educationRefs[year];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Prends les années de l'array education et crée un ref pour chaque année
  const educationRefs = {};
  education.map((edu) => (educationRefs[edu.year] = useRef(null)));

  /**
   * Type pour l'autocomplétion de l'IDE
   * @type {Array<{
   *   title: string,
   *   description: string,
   *   technologies: string[],
   *   image: string,
   *   link?: string,
   *   github?: string,
   *   fav?: boolean,
   *   in_progress?: boolean,
   *   object_classes?: string
   * }>}
   */
  const projectsFavorites = projectsByTechnology
    .flatMap((section) => section.projects)
    .filter((project) => project.fav);

  return (
    <Base>
      {/* Two Columns Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        {/* Description Column */}
        <div className="lg:col-span-2 text-justify">
          <Title text="Qui suis-je ?" />
          <p className="text-[#f5e6d3] mb-4 text-lg">
            Passionné par le développement web depuis plus de 5 ans, j&apos;ai
            eu l&apos;opportunité de travailler sur de nombreux projets variés,
            allant de sites vitrines élégants à des applications web complexes
            en passant par des sites e-commerce. Mon approche combine créativité
            et rigueur technique pour offrir des solutions performantes et
            esthétiques.
          </p>
          <p className="text-[#f5e6d3] mb-4 text-lg">
            Je me spécialise dans le développement front-end avec React et
            Next.JS, tout en maîtrisant également le back-end avec Node.js. Mon
            objectif est toujours de créer des expériences utilisateur fluides
            et intuitives qui répondent aux besoins réels des utilisateurs.
          </p>
          <p className="text-[#f5e6d3] text-lg">
            Curieux de nature, je me tiens constamment à jour des dernières
            technologies et tendances du web. J&apos;aime relever de nouveaux
            défis et collaborer avec des équipes dynamiques pour transformer des
            idées en produits concrets et impactants.
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
                    <p
                      className="text-[#f5e6d3] text-sm"
                      {...((info.value.includes("@") ||
                        info.value.includes("+33")) && {
                        onClick: () => {
                          navigator.clipboard.writeText(info.value);
                        },
                        title: "Copier dans le presse-papiers",
                        tabIndex: 0,
                      })}
                    >
                      <span
                        className={`
                          ${(info.value.includes("@") ||
                            info.value.includes("+33")) &&
                          "hover:text-[#fbbf24] transition-colors cursor-pointer"
                          }
                          `}
                      >
                        {info.value}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Timeline */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-[#fbbf24] mb-12 text-center">
          Mon Parcours
        </h2>


        <button data-tooltip-target="tooltip-default" type="button" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Default tooltip</button>

        <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible text-red-500 bg-white tooltip">
          Tooltip content
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>


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
              className={`relative mb-12 md:mb-16 ${index % 2 === 0
                ? "pr-12 mr-auto text-right"
                : "pl-12 ml-auto text-left"
                } w-1/2`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-0 w-4 h-4 bg-[#fbbf24] rounded-full border-4 border-[#0a0e27] ${index % 2 === 0 ? "-right-2" : "-left-2"
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
                <p className="text-[#f5e6d3]/70 text-justify">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-[#fbbf24] mb-8 text-center">
          Mes Projets Favoris
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsFavorites.map((project, index) => (
            <div key={index}>
              <Card className="pt-0 bg-[#141b3d] border-[#fbbf24]/20 overflow-hidden h-full hover:border-[#60a5fa]/50 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={`/img/${project.image}.png`}
                    alt={project.title}
                    width={1080}
                    height={500}
                    className={`w-full h-full ${project.object_classes || "object-top object-cover"} transition-transform duration-500 hover:scale-110`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141b3d] via-[#141b3d]/20 to-transparent"></div>
                  {project.in_progress && (
                    <Badge
                      variant="outline"
                      className="bg-[#60a5fa] text-white text-xs border-[#60a5fa] absolute top-3 right-3 z-10"
                    >
                      EN COURS DE D&Eacute;VELOPPEMENT
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-[#f5e6d3] flex items-center justify-between">
                    {project.title}
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#60a5fa] hover:text-[#fbbf24] transition-colors cursor-pointer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    ) : (
                      <>
                        {/* <button
                          type="button"
                          data-modal-target={`modal-private-project-${index}`}
                          data-modal-toggle={`modal-private-project-${index}`}
                          className="text-[#60a5fa] hover:text-[#fbbf24] transition-colors cursor-pointer bg-transparent p-0 border-none outline-none inline-flex"
                          aria-label="Projet privé - plus d'informations"
                        > */}
                        <Lock className="w-5 h-5 text-[#60a5fa] hover:text-[#fbbf24] transition-colors cursor-not-allowed" />
                        {/* Modal projet privé */}
                        {/* </button>
                          <div
                            id={`modal-private-project-${index}`}
                            tabIndex={-1}
                            aria-hidden="true"
                            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                          >
                            <div className="relative p-4 w-full max-w-2xl max-h-full">
                              <div className="relative bg-[#141b3d] border border-[#fbbf24]/20 rounded-lg shadow-xl p-4 md:p-6">
                                <div className="flex items-center justify-between border-b border-[#60a5fa]/20 pb-4 md:pb-5">
                                  <h3 className="text-lg font-medium text-[#fbbf24]">
                                    Projet privé
                                  </h3>
                                  <button
                                    type="button"
                                    className="text-[#f5e6d3] bg-transparent hover:bg-[#1e2a5e] hover:text-[#fbbf24] rounded-lg text-sm w-9 h-9 ms-auto inline-flex justify-center items-center transition-colors"
                                    data-modal-hide={`modal-private-project-${index}`}
                                  >
                                    <svg
                                      className="w-5 h-5"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18 17.94 6M18 18 6.06 6"
                                      />
                                    </svg>
                                    <span className="sr-only">Fermer</span>
                                  </button>
                                </div>
                                <div className="space-y-4 py-4 md:py-6">
                                  <p className="text-[#f5e6d3] font-medium">
                                    {project.title}
                                  </p>
                                  <p className="leading-relaxed text-[#f5e6d3]/80">
                                    Ce projet est privé, l&apos;établissement en est le
                                    propriétaire. Contactez-moi pour plus
                                    d&apos;informations.
                                  </p>
                                </div>
                                <div className="flex border-t border-[#60a5fa]/20 pt-4 md:pt-5 gap-4">
                                  <Btn
                                    icon={<MailPlus className={classNameForIcon} />}
                                    href="/contact_me"
                                    text="Me contacter"
                                    size="md"
                                  />
                                  <button
                                    type="button"
                                    data-modal-hide={`modal-private-project-${index}`}
                                    className="text-[#f5e6d3] bg-[#1e2a5e] border border-[#60a5fa]/30 hover:bg-[#60a5fa]/10 hover:border-[#fbbf24]/50 rounded-lg px-4 py-2.5 text-sm font-medium transition-all"
                                  >
                                    Fermer
                                  </button>
                                </div>
                              </div>
                            </div>
                        </div> */}
                      </>
                    )}
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
            href="/my_projects"
            size="md"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#141b3d] to-[#0a0e27] rounded-2xl p-12 border border-[#fbbf24]/20 text-center">
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
            href="/contact_me"
            text="Me contacter"
            size="md"
          />
        </div>
      </div>
    </Base >
  );
}
