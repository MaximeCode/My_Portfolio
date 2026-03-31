"use client";

import {
  Eye,
  ExternalLink,
  Lock,
  MailPlus,
} from "lucide-react";
import { useRef } from "react";
import BtnDownloadCV from "@/app/Components/Front/BtnDownloadCV";
import Btn from "@/app/Components/Front/Btn";
import ProjectCard from "@/app/Components/ProjectCard";
import { classNameForIcon } from "@/app/layout";
import Title from "@/app/Components/Front/Title";
import Base from "@/app/Components/Front/Base";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { motion } from "motion/react";

import {
  aboutMeParagraphs,
  personalInfo,
  education,
} from "@/app/data/qui_suis_je.data";
import { projectsByTechnology } from "@/app/data/projects.data";

import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

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
          <div className="flex flex-col gap-4">
            {aboutMeParagraphs.map((paragraph, index) => (
              <p key={index} className="text-[#f5e6d3] text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Quick Info Column */}
        <div className="bg-[#141b3d] rounded-lg p-6 border border-[#fbbf24]/20 h-fit">
          <h3 className="text-2xl font-semibold text-[#fbbf24] mb-6 text-center">
            Informations
          </h3>
          <div className="space-y-4">
            {personalInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-3">
                <info.icon className="w-6 h-6 text-[#60a5fa] flex-shrink-0 mt-1" />
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
                    <>
                      <p className="text-[#f5e6d3] text-sm">
                        <span
                          className={`
                          ${(info.value.includes("@") ||
                              info.value.includes("+33")) &&
                            "hover:text-[#fbbf24] transition-colors cursor-pointer"
                            }
                          `}
                          {...((info.value.includes("@") || info.value.includes("+33")) && {
                            "data-tooltip-id": `tooltip_infos_${index}`,
                            "data-tooltip-content": "Copier dans le presse-papiers"
                          })}
                        >
                          {info.value}
                        </span>
                      </p>
                      <Tooltip id={`tooltip_infos_${index}`} />
                    </>
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
          <div className="absolute right-4 lg:right-auto lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#60a5fa] via-[#fbbf24] to-[#60a5fa]" />

          {education.map((edu, index) => (
            <div
              key={index}
              ref={educationRefs[edu.year]}
              className={`relative mb-12 md:mb-16 w-full pr-10 text-left ${index % 2 === 0
                ? "lg:w-1/2 lg:pr-12 lg:mr-auto lg:text-right"
                : "lg:w-1/2 lg:pl-12 lg:pr-0 lg:ml-auto lg:text-left"
                }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-0 right-[0.5rem] lg:right-auto w-4 h-4 bg-[#fbbf24] rounded-full border-4 border-[#0a0e27] ${index % 2 === 0 ? "xl:-right-2" : "xl:-left-2"
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Carousel
            opts={{
              align: "start",
            }}
            className="2xl:w-full w-11/12 mx-auto"
          >
            <CarouselContent>
          {projectsFavorites.map((project, projectIndex) => (
            <CarouselItem
                  key={projectIndex}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: projectIndex * 0.1,
                    }}
                    className="h-full"
                  >
              <ProjectCard
                project={project}
                cardClassName="bg-[#141b3d] border-[#fbbf24]/20 overflow-hidden h-full pt-0 hover:border-[#60a5fa]/50 transition-all duration-300 group"
                imageClassName="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  imageOverlayClassName="absolute inset-0 bg-gradient-to-t from-[#141b3d] via-[#141b3d]/40 to-transparent"
                showFavoriteBadge
                      showOverlayLinks
                      enableDescriptionToggle
                      descriptionMaxChars={400}
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex 2xl:-left-24 lg:-left-16 md:-left-12 bg-[#141b3d] border-[#60a5fa]/30 text-[#60a5fa] hover:bg-[#60a5fa]/10 hover:border-[#fbbf24] hover:text-[#fbbf24]" /                      >
                        <CarouselNext className="hidden md:flex 2xl:-right-24 lg:-right-16 md:-right-12 bg-[#141b3d] border-[#60a5fa]/30 text-[#60a5fa] hover:bg-[#60a5fa]/10 hover:border-[#fbbf24] hover:text-[#fbbf24]" />

            <div className="flex md:hidden justify-center mt-4 gap-4">
              <CarouselPrevious className="bg-[#141b3d] border-[#60a5fa]/30 text-[#60a5fa] hover:bg-[#60a5fa]/10 hover:border-[#fbbf24] hover:text-[#fbbf24]" />
              <CarouselNext className="bg-[#141b3d] border-[#60a5fa]/30 text-[#60a5fa] hover:bg-[#60a5fa]/10 hover:border-[#fbbf24] hover:text-[#fbbf24]" />
            </div>
          </Carousel>
        </motion.div>

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
