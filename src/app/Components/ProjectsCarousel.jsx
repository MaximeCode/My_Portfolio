"use client";

import { motion } from "motion/react";
import ProjectCard from "@/app/Components/ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function ProjectsCarousel({
  projects = [],
  getDelay = (_, projectIndex) => projectIndex * 0.1,
}) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="2xl:w-full w-11/12 mx-auto"
    >
      <CarouselContent>
        {projects.map((project, projectIndex) => (
          <CarouselItem
            key={projectIndex}
            className="md:basis-1/2 lg:basis-1/3"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: getDelay(project, projectIndex),
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
              />
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="hidden md:flex 2xl:-left-24 lg:-left-16 md:-left-12 bg-[#141b3d] border-[#60a5fa]/30 text-[#60a5fa] hover:bg-[#60a5fa]/10 hover:border-[#fbbf24] hover:text-[#fbbf24]" />
      <CarouselNext className="hidden md:flex 2xl:-right-24 lg:-right-16 md:-right-12 bg-[#141b3d] border-[#60a5fa]/30 text-[#60a5fa] hover:bg-[#60a5fa]/10 hover:border-[#fbbf24] hover:text-[#fbbf24]" />

      <div className="flex md:hidden justify-center mt-4 gap-4">
        <CarouselPrevious className="bg-[#141b3d] border-[#60a5fa]/30 text-[#60a5fa] hover:bg-[#60a5fa]/10 hover:border-[#fbbf24] hover:text-[#fbbf24]" />
        <CarouselNext className="bg-[#141b3d] border-[#60a5fa]/30 text-[#60a5fa] hover:bg-[#60a5fa]/10 hover:border-[#fbbf24] hover:text-[#fbbf24]" />
      </div>
    </Carousel>
  );
}
