/**
 * Global site configuration.
 * Update these values to change your info across the whole app.
 * Note: Also update the LICENSE file (copyright line) when changing the name.
 */

export const siteOwner = {
  firstName: "Maxime",
  lastName: "BAUDE",
  fullName: "Maxime BAUDE",
};

/** CV file path (under /public). Used for download link and filename. */
export const cvPath = "/docs/CV-Maxime_BAUDE.pdf";

/** Contact info (legal, about, contact section). */
export const contact = {
  email: "contact.mbaude@gmail.com",
  /** Phone for tel: links (no spaces). */
  phoneHref: "+33762171177",
  /** Phone as displayed (spaces allowed). */
  phoneDisplay: "07 62 17 11 77",
  postalAddress: "À renseigner",
};

/** Social / external links. */
export const social = {
  githubUrl: "https://github.com/MaximeCode",
  linkedinUrl: "https://linkedin.com/in/maximebaude/",
  /** Repo used for "report issue" / portfolio repo link. */
  portfolioRepoUrl: "https://github.com/MaximeCode/My_Portfolio",
};

/** Legal (mentions légales). */
export const legal = {
  status: "Étudiant / Freelance",
  siretNumber: "À renseigner",
  lastUpdated: "À renseigner",
};

/** Location string (about page, etc.). */
export const location = "Orléans (45), Chartres (28) France";

/** Profile image paths (under /public). */
export const assets = {
  /** Small avatar (navbar). */
  avatarPath: "/img/ma_grosse_tete.jpg",
  /** Large hero portrait. */
  heroPortraitPath: "/img/Photo_BAUDE_Maxime_3_ma_grosse_tete.jpg",
}
