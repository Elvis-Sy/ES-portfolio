/* eslint-disable @next/next/no-img-element */
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS } from "../../constants";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const SkillItem = ({ skill, isActive, onToggle }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className="relative group w-fit cursor-pointer"
      onClick={() => isMobile && onToggle()}
    >
      <Image
        src={`/skills/${skill.name}.svg`}
        alt={skill.name}
        width={50}
        height={50}
        className="transition-transform duration-300 group-hover:scale-110"
      />
      {skill.level && (
        <span
          className={`absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-white text-black text-base font-semibold h-10 w-10 pt-1 flex items-center justify-center rounded-full shadow-md z-10 transition-opacity duration-300
            ${
              isMobile
                ? isActive
                  ? "opacity-100"
                  : "opacity-0"
                : "opacity-0 group-hover:opacity-100"
            }`}
        >
          {skill.level}
        </span>
      )}
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const [activeSkill, setActiveSkill] = useState(null);
  const {t} = useTranslation();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".skills-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  const renderSkills = (skillsArray) =>
    skillsArray.map((skill) => (
      <SkillItem
        key={skill.name}
        skill={skill}
        isActive={activeSkill === skill.name}
        onToggle={() =>
          setActiveSkill((prev) => (prev === skill.name ? null : skill.name))
        }
      />
    ));

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[1].ref}
      className="w-full relative select-none mt-44"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        <div className="flex flex-col skills-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              SKILLS
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              {t("mySkills")}
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              {t("introSkills")}
            </h2>
          </div>

          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              {t("skills1")}
            </h3>
            <div className="flex items-center flex-wrap gap-6 staggered-reveal">
              {renderSkills(SKILLS.languagesAndTools)}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              {t("skills2")}
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu staggered-reveal">
              {renderSkills(SKILLS.librariesAndFrameworks)}
            </div>
          </div>

          <div className="flex flex-wrap mt-10">
            <div className="mr-16 xs:mr-20 mb-6 staggered-reveal">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
                {t("skills3")}
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu">
                {renderSkills(SKILLS.databases)}
              </div>
            </div>
            <div className="staggered-reveal">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
                {t("skills4")}
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu">
                {renderSkills(SKILLS.other)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
