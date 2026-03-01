"use client";

import Title from "@/app/Components/Front/Title";
import Base from "@/app/Components/Front/Base";

import ContactSection from "@/app/Components/ContactSection";

export default function ContactPage() {
  return (
    <Base>
      <Title text="Me contacter" />
      <ContactSection />
    </Base>
  );
}
