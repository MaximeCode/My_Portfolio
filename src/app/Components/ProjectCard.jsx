"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, Star } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectCard({
  project,
  cardClassName = "",
  imageClassName = "w-full h-full object-cover transition-transform duration-500",
  imageOverlayClassName = "absolute inset-0 bg-gradient-to-t from-[#141b3d] via-[#141b3d]/40 to-transparent",
  showFavoriteBadge = false,
  showInProgressBadge = false,
  inProgressBadgeText = "EN COURS DE DÉVELOPPEMENT",
  showOverlayLinks = false,
  titleAction = null,
  enableDescriptionToggle = false,
  descriptionMaxChars = 400,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongDescription = project.description.length > descriptionMaxChars;
  const canToggle = enableDescriptionToggle && isLongDescription;
  const descriptionPreview = canToggle
    ? `${project.description.slice(0, descriptionMaxChars)}...`
    : project.description;

  return (
    <Card className={cardClassName}>
      <div className="relative h-48 overflow-hidden">
        <Image
          src={`/img/${project.image}.png`}
          alt={project.title}
          width={1080}
          height={500}
          className={imageClassName}
        />
        <div className={imageOverlayClassName} />

        {showFavoriteBadge && project.fav && (
          <span className="p-2 bg-[#fbbf24] text-[#0a0e27] rounded-full absolute top-3 left-3 z-10">
            <Star className="w-4 h-4" />
          </span>
        )}

        {showInProgressBadge && project.in_progress && (
          <Badge
            variant="outline"
            className="bg-[#60a5fa] text-white text-xs border-[#60a5fa] absolute top-3 right-3 z-10"
          >
            {inProgressBadgeText}
          </Badge>
        )}

        {showOverlayLinks && (
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
        )}
      </div>

      <CardHeader>
        <CardTitle
          className={`text-[#f5e6d3] ${titleAction ? "flex items-center justify-between" : ""
            }`}
        >
          {project.title}
          {titleAction}
        </CardTitle>

        <CardDescription
          className={`relative text-[#f5e6d3]/70 ${canToggle ? "cursor-pointer" : ""}`}
          onClick={() => canToggle && setIsExpanded((prev) => !prev)}
        >
          {!isExpanded ? descriptionPreview : project.description}
          {!isExpanded && canToggle && (
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#141b3d] to-transparent" />
          )}
        </CardDescription>

        {canToggle && (
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="mt-2 text-sm font-medium text-[#60a5fa] hover:text-[#fbbf24] transition-colors"
          >
            {isExpanded ? "Voir moins" : "Voir plus"}
          </button>
        )}
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
  );
}
