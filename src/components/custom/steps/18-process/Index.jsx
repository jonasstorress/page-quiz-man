import "./Index.Style.css";
import {useState} from "react";
import PropTypes from "prop-types";
import {FaArrowRight} from "react-icons/fa6";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const translations = {
  pt: {
    title: "Como você descreveria seu dia típico?",
    button: "Continuar",
    option: [
      "Passo a maior parte do dia sentado",
      "Eu me mudo de vez em quando",
      "Estou de pé o dia todo",
    ],
  },
  in: {
    title: "How would you describe your typical day?",
    button: "Continue",
    option: [
      "I spend most of the day sitting",
      "I move around from time to time",
      "I am on my feet all day",
    ],
  },
  es: {
    title: "¿Cómo describirías tu día típico?",
    button: "Continuar",
    option: [
      "Paso la mayor parte del día sentado",
      "Me muevo de vez en cuando",
      "Estoy de pie todo el día",
    ],
  },
  it: {
    title: "Come descriveresti la tua giornata tipica?",
    button: "Continua",
    option: [
      "Passo la maggior parte della giornata seduto",
      "Mi muovo di tanto in tanto",
      "Sono in piedi tutto il giorno",
    ],
  },
};
export default function StepEighteen({language, AlterProcess}) {
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
            onClick={() => AlterProcess("step-nineteen")}
            disabled={selectedOption === null}
          >
            {button} <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

StepEighteen.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it"]),
  AlterProcess: PropTypes.func,
};
