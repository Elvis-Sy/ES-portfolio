import { useEffect, useRef } from "react";
import { MENULINKS, PROJECTS } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectTile from "./ProjectTile/ProjectTile";
import { useTranslation } from "react-i18next";

const Projects = ({ isDesktop, clientHeight }) => {
  const sectionRef = useRef(null);
  const sectionTitleRef = useRef(null);
  const {t} = useTranslation();

  useEffect(() => {
    const projectWrapper = sectionRef.current.querySelector(".project-wrapper");
  
    const shouldScroll = projectWrapper.scrollWidth > window.innerWidth;
  
    if (isDesktop && shouldScroll) {
      const [projectsTimeline, projectsScrollTrigger] = getProjectsSt();
  
      return () => {
        projectsScrollTrigger && projectsScrollTrigger.kill();
        projectsTimeline && projectsTimeline.kill();
      };
    } else {
      projectWrapper.style.width = "100%";
      projectWrapper.style.overflowX = "visible";
    }
  
    const [revealTimeline, revealScrollTrigger] = getRevealSt();
  
    return () => {
      revealScrollTrigger && revealScrollTrigger.kill();
      revealTimeline && revealTimeline.progress(1);
    };
  }, [sectionRef, isDesktop]);
  

  const getRevealSt = () => {
    const revealTl = gsap.timeline({ defaults: { ease: "none" } });

    revealTl.from(
      sectionRef.current.querySelectorAll(".staggered-reveal"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom bottom",
      scrub: 0,
      animation: revealTl,
    });

    return [revealTl, scrollTrigger];
  };

  const getProjectsSt = () => {
    const wrapper = sectionRef.current.querySelector(".project-wrapper");
    const inner = sectionRef.current.querySelector(".inner-container");
  
    const sidePadding =
      document.body.clientWidth - inner.clientWidth;
  
    const totalWidth = sidePadding + wrapper.scrollWidth;
    const windowWidth = window.innerWidth;
  
    if (totalWidth <= windowWidth) return [null, null];
  
    sectionRef.current.style.width = `${totalWidth}px`;
    const width = window.innerWidth - totalWidth;
    const duration = `${(totalWidth / window.innerHeight) * 100}%`;
  
    const timeline = gsap.timeline({ defaults: { ease: "none" } });
  
    timeline
      .to(sectionRef.current, { x: width })
      .to(sectionTitleRef.current, { x: -width }, "<");
  
    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: duration,
      scrub: 0,
      pin: true,
      animation: timeline,
      pinSpacing: "margin",
    });
  
    return [timeline, scrollTrigger];
  };
  

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[2].ref}
      className={`${
        isDesktop && "min-h-screen"
      } w-full relative select-none section-container transform-gpu`}
    >
      <div className="flex flex-col py- h-full">
        <div
          className="flex flex-col inner-container transform-gpu"
          ref={sectionTitleRef}
        >
          <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
            {t("projects")}
          </p>
          <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
            {t("myProjects")}
          </h1>
          <h2 className="text-[1.65rem] font-medium md:max-w-lg max-w-sm mt-2 staggered-reveal">
            {t("introProjects")}{" "}
          </h2>
        </div>
        <div
          className={`${
            clientHeight > 650 ? "mt-12" : "mt-8"
          } flex project-wrapper no-scrollbar w-fit staggered-reveal`}
        >
          {PROJECTS.map((project, index) => (
            <ProjectTile
              classes={
                index === PROJECTS.length - 1 ? "" : "mr-10 xs:mr-12 sm:mr-16"
              }
              project={project}
              key={project.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
