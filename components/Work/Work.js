import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Tabs from "./Tabs/Tabs";
import StickyScroll from "./StickyScroll/StickyScroll";
import { MENULINKS } from "../../constants";
import { useTranslation } from "react-i18next";
import { getWorkContents } from "utils/getwork";

const Work = ({ isDesktop }) => {
  const sectionRef = useRef(null);
  const {t, i18n} = useTranslation();
  const [workContents, setWorkContents] = useState(getWorkContents(t));

  useEffect(()=>{
    const onLanguageChanged = () => {
      setWorkContents(getWorkContents(t));
    };
  
    i18n.on("languageChanged", onLanguageChanged);
  }, [i18n.language])

  const tabItems = useMemo(
    () => [
      {
        title: t("experiences"),
        value: "experiences",
        content: (
          <StickyScroll
            key={`experience-${i18n.language}`}
            isDesktop={isDesktop}
            contentItems={workContents.EXPERIENCE || []}
          />
        ),
      },
      {
        title: t("degree"),
        value: "degree",
        content: (
          <StickyScroll
            key={`degree-${i18n.language}`}
            isDesktop={isDesktop}
            contentItems={workContents.DEGREE || []}
          />
        ),
      },
    ],
    [isDesktop, workContents, i18n.language, t]
  );
  

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".work-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[3].ref}
      className="w-full relative select-none mt-32 xs:mt-40 sm:mt-72 mb-96"
    >
      <Image
        src="/left-pattern.svg"
        className="absolute hidden left-0 -top-1/4 w-1/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
        alt=""
      />
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col work-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              {t("career")}
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              {t("myCareer")}
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              {t("introCareer")}{" "}
            </h2>
          </div>
          <Tabs key={i18n.language} tabItems={tabItems} />
        </div>
      </div>
    </section>
  );
};

export default Work;
