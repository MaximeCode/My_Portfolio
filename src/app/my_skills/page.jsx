"use client";

import Base from "../Components/Front/Base";
import Title from "../Components/Front/Title";
import SkillsTabs from "../Components/SkillsTabs";

export default function MySkillspage() {
  return (
    <Base>
      <Title text="Mes compétences" />
      <p className="text-[#f5e6d3]/70 text-lg max-w-2xl mx-auto text-center">
        Découvrez les technologies et outils que je maîtrise pour créer des
        expériences digitales exceptionnelles
      </p>
      <SkillsTabs />
    </Base>
  );
}
