export const getWorkContents = (t) => ({
    DEGREE: [
      {
        year: "2025",
        title: (
          <h2 className="text-white text-xl font-semibold">
            {t("degreeTitle1")}
          </h2>
        ),
        description: (
          <div className="flex flex-col gap-4 text-base max-w-md">
            <p className="text-white">
                {t("degreDescription1")}
            </p>
        
            <p>
              <span className="font-semibold">Type :</span>{" "}
              <span className="text-white">Badge</span>
            </p>
  
            <p>
              <span className="font-semibold">Skills :</span>{" "}
              <span className="text-white">#Cloud Storage, #IAM, #Cloud Functions, #Pub/sub</span>
            </p>
  
            <a 
              href="https://www.credly.com/badges/fb48f49c-80b3-490e-8e26-72852c2c3d03/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105 active:scale-95 px-4 py-1 rounded-md bg-white text-black font-semibold w-fit"
            >
              {t("view")}
            </a>
          </div>
        ),      
        bgImage: "url('https://images.credly.com/size/340x340/images/42326d44-14ff-4eda-b9c5-7d8f12919253/image.png')",
      },
      {
        year: "2024",
        title: (
          <h2 className="text-white text-xl font-semibold">
            {t("degreeTitle2")}
          </h2>
        ),
        description: (
          <div className="flex flex-col gap-4 text-base max-w-md">
            <p>
              <span className="font-semibold">{t("program")} :</span>{" "}
              <span className="text-white">
                {t("degreeDescription2H1")}
              </span>
            </p>
        
            <p>
              <span className="font-semibold">{t("university")} :</span>{" "}
              <span className="text-white">Ecole Nationale d&apos;Informatique</span>
            </p>
  
            <p>
                {t("degreeDescription2H2")} 
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
            {t("experiencesTitle1")}
          </h2>
        ),
        description: (
          <div className="flex flex-col gap-4 text-base max-w-md">
            <p>
              <span className="font-semibold">{t("topic")} :</span>{" "}
              <span className="text-white">
                {t("experiencesDescription1H1")}
              </span>
            </p>
        
            <p className="leading-relaxed text-slate-400 border-l-4 border-green-400 pl-4 italic">
                {t("experiencesDescription1H2")}
            </p>
        
            <p>
              <span className="font-semibold">{t("techStack")} :</span>{" "}
              <span className="text-white">#Next.js, #NestJS, #MySQL, #React-big-calendar</span>
            </p>
          </div>
        ),      
        bgImage: "url('/bgImages/spat.png')",
      },
      {
        year: "2023",
        title: (
          <h2 className="text-white text-xl font-semibold">
            {t("experiencesTitle2")}
          </h2>
        ),
        description: (
          <div className="flex flex-col gap-4 text-base max-w-md">
            <p>
              <span className="font-semibold">{t("topic")} :</span>{" "}
              <span className="text-white">
                {t("experiencesDescription2H1")}.
              </span>
            </p>
        
            <p className="leading-relaxed text-slate-400 border-l-4 border-green-400 pl-4 italic">
                {t("experiencesDescription2H2")}
            </p>
        
            <p>
              <span className="font-semibold">{t("techStack")} :</span>{" "}
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
            {t("experiencesTitle3")}
          </h2>
        ),
        description: (
          <div className="flex flex-col gap-4 text-base max-w-md">
            <p>
              <span className="font-semibold">{t("Organizer")} :</span>{" "}
              <span className="text-white">
                {t("experiencesDescription3H1")}
              </span>
            </p>
        
            <p className="leading-relaxed text-slate-400 border-l-4 border-green-400 pl-4 italic">
                {t("experiencesDescription3H2")}
            </p>
        
            <p>
              <span className="font-semibold">{t("keys")} :</span>{" "}
              <span className="text-white">{t("experiencesDescription3H3")}</span>
            </p>
          </div>
        ),      
        bgImage: "url('/bgImages/eni.png')",
      },
    ],
  });