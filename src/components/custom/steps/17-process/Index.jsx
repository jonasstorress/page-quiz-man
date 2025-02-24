import "./Index.Style.css";
import {useState} from "react";
import PropTypes from "prop-types";
import {FaArrowRight} from "react-icons/fa6";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const translations = {
  pt: {
    title: "Quanta água você bebe diariamente?",
    button: "Continuar",
    option: [
      "Menos de 2 copos 💧",
      "2-6 copos 💧💧",
      "7-10 copos 💧💧💧",
      "Mais de 10 copos 🐳",
    ],
  },
  in: {
    title: "How much water do you drink daily?",
    button: "Continue",
    option: [
      "Less than 2 glasses 💧",
      "2-6 glasses 💧💧",
      "7-10 glasses 💧💧💧",
      "More than 10 glasses 🐳",
    ],
  },
  es: {
    title: "¿Cuánta agua bebes diariamente?",
    button: "Continuar",
    option: [
      "Menos de 2 vasos 💧",
      "2-6 vasos 💧💧",
      "7-10 vasos 💧💧💧",
      "Más de 10 vasos 🐳",
    ],
  },
  it: {
    title: "Quanta acqua bevi ogni giorno?",
    button: "Continua",
    option: [
      "Meno di 2 bicchieri 💧",
      "2-6 bicchieri 💧💧",
      "7-10 bicchieri 💧💧💧",
      "Più di 10 bicchieri 🐳",
    ],
  },
};

export default function StepSeventeen({language, AlterProcess}) {
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
            onClick={() => AlterProcess("step-eighteen")}
            disabled={selectedOption === null}
          >
            {button} <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

StepSeventeen.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it"]),
  AlterProcess: PropTypes.func,
};
