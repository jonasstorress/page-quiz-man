import "./Index.Style.css";
import {useState} from "react";
import PropTypes from "prop-types";
import {FaArrowRight} from "react-icons/fa6";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const translations = {
  pt: {
    title: "Qual é o seu nível médio de energia durante o dia?",
    button: "Continuar",
    option: [
      "Sinto-me exausto a maior parte do tempo 😓",
      "Meus níveis de energia variam ao longo do dia 📊",
      "Geralmente sou muito enérgico e ativo 💥",
    ],
  },
  in: {
    title: "What is your average energy level during the day?",
    button: "Continue",
    option: [
      "I feel exhausted most of the time 😓",
      "My energy levels vary throughout the day 📊",
      "I am usually very energetic and active 💥",
    ],
  },
  es: {
    title: "¿Cuál es tu nivel promedio de energía durante el día?",
    button: "Continuar",
    option: [
      "Me siento agotado la mayor parte del tiempo 😓",
      "Mis niveles de energía varían a lo largo del día 📊",
      "Generalmente soy muy enérgico y activo 💥",
    ],
  },
  it: {
    title: "Qual è il tuo livello medio di energia durante il giorno?",
    button: "Continua",
    option: [
      "Mi sento esausto la maggior parte del tempo 😓",
      "I miei livelli di energia variano durante il giorno 📊",
      "Di solito sono molto energico e attivo 💥",
    ],
  },
};
export default function StepNineteen({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, option, button} = translations[lang];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className="grid-custom-step px-4 md:px-0 relative">
      <div className="flex flex-col justify-center items-center pt-8 w-full">
        <span className="text-white text-center md:text-start lg:text-4xl font-bold pb-8 w-full">
          {title}
        </span>
      </div>
      <div className="flex flex-col w-full gap-4 mb-4 relative">
        <div className="w-full flex flex-col gap-2 relative">
          {option.map((text, index) => (
            <Card
              key={index}
              className={`w-full card-option-select flex items-center text-lg font-bold cursor-pointer z-20 ${
                selectedOption === index ? " card-actived " : ""
              }`}
              onClick={() => handleSelect(index)}
            >
              {selectedOption === index ? (
                <IoRadioButtonOn className="mr-2 text-2xl icon-active" />
              ) : (
                <IoRadioButtonOffSharp className="mr-2 text-2xl" />
              )}
              {text}
            </Card>
          ))}
        </div>
        <div className="flex items-end justify-end pt-4 pb-12">
          <Button
            className="btn-custom-next flex justify-between items-center w-full lg:w-[40%] xl:w-[36%]"
            onClick={() => AlterProcess("step-twenty")}
            disabled={selectedOption === null}
          >
            {button} <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

StepNineteen.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it"]),
  AlterProcess: PropTypes.func,
};
