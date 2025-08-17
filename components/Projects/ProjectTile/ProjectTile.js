import { useEffect, useRef, useMemo, forwardRef } from "react";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
import styles from "./ProjectTile.module.scss";
import { useTranslation } from "react-i18next";

const ProjectTile = ({ project, classes, isDesktop }) => {
  const { name, image, blurImage, description, gradient, url, git, tech } = project;
  const projectCard = useRef(null);
  let additionalClasses = "";
  const {t} = useTranslation();

  if (classes) {
    additionalClasses = classes;
  }

  const options = useMemo(
    () => ({
      max: 10,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      gyroscope: false,
    }),
    []
  );

  const Wrapper = forwardRef(({ url, children, ...props }, ref) => {
    if (url) {
      return (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          ref={ref}
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    );
  });


  useEffect(() => {
    if (projectCard.current) {
      VanillaTilt.init(projectCard.current, options);
    }
  }, [options]);

  return (
    <Wrapper
      url={url}
      ref={projectCard}
      className={`overflow-hidden rounded-3xl ${additionalClasses}`}
      style={{
        maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
        flex: "0 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        className={`h-[25rem] w-[37rem] bg-black ${styles.ProjectTile} rounded-3xl relative p-6 flex flex-col justify-between max-w-full`}
        style={{
          background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
        }}
      >
        <Image
          src="/project-bg.svg"
          alt="project"
          className="absolute w-full h-full top-0 left-0 object-cover opacity-30"
          width="100"
          height="100"
        />
        <Image
          src={image}
          alt={name}
          fill
          placeholder="blur"
          blurDataURL={blurImage}
          className={`${styles.projectImage} z-0`}
        />
        <div
          className="absolute top-0 left-0 w-full h-20"
          style={{
            background: `linear-gradient(180deg, ${gradient[0]} 0%, rgba(0,0,0,0) 100%)`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-32"
          style={{
            background: `linear-gradient(0deg, ${gradient[0]} 10%, rgba(0,0,0,0) 100%)`,
          }}
        />
        <h1
          className="font-medium text-3xl sm:text-4xl z-10 pl-2 transform-gpu"
          style={{ transform: "translateZ(3rem)" }}
        >
          {name}
        </h1>
        <div
          className={`
            ${styles.techIcons} w-1/2 h-full absolute left-24 top-0 sm:flex items-center hidden
          `}
        >
          <div className="flex flex-col pb-8 mb-10">
            {project.tech.map((el, i) => (
              <Image
                className={`${i % 2 === 0 && "ml-8"} mb-6`}
                src={`/projects/tech/${el}.svg`}
                alt={el}
                height={45}
                width={45}
                key={el}
              />
            ))}
          </div>
        </div>
        <h2
          className="text-lg z-10 tracking-wide font-medium text-white transform-gpu"
          style={{ transform: "translateZ(0.8rem)" }}
        >
          {t(description)}
          <a
            href={git}
            className="flex gap-2 text-sm items-center justify-center px-4 py-2 rounded-full bg-black/50 w-fit cursor-pointer transition duration-200 hover:bg-black/70 active:scale-95"
          >
            <Image
              src="/chaine.png"
              alt="Link"
              width={15}
              height={15}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            <p
              
              className="text-white underline-offset-2 hover:underline transition-colors duration-200"
            >
              {t("github")}
            </p>
          </a>

        </h2>
      </div>
    </Wrapper>
  );
};

export default ProjectTile;
