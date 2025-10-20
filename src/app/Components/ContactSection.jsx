import React, { useState } from "react";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 3000);
  };

  const handleFocus = (field) => {
    setIsFocused({ ...isFocused, [field]: true });
  };

  const handleBlur = (field) => {
    setIsFocused({ ...isFocused, [field]: false });
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* En-tête */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#f5e6d3] mb-4 tracking-tight animate-fadeIn">
          Contactez-<span className="text-[#fbbf24]">moi</span>
        </h1>
        <p className="text-[#f5e6d3]/70 text-lg max-w-2xl mx-auto animate-fadeIn">
          Une approche agile pour tester les hypothèses et se connecter avec les
          besoins de votre audience, tôt et souvent.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Formulaire */}
        <div className="lg:col-span-2">
          <div className="bg-[#141b3d]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#1e2a5e]/30 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-16 animate-fadeIn">
                <CheckCircle2 className="w-20 h-20 text-[#fbbf24] mx-auto mb-6 animate-bounce" />
                <h3 className="text-3xl font-bold text-[#f5e6d3] mb-4">
                  Message envoyé !
                </h3>
                <p className="text-[#f5e6d3]/70 text-lg">
                  Je vous répondrai dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Prénom */}
                  <div className="group">
                    <label className="block text-[#f5e6d3] font-medium mb-2 transition-colors duration-300 group-hover:text-[#fbbf24]">
                      Prénom
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onFocus={() => handleFocus("firstName")}
                      onBlur={() => handleBlur("firstName")}
                      placeholder="Bonnie"
                      required
                      className={`w-full px-4 py-3 bg-[#1e2a5e]/30 border rounded-xl text-[#f5e6d3] placeholder-[#f5e6d3]/40 focus:outline-none transition-all duration-300 ${
                        isFocused.firstName
                          ? "border-[#fbbf24] shadow-lg shadow-[#fbbf24]/20 scale-105"
                          : "border-[#1e2a5e]/50 hover:border-[#1e2a5e]"
                      }`}
                    />
                  </div>

                  {/* Nom */}
                  <div className="group">
                    <label className="block text-[#f5e6d3] font-medium mb-2 transition-colors duration-300 group-hover:text-[#fbbf24]">
                      Nom
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onFocus={() => handleFocus("lastName")}
                      onBlur={() => handleBlur("lastName")}
                      placeholder="Green"
                      required
                      className={`w-full px-4 py-3 bg-[#1e2a5e]/30 border rounded-xl text-[#f5e6d3] placeholder-[#f5e6d3]/40 focus:outline-none transition-all duration-300 ${
                        isFocused.lastName
                          ? "border-[#fbbf24] shadow-lg shadow-[#fbbf24]/20 scale-105"
                          : "border-[#1e2a5e]/50 hover:border-[#1e2a5e]"
                      }`}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="group">
                    <label className="block text-[#f5e6d3] font-medium mb-2 transition-colors duration-300 group-hover:text-[#fbbf24]">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#f5e6d3]/40 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus("email")}
                        onBlur={() => handleBlur("email")}
                        placeholder="name@example.com"
                        required
                        className={`w-full pl-12 pr-4 py-3 bg-[#1e2a5e]/30 border rounded-xl text-[#f5e6d3] placeholder-[#f5e6d3]/40 focus:outline-none transition-all duration-300 ${
                          isFocused.email
                            ? "border-[#fbbf24] shadow-lg shadow-[#fbbf24]/20 scale-105"
                            : "border-[#1e2a5e]/50 hover:border-[#1e2a5e]"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Téléphone */}
                  <div className="group">
                    <label className="block text-[#f5e6d3] font-medium mb-2 transition-colors duration-300 group-hover:text-[#fbbf24]">
                      Téléphone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#f5e6d3]/40 w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => handleFocus("phone")}
                        onBlur={() => handleBlur("phone")}
                        placeholder="+33 6 12 34 56 78"
                        className={`w-full pl-12 pr-4 py-3 bg-[#1e2a5e]/30 border rounded-xl text-[#f5e6d3] placeholder-[#f5e6d3]/40 focus:outline-none transition-all duration-300 ${
                          isFocused.phone
                            ? "border-[#fbbf24] shadow-lg shadow-[#fbbf24]/20 scale-105"
                            : "border-[#1e2a5e]/50 hover:border-[#1e2a5e]"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-[#f5e6d3] font-medium mb-2 transition-colors duration-300 group-hover:text-[#fbbf24]">
                    Votre message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={() => handleBlur("message")}
                    rows="6"
                    placeholder="Laissez un message..."
                    required
                    className={`w-full px-4 py-3 bg-[#1e2a5e]/30 border rounded-xl text-[#f5e6d3] placeholder-[#f5e6d3]/40 focus:outline-none resize-none transition-all duration-300 ${
                      isFocused.message
                        ? "border-[#fbbf24] shadow-lg shadow-[#fbbf24]/20 scale-[1.02]"
                        : "border-[#1e2a5e]/50 hover:border-[#1e2a5e]"
                    }`}
                  />
                </div>

                {/* Legal */}
                <p className="text-[#f5e6d3]/50 text-sm">
                  En soumettant ce formulaire, vous acceptez nos{" "}
                  <span className="text-[#fbbf24] hover:text-[#60a5fa] transition-colors cursor-pointer">
                    conditions générales
                  </span>{" "}
                  et notre{" "}
                  <span className="text-[#fbbf24] hover:text-[#60a5fa] transition-colors cursor-pointer">
                    politique de confidentialité
                  </span>
                  .
                </p>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="group w-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-[#0a0e27] font-semibold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-[#fbbf24]/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                >
                  <span className="text-lg">Envoyer le message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Informations Contact */}
        <div className="space-y-6">
          {/* Entreprise */}
          <div className="bg-[#141b3d]/40 backdrop-blur-sm rounded-2xl p-6 border border-[#1e2a5e]/30 shadow-2xl hover:border-[#fbbf24]/30 transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#fbbf24]/10 rounded-xl group-hover:bg-[#fbbf24]/20 transition-colors duration-300">
                <Building2 className="w-6 h-6 text-[#fbbf24]" />
              </div>
              <h3 className="text-xl font-bold text-[#f5e6d3]">Informations</h3>
            </div>
            <div className="text-[#f5e6d3]/70 space-y-2">
              <p className="font-semibold text-[#f5e6d3]">Votre Entreprise</p>
              <p>SIRET: XXX XXX XXX XXXXX</p>
            </div>
          </div>

          {/* Adresse */}
          <div className="bg-[#141b3d]/40 backdrop-blur-sm rounded-2xl p-6 border border-[#1e2a5e]/30 shadow-2xl hover:border-[#fbbf24]/30 transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#60a5fa]/10 rounded-xl group-hover:bg-[#60a5fa]/20 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-[#60a5fa]" />
              </div>
              <h3 className="text-xl font-bold text-[#f5e6d3]">Adresse</h3>
            </div>
            <div className="text-[#f5e6d3]/70 space-y-1">
              <p>Paris, France</p>
              <p>123 Rue de la Tech</p>
              <p>Code postal: 75001</p>
            </div>
          </div>

          {/* Téléphone */}
          <div className="bg-[#141b3d]/40 backdrop-blur-sm rounded-2xl p-6 border border-[#1e2a5e]/30 shadow-2xl hover:border-[#fbbf24]/30 transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#fbbf24]/10 rounded-xl group-hover:bg-[#fbbf24]/20 transition-colors duration-300">
                <Phone className="w-6 h-6 text-[#fbbf24]" />
              </div>
              <h3 className="text-xl font-bold text-[#f5e6d3]">Appelez-nous</h3>
            </div>
            <p className="text-[#f5e6d3]/70 mb-3">
              Contactez-nous pour échanger. Nous sommes toujours disponibles
              pour vous aider.
            </p>
            <button
              onClick={() => (window.location.href = "tel:+33123456789")}
              className="text-[#60a5fa] text-lg font-semibold hover:text-[#fbbf24] transition-colors duration-300"
            >
              +33 1 23 45 67 89
            </button>
          </div>
        </div>
      </div>
      {/* Decorative Elements */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-[#fbbf24]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-[#60a5fa]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
    </div>
  );
}
