"use client";

import { useState } from "react";
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
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, MailPlus, Star } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Btn from "@/app/Components/Front/Btn";

import { projectsByTechnology } from "@/app/data/projects.data";

const DESCRIPTION_MAX_CHARS = 400;

export default function MyProjectsPage() {
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (key) => {
    setExpandedDescriptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Base>
      <Title text="Mes réalisations" />
      <p className="text-[#f5e6d3]/70 max-w-2xl mx-auto">
        Découvrez une sélection de mes projets, organisés par technologie.
        Chaque projet représente un défi unique et une opportunité
        d'apprentissage.
      </p>

      {/* Technology Sections */}
      <div className="space-y-20 mt-12">
        {projectsByTechnology.map((section, sectionIndex) => (
          <motion.div
            key={section.technology}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: sectionIndex * 0.2 }}
          >
            {/* Technology Title */}
            <div className="mb-8">
              <h2 className="text-[#60a5fa] flex items-center gap-3 text-2xl">
                <span className="size-10">{section.icon}</span>
                {section.technology}
              </h2>
              <div className="mt-2 h-1 w-24 bg-gradient-to-r from-[#fbbf24] to-transparent rounded-full" />
            </div>

            {/* Carousel */}
            <Carousel
              opts={{
                align: "start",
              }}
              className="2xl:w-full w-11/12 mx-auto"
            >
              <CarouselContent>
                {section.projects.map((project, projectIndex) => (
                  (() => {
                    const descriptionKey = `${section.technology}-${projectIndex}`;
                    const isExpanded = Boolean(expandedDescriptions[descriptionKey]);
                    const isLongDescription =
                      project.description.length > DESCRIPTION_MAX_CHARS;
                    const descriptionPreview = isLongDescription
                      ? `${project.description.slice(0, DESCRIPTION_MAX_CHARS)}...`
                      : project.description;

                    return (
                      <CarouselItem
                        key={projectIndex}
                        className="md:basis-1/2 lg:basis-1/3"
                      >
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: sectionIndex * 0.2 + projectIndex * 0.1,
                          }}
                          className="h-full"
                        >
                          <Card className="bg-[#141b3d] border-[#fbbf24]/20 overflow-hidden h-full pt-0 hover:border-[#60a5fa]/50 transition-all duration-300 group">
                            <div className="relative h-48 overflow-hidden">
                              <Image
                                src={`/img/${project.image}.png`}
                                alt={project.title}
                                width={1080}
                                height={500}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#141b3d] via-[#141b3d]/40 to-transparent" />
                              {project.fav && (
                                <span className="p-2 bg-[#fbbf24] text-[#0a0e27] rounded-full absolute top-3 left-3 z-10">
                                  <Star className="w-4 h-4" />
                                </span>
                              )}
                              {/* Links Overlay */}
                              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {project.link && (
                                  <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-[#fbbf24] text-[#0a0e27] rounded-full hover:bg-[#60a5fa] transition-colors"
                                  >
                                    <ExternalLink className="w-4 h-4" />
                                  </a>
                                )}
                                {project.github && (
                                  <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-[#fbbf24] text-[#0a0e27] rounded-full hover:bg-[#60a5fa] transition-colors"
                                  >
                                    <Github className="w-4 h-4" />
                                  </a>
                                )}
                              </div>
                            </div>
                            <CardHeader>
                              <CardTitle className="text-[#f5e6d3]">
                                {project.title}
                              </CardTitle>
                              {/* <div> */}
                              <CardDescription
                                className={`relative text-[#f5e6d3]/70 ${isLongDescription ? "cursor-pointer" : ""
                                  }`}
                                onClick={() =>
                                  isLongDescription && toggleDescription(descriptionKey)
                                }
                              >
                                {!isExpanded ? descriptionPreview : project.description}
                                {!isExpanded && isLongDescription && (
                                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#141b3d] to-transparent" />
                                )}
                              </CardDescription>
                              {isLongDescription && (
                                <button
                                  type="button"
                                  onClick={() => toggleDescription(descriptionKey)}
                                  className="mt-2 text-sm font-medium text-[#60a5fa] hover:text-[#fbbf24] transition-colors"
                                >
                                  {isExpanded ? "Voir moins" : "Voir plus"}
                                </button>
                              )}
                              {/* </div> */}
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
                        </motion.div>
                      </CarouselItem>
                    );
                  })()
                ))}
              </CarouselContent>
              {/* Desktop arrows (aside) */}
              <CarouselPrevious className="hidden md:flex 2xl:-left-24 lg:-left-16 md:-left-12 bg-[#141b3d] border-[#60a5fa]/30 text-[#60a5fa] hover:bg-[#60a5fa]/10 hover:border-[#fbbf24] hover:text-[#fbbf24]" />
              <CarouselNext className="hidden md:flex 2xl:-right-24 lg:-right-16 md:-right-12 bg-[#141b3d] border-[#60a5fa]/30 text-[#60a5fa] hover:bg-[#60a5fa]/10 hover:border-[#fbbf24] hover:text-[#fbbf24]" />

              {/* Mobile arrows (below carousel) */}
              <div className="flex md:hidden justify-center mt-4 gap-4">
                <CarouselPrevious className="bg-[#141b3d] border-[#60a5fa]/30 text-[#60a5fa] hover:bg-[#60a5fa]/10 hover:border-[#fbbf24] hover:text-[#fbbf24]" />
                <CarouselNext className="bg-[#141b3d] border-[#60a5fa]/30 text-[#60a5fa] hover:bg-[#60a5fa]/10 hover:border-[#fbbf24] hover:text-[#fbbf24]" />
              </div>
            </Carousel>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-20 text-center"
      >
        <div className="bg-gradient-to-r from-[#141b3d] to-[#0a0e27] rounded-2xl p-8 md:p-12 border border-[#fbbf24]/20">
          <h3 className="text-3xl font-bold text-[#fbbf24] mb-4">
            Intéressé par mes services ?
          </h3>
          <p className="text-[#f5e6d3] text-lg mb-8 max-w-2xl mx-auto">
            Ces projets ne sont qu'un aperçu de ce que je peux créer.
            <br />
            <span className="text-[#60a5fa]">
              Parlons de votre prochain projet ! Ensemble, nous pourrons le
              concrétiser.
            </span>
          </p>
          <Btn
            icon={<MailPlus className={classNameForIcon} />}
            href="/contact_me"
            text="Discutons de votre projet"
            size="md"
          />
        </div>
      </motion.div>
    </Base>
  );
}
