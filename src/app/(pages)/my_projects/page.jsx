"use client";

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
import { MailPlus } from "lucide-react";
import { motion } from "motion/react";
import Btn from "@/app/Components/Front/Btn";
import ProjectCard from "@/app/Components/ProjectCard";

import { projectsByTechnology } from "@/app/data/projects.data";

export default function MyProjectsPage() {
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
                      <ProjectCard
                        project={project}
                        index={projectIndex}
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
