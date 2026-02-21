import React, { useState } from "react";
import { mySocialMedias } from "@/app/data/contact.data";
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
      <div className="text-[#f5e6d3]/70 max-w-4xl mx-auto text-lg mb-10">
        <p>Une question ? Un projet ?</p>
        <p>
          N'hésitez pas à me contacter via ce formulaire. Je vous répondrai dans
          les plus brefs délais.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Formulaire */}
        <div className="lg:col-span-2">
          <div className="h-full bg-bg-accent/40 backdrop-blur-sm rounded-2xl p-8 border border-muted/30 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-16 animate-fadeIn">
                <CheckCircle2 className="w-20 h-20 text-secondary mx-auto mb-6 animate-bounce" />
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Message envoyé !
                </h3>
                <p className="text-foreground/70 text-lg">
                  Je vous répondrai dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Prénom */}
                  <div className="group">
                    <label htmlFor="firstName" className="block text-foreground font-medium mb-2 transition-colors duration-300 group-hover:text-secondary">
                      Prénom
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onFocus={() => handleFocus("firstName")}
                      onBlur={() => handleBlur("firstName")}
                      placeholder="Bill"
                      required
                      className={`w-full px-4 py-3 bg-muted/30 border rounded-xl text-foreground placeholder-foreground/40 focus:outline-none transition-all duration-300 ${isFocused.firstName
                        ? "border-secondary shadow-lg shadow-secondary/20 scale-105"
                        : "border-muted/50 hover:border-muted"
                        }`}
                    />
                  </div>

                  {/* Nom */}
                  <div className="group">
                    <label htmlFor="lastName" className="block text-foreground font-medium mb-2 transition-colors duration-300 group-hover:text-secondary">
                      Nom
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onFocus={() => handleFocus("lastName")}
                      onBlur={() => handleBlur("lastName")}
                      placeholder="Gates"
                      required
                      className={`w-full px-4 py-3 bg-muted/30 border rounded-xl text-foreground placeholder-foreground/40 focus:outline-none transition-all duration-300 ${isFocused.lastName
                        ? "border-secondary shadow-lg shadow-secondary/20 scale-105"
                        : "border-muted/50 hover:border-muted"
                        }`}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="group">
                    <label htmlFor="email" className="block text-foreground font-medium mb-2 transition-colors duration-300 group-hover:text-secondary">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus("email")}
                        onBlur={() => handleBlur("email")}
                        placeholder="bill.gates@microsoft.com"
                        required
                        className={`w-full pl-12 pr-4 py-3 bg-muted/30 border rounded-xl text-foreground placeholder-foreground/40 focus:outline-none transition-all duration-300 ${isFocused.email
                          ? "border-secondary shadow-lg shadow-secondary/20 scale-105"
                          : "border-muted/50 hover:border-muted"
                          }`}
                      />
                    </div>
                  </div>

                  {/* Téléphone */}
                  <div className="group">
                    <label htmlFor="phone" className="block text-foreground font-medium mb-2 transition-colors duration-300 group-hover:text-secondary">
                      Téléphone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => handleFocus("phone")}
                        onBlur={() => handleBlur("phone")}
                        placeholder="+33 6 12 34 56 78"
                        className={`w-full pl-12 pr-4 py-3 bg-muted/30 border rounded-xl text-foreground placeholder-foreground/40 focus:outline-none transition-all duration-300 ${isFocused.phone
                          ? "border-secondary shadow-lg shadow-secondary/20 scale-105"
                          : "border-muted/50 hover:border-muted"
                          }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label htmlFor="message" className="block text-foreground font-medium mb-2 transition-colors duration-300 group-hover:text-secondary">
                    Votre message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={() => handleBlur("message")}
                    rows="6"
                    placeholder="Laissez un message..."
                    required
                    className={`w-full px-4 py-3 bg-muted/30 border rounded-xl text-foreground placeholder-foreground/40 focus:outline-none resize-none transition-all duration-300 ${isFocused.message
                      ? "border-secondary shadow-lg shadow-secondary/20 scale-[1.02]"
                      : "border-muted/50 hover:border-muted"
                      }`}
                  />
                </div>

                {/* Legal */}
                {/* <p className="text-foreground/50 text-sm">
                  En soumettant ce formulaire, vous acceptez nos{" "}
                  <span className="text-secondary hover:text-primary transition-colors cursor-pointer">
                    conditions générales
                  </span>{" "}
                  et notre{" "}
                  <span className="text-secondary hover:text-primary transition-colors cursor-pointer">
                    politique de confidentialité
                  </span>
                  .
                </p> */}

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="group w-full bg-gradient-to-r from-secondary to-secondary-accent text-background font-semibold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-secondary/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                >
                  <span className="text-lg">Envoyer le message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Informations Contact */}
        <div className="space-y-6 flex flex-col justify-between h-full">
          {/* Freelance */}
          <div className="bg-bg-accent/40 backdrop-blur-sm rounded-2xl p-6 border border-muted/30 shadow-2xl hover:border-secondary/30 transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors duration-300">
                <Building2 className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Statut professionnel
              </h3>
            </div>
            <div className="text-foreground/70 space-y-2">
              <p>Freelance</p>
            </div>
          </div>

          {/* Localisation */}
          <div className="bg-bg-accent/40 backdrop-blur-sm rounded-2xl p-6 border border-muted/30 shadow-2xl hover:border-secondary/30 transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Localisation</h3>
            </div>
            <div className="text-foreground/70 space-y-1">
              <ul>
                <li>Orléans (45)</li>
                <li>Chartres (28)</li>
                <li>France</li>
              </ul>
            </div>
          </div>

          {/* Téléphone */}
          <div className="bg-bg-accent/40 backdrop-blur-sm rounded-2xl p-6 border border-muted/30 shadow-2xl hover:border-secondary/30 transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors duration-300">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Appelez-moi
              </h3>
            </div>
            <p className="text-foreground/70 mb-3">
              Contactez-moi pour échanger. Je suis toujours disponible pour vous aider.
            </p>
            <a
              className="text-primary text-lg font-semibold hover:text-secondary transition-colors duration-300"
              href="tel:+33762171177"
            >
              07 62 17 11 77
            </a>
          </div>
        </div>
      </div>

      <div className=" mt-10 flex flex-col justify-center h-full col-span-1">
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
      {/* Decorative Elements */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
    </div>
  );
}
