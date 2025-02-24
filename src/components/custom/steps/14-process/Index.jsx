import "./Index.Style.css";
import {useState} from "react";
import PropTypes from "prop-types";
import {FaArrowRight} from "react-icons/fa6";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const translations = {
  pt: {
    title: "Quanto tempo você quer que seus treinos durem?",
    button: "Continuar",
    option: [
      "10-15 minutos ⏳",
      "20-30 minutos ⏰",
      "30-40 minutos 🕐",
      "Deixe a gente decidir",
    ],
  },
  in: {
    title: "How long do you want your workouts to last?",
    button: "Continue",
    option: [
      "10-15 minutes ⏳",
      "20-30 minutes ⏰",
      "30-40 minutes 🕐",
      "Let us decide",
    ],
  },
  es: {
    title: "¿Cuánto tiempo quieres que duren tus entrenamientos?",
    button: "Continuar",
    option: [
      "10-15 minutos ⏳",
      "20-30 minutos ⏰",
      "30-40 minutos 🕐",
      "Déjanos decidir",
    ],
  },
  it: {
    title: "Quanto tempo vuoi che durino i tuoi allenamenti?",
    button: "Continua",
    option: [
      "10-15 minuti ⏳",
      "20-30 minuti ⏰",
      "30-40 minuti 🕐",
      "Lascia decidere a noi",
    ],
  },
};

export default function StepFourteen({language, AlterProcess}) {
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
            onClick={() => AlterProcess("step-fifteen")}
            disabled={selectedOption === null}
          >
            {button} <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

StepFourteen.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it"]),
  AlterProcess: PropTypes.func,
};
