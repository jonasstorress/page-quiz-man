import "./Index.Style.css";
import {useState} from "react";
import PropTypes from "prop-types";
import {FaArrowRight} from "react-icons/fa6";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const translations = {
  pt: {
    title: "Como muda o seu peso normalmente?",
    button: "Continuar",
    option: [
      "Ganho peso rapidamente, mas perco lentamente",
      "Ganho e perco peso com facilidade",
      "Luto para ganhar peso ou músculo",
    ],
  },
  in: {
    title: "How does your weight usually change?",
    button: "Continue",
    option: [
      "I gain weight quickly but lose it slowly",
      "I gain and lose weight easily",
      "I struggle to gain weight or muscle",
    ],
  },
  es: {
    title: "¿Cómo cambia tu peso normalmente?",
    button: "Continuar",
    option: [
      "Gano peso rápidamente, pero lo pierdo lentamente",
      "Gano y pierdo peso con facilidad",
      "Lucho por ganar peso o músculo",
    ],
  },
  it: {
    title: "Come cambia normalmente il tuo peso?",
    button: "Continua",
    option: [
      "Aumento di peso rapidamente, ma lo perdo lentamente",
      "Aumento e perdo peso facilmente",
      "Faccio fatica a guadagnare peso o muscoli",
    ],
  },
};

export default function StepSeven({language, AlterProcess}) {
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
            onClick={() => AlterProcess("step-eight")}
            disabled={selectedOption === null}
          >
            {button} <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

StepSeven.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it"]),
  AlterProcess: PropTypes.func,
};
