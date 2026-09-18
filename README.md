<div align="center">

# 🎯 Portfolio - Maxime BAUDE

### Modern Full-Stack Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](./LICENSE)

[Live Demo](https://maximebaude.com) • [Report Bug](https://github.com/MaximeCode/My_Portfolio/issues) • [Request Feature](https://github.com/MaximeCode/My_Portfolio/issues)

</div>

---

## 📖 About

This is my personal portfolio website, showcasing my journey as a full-stack developer. Built with cutting-edge technologies, it features a modern, responsive design with smooth animations and an intuitive user experience.

The portfolio highlights my skills, projects, and professional experience in web development, ranging from e-commerce solutions to complex web applications. It serves as a comprehensive overview of my capabilities in both frontend and backend development.

### ✨ Key Highlights

- **Modern Stack**: Built with Next.js 16, React 19, and TailwindCSS 4
- **Performance Optimized**: Turbopack for blazing-fast builds
- **Fully Responsive**: Mobile-first design approach
- **Animated UI**: Smooth transitions with GSAP and Framer Motion
- **Contact Integration**: Email functionality with Resend API
- **Analytics**: Integrated Vercel Analytics and Speed Insights
- **Dark/Light Mode**: Theme switching capabilities
- **SEO Optimized**: Structured for search engine visibility

---

## 🚀 Features

### 🏠 Home
- Animated hero section with typing effect
- Eye-catching call-to-actions
- Modern wave dividers for visual appeal
- Downloadable CV

### 👨‍💻 About Me
- Personal introduction and background
- Educational journey timeline
- Professional experience
- Personal information display with icons

### 💼 Projects
- Technology-categorized project showcase
- Interactive carousel navigation
- Project cards with:
  - Live demo links
  - GitHub repositories
  - Technology badges
  - Detailed descriptions
  - Featured project highlighting

### 🛠️ Skills
- Tabbed interface for different skill categories:
  - Frontend (React, Next.js, TailwindCSS, etc.)
  - Backend (Node.js, PHP, Symfony, MySQL, etc.)
  - Tools (Git, Docker, Vercel, etc.)
  - Languages (French, English, Spanish)
- Skill level indicators with visual progress bars
- Technology icons for quick recognition

### 📬 Contact
- Functional contact form
- Email integration with React Email templates
- Form validation
- Social media links (GitHub, LinkedIn)

### 📄 Legal Pages
- Privacy Policy (Politique de confidentialité)
- Legal Mentions (Mentions légales)
- GDPR compliant

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16.2 with App Router
- **UI Library**: React 19.2
- **Styling**: TailwindCSS 4.1, Flowbite
- **Components**: Radix UI, shadcn/ui components
- **Icons**: Lucide React, React Icons, Country Flag Icons
- **Animations**: GSAP, Framer Motion
- **Carousel**: Embla Carousel React

### Backend & Services
- **Email**: Resend API with React Email templates
- **Analytics**: Vercel Analytics & Speed Insights

### Development Tools
- **Build Tool**: Turbopack (Next.js experimental)
- **Linting**: ESLint
- **Package Manager**: npm
- **Version Control**: Git

### UI/UX Libraries
- **Utilities**: clsx, tailwind-merge, class-variance-authority
- **Tooltips**: React Tooltip
- **CSS Animations**: tw-animate-css

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 18.0 or higher
- npm, yarn, pnpm, or bun package manager

## 📁 Project Structure

```
tes_portfolio/
├── src/
│   ├── app/
│   │   ├── (pages)/              # Route groups
│   │   │   ├── about_me/         # About page
│   │   │   ├── contact_me/       # Contact page
│   │   │   ├── my_projects/      # Projects showcase
│   │   │   ├── my_skills/        # Skills display
│   │   │   ├── mentions-legales/ # Legal mentions
│   │   │   └── politique-confidentialite/ # Privacy policy
│   │   ├── api/
│   │   │   └── contact/          # Contact form API route
│   │   ├── Animation/            # Animation utilities
│   │   ├── Components/           # React components
│   │   │   ├── Front/            # Frontend-specific components
│   │   │   ├── HeroSection.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectsCarousel.jsx
│   │   │   ├── SkillsTabs.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   ├── PageTransition.jsx
│   │   │   └── ...
│   │   ├── data/                 # Site configuration & data
│   │   │   ├── site.config.js    # Global site settings
│   │   │   ├── projects.data.js  # Projects information
│   │   │   ├── skills.js         # Skills & technologies
│   │   │   ├── qui_suis_je.data.js # About me content
│   │   │   └── contact.data.js   # Contact information
│   │   ├── globals.css           # Global styles
│   │   ├── layout.js             # Root layout
│   │   └── page.js               # Home page
│   ├── components/
│   │   └── ui/                   # Reusable UI components
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       └── svgs/             # Custom SVG components
│   └── lib/
│       └── utils.ts              # Utility functions
├── public/
│   ├── docs/                     # Documents (CV)
│   └── img/                      # Images & assets
│       └── logo/                 # Technology logos
├── .env.local                    # Environment variables (not tracked)
├── .gitignore
├── components.json               # shadcn/ui configuration
├── eslint.config.mjs             # ESLint configuration
├── jsconfig.json                 # JavaScript configuration
├── LICENSE                       # MIT License
├── next.config.mjs               # Next.js configuration
├── package.json                  # Project dependencies
├── postcss.config.mjs            # PostCSS configuration
├── README.md                     # This file
└── tsconfig.json                 # TypeScript configuration
```

---

## 🚢 Deployment

### Vercel

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository into Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MaximeCode/My_Portfolio)

---

## 📜 Scripts

```bash
# Development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

---

## 🎨 Design Philosophy

This portfolio embraces:

- **Minimalism**: Clean, uncluttered interfaces
- **Accessibility**: WCAG-compliant design principles
- **Performance**: Optimized for speed and efficiency
- **Responsiveness**: Works seamlessly across all devices
- **User Experience**: Intuitive navigation and interactions
- **Modern Aesthetics**: Contemporary design trends

---

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Maxime BAUDE

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 📞 Contact

**Maxime BAUDE** - Full-Stack Developer

- 📧 Email: [contact.mbaude@gmail.com](mailto:contact.mbaude@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/maximebaude](https://linkedin.com/in/maximebaude/)
- 🐙 GitHub: [github.com/MaximeCode](https://github.com/MaximeCode)
- 📍 Location: Orléans (45), Chartres (28), France

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Vercel](https://vercel.com/) - Hosting & Analytics
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Lucide](https://lucide.dev/) - Beautiful icon library
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components

---

## 📊 Project Status

🟢 **Active Development** - Continuously improving and adding features

### Recent Updates

- ✅ Added new project: CLTO Badminton
- ✅ Migrated to Next.js 16 & React 19
- ✅ Upgraded to TailwindCSS 4
- ✅ Implemented Turbopack for faster builds
- ✅ Added Vercel Analytics & Speed Insights
- ✅ Enhanced animations with GSAP
- ✅ Improved responsive design

### Roadmap

- 🔄 Add blog section for technical articles
- 🔄 Implement dark mode toggle
- 🔄 Add more interactive project demos
- 🔄 Integrate CMS for easier content management

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

**Built with ❤️ by Maxime BAUDE**

</div>
