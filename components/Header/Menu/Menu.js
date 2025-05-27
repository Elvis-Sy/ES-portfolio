import React, { useEffect, useState } from "react";
import { MENULINKS } from "../../../constants";

const Menu = ({ isMobile = false, onLinkClick = () => {} }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2, // au lieu de 0.6
        rootMargin: isMobile ? "0px 0px -20% 0px" : "0px 0px -50% 0px"
      }
    );
    

    const sectionIds = ["home", ...MENULINKS.map((link) => link.ref)];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <ul className={`list-none p-0 m-0 ${isMobile ? "flex-col" : "flex gap-8 items-center"}`}>
      {MENULINKS.map((el) => {
  const isActive = activeSection === el.ref;
  const isHome = activeSection === "home";
  return (
    <li key={el.name}>
      <a
        onClick={onLinkClick}
        href={`#${el.ref}`}
        className={`link relative font-mono font-bold duration-300
          ${isMobile ? "text-4xl block my-4" : "text-base"}
          ${isActive && isMobile ? "text-gradient" : ""}
          ${isActive && !isMobile ? "visited text-white" : ""}
          ${!isActive && !isHome ? "text-white opacity-50" : "text-white"}
        `}
      >
        {el.name}
      </a>
    </li>
  );
})}

    </ul>
  );
};

export default Menu;
