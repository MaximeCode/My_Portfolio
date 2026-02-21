"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Title from "@/app/Components/Front/Title";
import Base from "@/app/Components/Front/Base";
import { classNameForIcon } from "@/app/layout";
import Btn from "../../Components/Front/Btn";

import { mySocialMedias } from "@/app/data/contact.data";
import ContactSection from "@/app/Components/ContactSection";

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

  return (
    <Base>
      <Title text="Me contacter" />
      <ContactSection />
    </Base>
  );
}
