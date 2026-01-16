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
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, MailPlus } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import Btn from "@/app/Components/Front/Btn";

export default function MyProjectsPage() {
  const projectsByTechnology = [
    {
      technology: "Next.js & React",
      icon: <ReactLight />,
      projects: [
        {
          title: "Solirun",
          description:
            "Application e-commerce complète avec panier, paiements, gestion des stocks et interface d'administration avancée.",
          image:
            "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NjMwOTAzOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
          link: "https://example.com",
          github: "https://github.com",
        },
        {
          title: "Dashboard Analytics",
          description:
            "Tableau de bord interactif avec graphiques en temps réel, filtres avancés et export de données.",
          image:
            "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYzMDI2MDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          technologies: ["React", "Chart.js", "Material-UI", "API REST"],
          link: "https://example.com",
        },
        {
          title: "Portfolio Créatif",
          description:
            "Site portfolio avec animations avancées, galerie interactive et formulaire de contact personnalisé.",
          image:
            "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYzMDI2MDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          technologies: ["React", "Motion", "Three.js", "GSAP"],
          github: "https://github.com",
        },
        {
          title: "Application Météo",
          description:
            "Application météo avec prévisions détaillées, géolocalisation et notifications push.",
          image:
            "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYzMDI2MDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          technologies: ["React", "OpenWeather API", "PWA", "Service Workers"],
          link: "https://example.com",
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
        {
          title: "Système de Gestion CRM",
          description:
            "Backend pour CRM avec gestion clients, pipeline de ventes et automatisation marketing.",
          image:
            "https://images.unsplash.com/photo-1641156803026-0b819059b04d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrZW5kJTIwc2VydmVyJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjMwNzc4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          technologies: ["Node.js", "PostgreSQL", "Redis", "Bull Queue"],
          link: "https://example.com",
        },
        {
          title: "Microservices Architecture",
          description:
            "Architecture microservices pour application de réservation avec messaging asynchrone.",
          image:
            "https://images.unsplash.com/photo-1641156803026-0b819059b04d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrZW5kJTIwc2VydmVyJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjMwNzc4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          technologies: ["Node.js", "Docker", "RabbitMQ", "Kubernetes"],
          github: "https://github.com",
        },
      ],
    },
    {
      technology: "Full-Stack",
      icon: "🚀",
      projects: [
        {
          title: "Plateforme de Réservation",
          description:
            "Système complet de réservation en ligne avec calendrier, paiements et notifications.",
          image:
            "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYzMDI2MDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
          link: "https://example.com",
        },
        {
          title: "Blog Multi-utilisateurs",
          description:
            "Plateforme de blogging avec éditeur riche, commentaires, likes et système d'abonnement.",
          image:
            "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYzMDI2MDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          technologies: ["Next.js", "MongoDB", "NextAuth", "AWS S3"],
          github: "https://github.com",
        },
      ],
    },
  ];

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
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {section.projects.map((project, projectIndex) => (
                  <CarouselItem
                    key={projectIndex}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
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
                            src={project.image || "/img/hp_solirun.png"}
                            alt={project.title}
                            width={1080}
                            height={500}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#141b3d] via-[#141b3d]/40 to-transparent" />

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
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-[#141b3d] border-[#60a5fa]/30 text-[#60a5fa] hover:bg-[#60a5fa]/10 hover:border-[#fbbf24] hover:text-[#fbbf24]" />
              <CarouselNext className="hidden md:flex -right-12 bg-[#141b3d] border-[#60a5fa]/30 text-[#60a5fa] hover:bg-[#60a5fa]/10 hover:border-[#fbbf24] hover:text-[#fbbf24]" />
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
