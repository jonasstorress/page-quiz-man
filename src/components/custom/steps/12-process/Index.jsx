import "./Index.Style.css";
import {useState} from "react";
import PropTypes from "prop-types";
import {FaArrowRight} from "react-icons/fa6";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const translations = {
  pt: {
    title: "Escolha seu nível preferido de treino",
    button: "Continuar",
    option: [
      "Mantenha-o leve e tranquilo 🧘‍♂️",
      "Estou bem com algum esforço 💪",
      "Traga a intensidade 🚀",
      "Deixe a gente decidir",
    ],
  },
  in: {
    title: "Choose your preferred training level",
    button: "Continue",
    option: [
      "Keep it light and relaxed 🧘‍♂️",
      "I'm okay with some effort 💪",
      "Bring the intensity 🚀",
      "Let us decide",
    ],
  },
  es: {
    title: "Elige tu nivel de entrenamiento preferido",
    button: "Continuar",
    option: [
      "Mantenlo ligero y relajado 🧘‍♂️",
      "Estoy bien con algo de esfuerzo 💪",
      "Trae la intensidad 🚀",
      "Déjanos decidir",
    ],
  },
  it: {
    title: "Scegli il tuo livello di allenamento preferito",
    button: "Continua",
    option: [
      "Mantienilo leggero e rilassato 🧘‍♂️",
      "Va bene un po' di sforzo 💪",
      "Porta l'intensità 🚀",
      "Lascia decidere a noi",
    ],
  },
};

export default function StepTwelve({language, AlterProcess}) {
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
            onClick={() => AlterProcess("step-thirteen")}
            disabled={selectedOption === null}
          >
            {button} <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

StepTwelve.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it"]),
  AlterProcess: PropTypes.func,
};
