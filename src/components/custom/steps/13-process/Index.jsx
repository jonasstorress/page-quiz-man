import "./Index.Style.css";
import {useState} from "react";
import PropTypes from "prop-types";
import {FaArrowRight} from "react-icons/fa6";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const translations = {
  pt: {
    title: "Quantas vezes por semana você treinou nos últimos 3 meses?",
    button: "Continuar",
    option: [
      "Nenhuma 😔",
      "1-2 vezes por semana 💪",
      "3 vezes por semana 💪⚡️",
      "Mais de 3 vezes por semana 🏆",
    ],
  },
  in: {
    title: "How many times per week have you trained in the last 3 months?",
    button: "Continue",
    option: [
      "None 😔",
      "1-2 times per week 💪",
      "3 times per week 💪⚡️",
      "More than 3 times per week 🏆",
    ],
  },
  es: {
    title: "¿Cuántas veces por semana has entrenado en los últimos 3 meses?",
    button: "Continuar",
    option: [
      "Ninguna 😔",
      "1-2 veces por semana 💪",
      "3 veces por semana 💪⚡️",
      "Más de 3 veces por semana 🏆",
    ],
  },
  it: {
    title: "Quante volte a settimana ti sei allenato negli ultimi 3 mesi?",
    button: "Continua",
    option: [
      "Nessuna 😔",
      "1-2 volte a settimana 💪",
      "3 volte a settimana 💪⚡️",
      "Più di 3 volte a settimana 🏆",
    ],
  },
};

export default function StepThirteen({language, AlterProcess}) {
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
            onClick={() => AlterProcess("step-fourteen")}
            disabled={selectedOption === null}
          >
            {button} <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

StepThirteen.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it"]),
  AlterProcess: PropTypes.func,
};
