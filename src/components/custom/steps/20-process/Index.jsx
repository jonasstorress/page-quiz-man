import "./Index.Style.css";
import {useState} from "react";
import PropTypes from "prop-types";
import {FaArrowRight} from "react-icons/fa6";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const translations = {
  pt: {
    title: "Quanto você costuma dormir?",
    button: "Continuar",
    option: [
      "menos de 5 horas 🙄",
      "5-6 horas 🥱",
      "7-8 horas 🌜",
      "mais de 8 horas 😴",
    ],
  },
  in: {
    title: "How much do you usually sleep?",
    button: "Continue",
    option: [
      "less than 5 hours 🙄",
      "5-6 hours 🥱",
      "7-8 hours 🌜",
      "more than 8 hours 😴",
    ],
  },
  es: {
    title: "¿Cuánto sueles dormir?",
    button: "Continuar",
    option: [
      "menos de 5 horas 🙄",
      "5-6 horas 🥱",
      "7-8 horas 🌜",
      "más de 8 horas 😴",
    ],
  },
  it: {
    title: "Quanto dormi di solito?",
    button: "Continua",
    option: ["meno di 5 ore 🙄", "5-6 ore 🥱", "7-8 ore 🌜", "più di 8 ore 😴"],
  },
};
export default function StepTwenty({language, AlterProcess}) {
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
            onClick={() => AlterProcess("step-twenty-one")}
            disabled={selectedOption === null}
          >
            {button} <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

StepTwenty.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it"]),
  AlterProcess: PropTypes.func,
};
