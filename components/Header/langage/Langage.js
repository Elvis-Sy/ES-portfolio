import { useTranslation } from "react-i18next";

const Langage = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div onClick={toggleLanguage} 
      className="group flex items-center justify-between border-2 font-bold border-white rounded-lg hover:scale-105"
    >
      <p className="pt-1 px-2 border-r border-white">
        <span className={`${i18n.language === "en" ? "text-indigo-light" : "text-gray-dark-1 group-hover:animate-ping"} transition-colors duration-200 ease-in`}>
          EN
        </span>
      </p>
      <p className="pt-1 px-2 border-l border-white">
        <span className={`${i18n.language === "en" ? "text-gray-dark-1 group-hover:animate-ping" : "text-indigo-light"} transition-colors duration-200 ease-in`}>
          FR
        </span>
      </p>
    </div>
  );
};

export default Langage;
