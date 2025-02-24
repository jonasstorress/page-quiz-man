import "./Index.Style.css";
import {useState} from "react";
import PropTypes from "prop-types";
import {FaArrowRight} from "react-icons/fa6";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const translations = {
  pt: {
    title:
      "Com que frequência você come ou bebe alimentos ou bebidas açucaradas?",
    button: "Continuar",
    option: [
      "Não com frequência. Não sou grande fã de doces 😎",
      "3-5 vezes por semana 🍪",
      "Praticamente todos os dias 🤤",
    ],
  },
  in: {
    title: "How often do you eat or drink sugary foods or beverages?",
    button: "Continue",
    option: [
      "Not often. I'm not a big fan of sweets 😎",
      "3-5 times per week 🍪",
      "Almost every day 🤤",
    ],
  },
  es: {
    title: "¿Con qué frecuencia comes o bebes alimentos o bebidas azucaradas?",
    button: "Continuar",
    option: [
      "No muy a menudo. No soy muy fan de los dulces 😎",
      "3-5 veces por semana 🍪",
      "Casi todos los días 🤤",
    ],
  },
  it: {
    title: "Con quale frequenza mangi o bevi cibi o bevande zuccherate?",
    button: "Continua",
    option: [
      "Non spesso. Non sono un grande fan dei dolci 😎",
      "3-5 volte a settimana 🍪",
      "Quasi tutti i giorni 🤤",
    ],
  },
};

export default function StepSixteen({language, AlterProcess}) {
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
            onClick={() => AlterProcess("step-seventeen")}
            disabled={selectedOption === null}
          >
            {button} <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

StepSixteen.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it"]),
  AlterProcess: PropTypes.func,
};
