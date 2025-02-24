import "./Index.Style.css";

import {useState, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Icon Language
import ICONIn from "../../../assets/images/language/eua.png";
import ICONIt from "../../../assets/images/language/italy.png";
import ICONPt from "../../../assets/images/language/brazil.png";
import ICONEs from "../../../assets/images/language/espanha.png";
import Logo from "./logo/Index";

export default function Header() {
  const [language, setLanguage] = useState("pt");
  const location = useLocation();
  const navigate = useNavigate();

  const languageIcons = {
    in: ICONIn,
    pt: ICONPt,
    es: ICONEs,
    it: ICONIt,
  };

  const getLanguageFromURL = () => {
    const pathParts = location.pathname.split("/");
    return pathParts[1] || "pt";
  };

  const updateURL = (newLanguage) => {
    const pathParts = location.pathname.split("/");
    pathParts[1] = newLanguage;
    const newPath = pathParts.join("/");
    navigate(newPath);
  };

  const isValidLanguage = (lang) => {
    return ["in", "pt", "es", "it"].includes(lang);
  };

  useEffect(() => {
    const urlLanguage = getLanguageFromURL();
    if (isValidLanguage(urlLanguage)) {
      setLanguage(urlLanguage);
      window.dispatchEvent(
        new CustomEvent("languageChange", {detail: urlLanguage})
      );
    } else {
      setLanguage("pt");
      updateURL("pt");
      window.dispatchEvent(new CustomEvent("languageChange", {detail: "pt"}));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const handleLanguageChange = (newLanguage) => {
    if (isValidLanguage(newLanguage)) {
      setLanguage(newLanguage);
      updateURL(newLanguage);
      window.dispatchEvent(
        new CustomEvent("languageChange", {detail: newLanguage})
      );
    } else {
      setLanguage("pt");
      updateURL("pt");
      window.dispatchEvent(new CustomEvent("languageChange", {detail: "pt"}));
    }
  };

  return (
    <div className="w-full">
      <div className="container-fluid">
        <div className="flex justify-between items-center header-custom">
          <div className="w-28 h-8">
            <Logo />
          </div>
          <div className="flex items-center">
            <div>
              <img
                alt="language"
                src={languageIcons[language]}
                className="w-12 h-8"
              />
            </div>
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="button-trigger-custom-lang">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent className="select-custom-content p-0">
                <SelectGroup className="p-0">
                  <SelectItem value="in" className="select-custom-item p-0">
                    Inglês
                  </SelectItem>
                  <SelectItem value="pt" className="select-custom-item">
                    Português
                  </SelectItem>
                  <SelectItem value="es" className="select-custom-item">
                    Espanhol
                  </SelectItem>
                  <SelectItem value="it" className="select-custom-item">
                    Italiano
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
