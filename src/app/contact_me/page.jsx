"use client";

import { useState } from "react";
import { Linkedin, Send } from "lucide-react";
import { Github } from "lucide-react";
import Title from "@/app/Components/Front/Title";
import Base from "@/app/Components/Front/Base";
import { classNameForIcon } from "@/app/layout";
import Btn from "../Components/Front/Btn";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pour l'instant, on simule l'envoi du formulaire
    console.log("Formulaire soumis:", formData);
    alert("Message envoyé avec succès !");
    // Réinitialiser le formulaire
    setFormData({
      email: "",
      fullName: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const mySocialMedias = [
    {
      name: "LinkedIn",
      icon: (
        <Linkedin className="w-12 h-12 text-[#60a5fa] transition-all duration-500 group-hover:text-[#fbbf24] relative z-10" />
      ),
      url: "https://linkedin.com/in/maximebaude/",
    },
    {
      name: "GitHub",
      icon: (
        <Github className="w-12 h-12 text-[#60a5fa] transition-all duration-500 group-hover:text-[#fbbf24] relative z-10" />
      ),
      url: "https://github.com/maximecode",
    },
  ];

  return (
    <Base>
      <Title text="Me contacter" />
      <div className="text-[#f5e6d3]/70 max-w-4xl mx-auto text-lg mb-10">
        <p>Une question ? Un projet ?</p>
        <p>
          N'hésitez pas à me contacter via ce formulaire. Je vous répondrai dans
          les plus brefs délais.
        </p>
      </div>

      {/* Grid avec formulaire et réseaux sociaux */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Colonne gauche - Formulaire de contact */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email et Nom complet sur la même ligne pour desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-[#f5e6d3]">
                Email <span className="text-[#fbbf24]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#141b3d] border border-[#60a5fa]/30 rounded-lg text-[#f5e6d3] placeholder-[#f5e6d3]/40 focus:outline-none focus:border-[#fbbf24] focus:ring-2 focus:ring-[#fbbf24]/20 transition-all duration-300"
                placeholder="votre.email@exemple.com"
              />
            </div>

            {/* Nom complet */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-[#f5e6d3]">
                Nom complet <span className="text-[#fbbf24]">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#141b3d] border border-[#60a5fa]/30 rounded-lg text-[#f5e6d3] placeholder-[#f5e6d3]/40 focus:outline-none focus:border-[#fbbf24] focus:ring-2 focus:ring-[#fbbf24]/20 transition-all duration-300"
                placeholder="Votre nom et prénom"
              />
            </div>
          </div>

          {/* Le sujet sera le même pour toutes les demandes */}
          {/* Sujet
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-[#f5e6d3]">
              Sujet <span className="text-[#fbbf24]">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#141b3d] border border-[#60a5fa]/30 rounded-lg text-[#f5e6d3] placeholder-[#f5e6d3]/40 focus:outline-none focus:border-[#fbbf24] focus:ring-2 focus:ring-[#fbbf24]/20 transition-all duration-300"
              placeholder="Objet de votre message"
            />
          </div> */}

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-[#f5e6d3]">
              Message <span className="text-[#fbbf24]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={8}
              className="w-full px-4 py-3 bg-[#141b3d] border border-[#60a5fa]/30 rounded-lg text-[#f5e6d3] placeholder-[#f5e6d3]/40 focus:outline-none focus:border-[#fbbf24] focus:ring-2 focus:ring-[#fbbf24]/20 transition-all duration-300 resize-none"
              placeholder="Écrivez votre message ici..."
            />
          </div>

          {/* Bouton d'envoi */}
          <div className="flex justify-center pt-4">
            <Btn
              icon={<Send className={classNameForIcon} />}
              text="Envoyer le message"
              href={"#"}
              type="submit"
            />
          </div>
        </form>

        {/* Colonne droite - Réseaux sociaux */}
        <div className="flex flex-col justify-center h-full col-span-1">
          <p className="text-[#f5e6d3] mb-8 text-2xl text-center">
            Retrouvez-moi également sur
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            {mySocialMedias.map((media) => (
              <a
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                key={media.name}
                style={{ minWidth: 140, maxWidth: 160, width: "150px" }} // For robustness
              >
                <div className="flex flex-col items-center justify-center w-full relative overflow-hidden rounded-xl bg-gradient-to-br from-[#141b3d] to-[#0a0e27] border border-[#60a5fa]/30 p-8 transition-all duration-500 hover:scale-110 hover:border-[#fbbf24] hover:shadow-2xl hover:shadow-[#fbbf24]/30 min-w-[140px] max-w-[160px]">
                  {media.icon}
                  <p className="mt-4 text-[#60a5fa] group-hover:text-secondary text-sm transition-all duration-300 delay-100 relative z-10">
                    {media.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Base>
  );
}
