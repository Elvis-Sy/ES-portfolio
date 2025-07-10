export const METADATA = {
  author: "ES",
  title: "ES | Portfolio",
  description:
    "Shubh Porwal is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@shubhporwal24",
  keywords: [
    "Shubh Porwal",
    "Frontend Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "A propos",
    ref: "apropos",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projets",
    ref: "projects",
  },
  {
    name: "Parcours",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Full-Stack développeur web",
  "Développeur DevOps junior",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:elvissy04@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/elvis-sylvano",
  },
  {
    name: "github",
    url: "https://github.com/Elvis-Sy",
  },
  {
    name: "whatsapp",
    url: "https://wa.me/261346765816",
  }
];

export const SKILLS = {
  languagesAndTools: [
    { name: "java", level: "55%" },
    { name: "html", level: "90%" },
    { name: "css", level: "75%" },
    { name: "javascript", level: "80%" },
    { name: "typescript", level: "60%" },
    { name: "git", level: "50%" },
    { name: "figma", level: "45%" },
  ],
  librariesAndFrameworks: [
    { name: "react", level: "80%" },
    { name: "nextjs", level: "75%" },
    { name: "angular", level: "40%" },
    { name: "nestjs", level: "45%" },
    { name: "spring", level: "60%" },
    { name: "nodejs", level: "85%" },
    { name: "tailwindcss", level: "70%" },
    { name: "vite", level: "60%" },
  ],
  databases: [
    { name: "mysql", level: "75%" },
    { name: "mongodb", level: "60%" },
    { name: "postgresql", level: "70%" },
    { name: "supabase", level: "60%" },
  ],
  other: [
    { name: "kubernetes", level: "40%" },
    { name: "docker", level: "40%" },
  ],
};


export const PROJECTS = [
  {
    name: "FlotMax",
    image: "/projects/flotmax.jpeg",
    blurImage: "/projects/blur/flotmax-blur.jpg",
    description: "Application aidant pour les problèmes de flot maximal✍🏻",
    gradient: ["#1e3a8a", "#3b0764"],
    url: "https://flot-maximal.vercel.app/",
    git: "https://github.com/Elvis-Sy/FlotMaximal",
    tech: ["typescript", "react", "nextjs", "tailwindcss"],
  },

];

export const WORK_CONTENTS = {
  DIPLOME: [
    {
      year: "2025",
      title: (
        <h2 className="text-white text-xl font-semibold">
          Configurer un environnement dev applicatif sur Google Cloud
        </h2>
      ),
      description: (
        <div className="flex flex-col gap-4 text-base max-w-md">
          <p className="text-white">
            Cela consiste à créer et gérer des ressources cloud (VM, bases de données, conteneurs){" "}
            pour développer, tester et déployer des applications de manière sécurisée et scalable
          </p>
      
          <p>
            <span className="font-semibold">Type :</span>{" "}
            <span className="text-white">Badge</span>
          </p>

          <p>
            <span className="font-semibold">Skills :</span>{" "}
            <span className="text-white">#Cloud Storage, #IAM, #Cloud Functions, #Pub/sub</span>
          </p>

          <p>
            <button
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 rounded-md bg-white text-black font-semibold"
            >
              <a 
                href="https://www.credly.com/badges/fb48f49c-80b3-490e-8e26-72852c2c3d03/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Consulter
              </a>
            </button>

          </p>
        </div>
      ),      
      bgImage: "url('https://images.credly.com/size/340x340/images/42326d44-14ff-4eda-b9c5-7d8f12919253/image.png')",
    },
    {
      year: "2024",
      title: (
        <h2 className="text-white text-xl font-semibold">
          Licence en informatique
        </h2>
      ),
      description: (
        <div className="flex flex-col gap-4 text-base max-w-md">
          <p>
            <span className="font-semibold">Parcours :</span>{" "}
            <span className="text-white">
              Génie logiciel et Base de données
            </span>
          </p>
      
          <p>
            <span className="font-semibold">Université :</span>{" "}
            <span className="text-white">Ecole Nationale d&apos;Informatique</span>
          </p>

          <p>
            Ce diplôme représente une étape clé dans mon parcours professionnel et me prépare efficacement à atteindre mes objectifs futurs. 
          </p>
        </div>
      ),      
      bgImage: "url('/bgImages/licence.jpg')",
    },
  ],
  EXPERIENCE: [
    {
      year: "2024",
      title: (
        <h2 className="text-white text-xl font-semibold">
          Stage Développeur Web — SPAT
        </h2>
      ),
      description: (
        <div className="flex flex-col gap-4 text-base max-w-md">
          <p>
            <span className="font-semibold">Thème :</span>{" "}
            <span className="text-white">
              Conception et mise en place d&apos;une plateforme pour la gestion et le suivi des congés des employés.
            </span>
          </p>
      
          <p className="leading-relaxed text-slate-400 border-l-4 border-green-400 pl-4 italic">
            Une solution logicielle intuitive pour planifier, automatiser et suivre les demandes de congé, tout en garantissant une meilleure organisation et conformité aux règles internes.
          </p>
      
          <p>
            <span className="font-semibold">Technologies :</span>{" "}
            <span className="text-white">#Next.js, #NestJS, #MySQL</span>
          </p>
        </div>
      ),      
      bgImage: "url('/bgImages/spat.png')",
    },
    {
      year: "2023",
      title: (
        <h2 className="text-white text-xl font-semibold">
          Stage Développeur Web — SMMC
        </h2>
      ),
      description: (
        <div className="flex flex-col gap-4 text-base max-w-md">
          <p>
            <span className="font-semibold">Thème :</span>{" "}
            <span className="text-white">
              Conception et mise en place d'une plateforme web pour la gestion d'accès au 
              sein du site siège de la SMMC.
            </span>
          </p>
      
          <p className="leading-relaxed text-slate-400 border-l-4 border-green-400 pl-4 italic">
          Un plateforme web qui permet de facilité les suivies des visiteurs (entrée , sortie ) 
          et de faire une  rechercher à partir de l&apos;heure et de la  date en cas de problème au sein de la SMMC
          </p>
      
          <p>
            <span className="font-semibold">Technologies :</span>{" "}
            <span className="text-white">#JAVA, #Jsp, #Html, #Css</span>
          </p>
        </div>
      ),      
      bgImage: "url('/bgImages/smmc.jpg')",
    },
    {
      year: "2022",
      title: (
        <h2 className="text-white text-xl font-semibold">
          Hackaton - DevHunt
        </h2>
      ),
      description: (
        <div className="flex flex-col gap-4 text-base max-w-md">
          <p>
            <span className="font-semibold">Organisateur :</span>{" "}
            <span className="text-white">
              Ecole Nationale d&apos;Informatique (ENI)
            </span>
          </p>
      
          <p className="leading-relaxed text-slate-400 border-l-4 border-green-400 pl-4 italic">
            Réalisation d&apos;un site vitrine pour présenter l&apos;université de Fianarantsoa,{" "}
            visant à valoriser son image institutionnelle, faciliter l&apos;accès à l&apos;information académique et renforcer sa présence en ligne.
          </p>
      
          <p>
            <span className="font-semibold">Point clé :</span>{" "}
            <span className="text-white">Projet collaboratif axé sur accessibilité, clarté, modernité et cohérence visuelle</span>
          </p>
        </div>
      ),      
      bgImage: "url('/bgImages/eni.png')",
    },
  ],
};



export const GTAG = "G-5HCTL2TJ5W";
