import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Howl } from "howler";
import SoundBar from "./SoundBar/SoundBar";
import Menu from "./Menu/Menu";
import Langage from "./langage/Langage";

const multiPop = new Howl({
  src: ["/sounds/multi-pop.mp3"],
});

const Header = () => {
  const inputRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    const checked = !menuOpen;
    setMenuOpen(checked);
    if (checked) {
      document.body.classList.add("overflow-hidden");
      multiPop.play();
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, closeMenu]);

  return (
    <nav className="w-full fixed top-0 py-6 z-50 backdrop-blur-[2px] bg-gradient-to-b from-black to-transparent">
      <div className="section-container flex justify-between items-center">
        <a href="#home" className="link">
          <Image src="/logo.svg" alt="Logo" width={25} height={25} />
        </a>

        {/* Desktop Menu */}
        <div className="outer-menu hidden md:flex items-center gap-8">
          <Menu />
          <div className="flex gap-10 items-center ml-auto mb-2">
            <Langage />
            <SoundBar />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="outer-menu md:hidden flex items-center gap-4 relative z-50">
          <Langage />
          <SoundBar />
          <button
            onClick={toggleMenu}
            className="z-50 relative w-6 h-6 flex flex-col justify-between items-center cursor-pointer"
            aria-label="Menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                menuOpen ? "rotate-45 mt-[4.5px] translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 mb-[4.5px] -translate-y-1.5" : ""
              }`}
            />
          </button> 
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 flex flex-col items-center justify-center z-40 transition-all duration-300">
          <Menu isMobile onLinkClick={closeMenu} />
        </div>
      )}
    </nav>
  );
};

export default Header;
