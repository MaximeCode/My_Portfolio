"use client";

import { classNameForIcon } from "@/app/layout";
import Title from "@/app/Components/Front/Title";
import Base from "@/app/Components/Front/Base";
import { MailPlus } from "lucide-react";
import { motion } from "motion/react";
import Btn from "@/app/Components/Front/Btn";
import ProjectsCarousel from "@/app/Components/ProjectsCarousel";

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
            <ProjectsCarousel
              projects={section.projects}
              getDelay={(_, projectIndex) =>
                sectionIndex * 0.2 + projectIndex * 0.1
              }
            />
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
