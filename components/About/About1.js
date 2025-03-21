import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "../Button/Button";
import { MENULINKS } from "../../constants";

const About1 = ({ clientHeight }) => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          defaults: { ease: "none", duration: 0.1 },
        })
        .fromTo(
          quoteRef.current.querySelector(".about-1"),
          { opacity: 0.2 },
          { opacity: 1 }
        )
        .to(quoteRef.current.querySelector(".about-1"), {
          opacity: 0.2,
          delay: 0.5,
        })
        .fromTo(
          quoteRef.current.querySelector(".about-2"),
          { opacity: 0.2 },
          { opacity: 1 },
          "<"
        )
        .to(quoteRef.current.querySelector(".about-2"), {
          opacity: 0.2,
          delay: 1,
        })
        .fromTo(
          quoteRef.current.querySelector(".about-3"),
          { opacity: 0.2 },
          { opacity: 1 }
        )
        .to(quoteRef.current.querySelector(".about-3"), {
          opacity: 0.2,
          delay: 1,
        });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center 80%",
        end: "center top",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id={MENULINKS[0].ref} className="w-full relative select-none">
      <div
        className={`${
          clientHeight > 650 ? "" : "pt-40 pb-40"
        } section-container`}
      >
        <div className="flex flex-col mb-8">
          <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
            ABOUT ME
          </p>
          <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
            Informations
          </h1>
        </div>
 
        <div className="flex lg:flex-row flex-col lg:gap-20 gap-8">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="lg:w-auto w-60 lg:self-auto self-center">
            <mask id="mask0" mask-type="alpha">
              <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
            </mask>
            <g mask="url(#mask0)">
              <path fill="#2ecc71" d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346
                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403
                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028
                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
              <image className="w-80 transform -translate-x-[35px] translate-y-[15px] lg:-translate-x[50px] lg:-translate-y-[10px]" href="profile.png" />
            </g>
          </svg>

          <div className="flex flex-col gap-8">
              <h1
                ref={quoteRef}
                className="font-medium text-[1.50rem] md:text-6xl lg:text-[2rem] lg:text-left text-center"
              >
                <span className="about-1 leading-tight">
                  Je suis un développeur dévoué qui adore relever les défis et étendre ses compétences sur différents projets.{" "}
                </span>
                <span className="about-2 leading-tight">
                Ma curiosité me permet de m&apos;adapter rapidement aux nouvelles tendances pour optimiser mes développements.{" "}
                </span>
                <span className="about-3 leading-tight">
                Ainsi, je m&apos;efforce de créer des solutions performants, évolutives et adaptées aux utilisateurs.{" "}
                </span>
              </h1>

              <div className="staggered-reveal pt-4 lg:self-auto self-center">
                <Button href="" classes="link" type="primary">
                  Download CV
                </Button>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
