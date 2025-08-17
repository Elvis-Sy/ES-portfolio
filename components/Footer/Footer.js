/* eslint-disable @next/next/no-img-element */
import Profiles from "../Profiles/Profiles";
import { MENULINKS } from "../../constants";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation();

  return (
    <footer
      className="w-full relative select-none text-[#f1f5f9] bg-[#1e5631]/90"
    >

      <div className="section-container flex flex-col w-full h-full justify-end z-10 items-center py-12 space-y-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-10 w-full">
          
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-lg font-semibold text-[#2ecc71]">
              ANDRIAMANANTENA Elvis Sylvano
            </h2>
            <p className="opacity-90 md:max-w-md">
              {t("footerIntro")}
            </p>
          </div>

          <nav
            aria-label="Navigation principale"
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-semibold mb-2 text-[#2ecc71]">
              Navigations
            </h3>
            <ul className="space-y-1">
              {MENULINKS.map((link) => (
                <li key={link.ref}>
                  <a
                    href={`#${link.ref}`}
                    className="hover:underline hover:text-white transition"
                  >
                    {t(link.name)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg font-semibold text-[#2ecc71]">
              Contact
            </h3>
            <p>
              {t("email")} :
              <a
                href="mailto:elvissy04@gmail.com"
                className="underline hover:text-white ml-1"
              >
                elvissy04@gmail.com
              </a>
            </p>
            <p>{t("phone")} : +261 34 67 658 16</p>
            <div className="pt-2">
              <Profiles />
            </div>
          </div>
        </div>

        <div className="border-t w-full border-white/20 py-4 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Elvis Sylvano. Tous droits réservés.
        </div>
      </div>

    </footer>
  );
};

export default Footer;

