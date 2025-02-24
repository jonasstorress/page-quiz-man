import "./Index.Style.css";
import PropTypes from "prop-types";
import {FaArrowRight} from "react-icons/fa6";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {useState} from "react";

// IMG's
import IMGsix from "../../../../assets/images/steps/six.png";

const translations = {
  pt: {
    title: "Há quanto tempo você estava na melhor forma da sua vida?",
    button: "Entendi",
    option: [
      "Há menos de um ano",
      "1-3 anos atrás",
      "Há mais de 3 anos",
      "Nunca",
    ],
  },
  in: {
    title: "How long ago were you in the best shape of your life?",
    button: "Got it",
    option: [
      "Less than a year ago",
      "1-3 years ago",
      "More than 3 years ago",
      "Never",
    ],
  },
  es: {
    title: "¿Hace cuánto tiempo estabas en la mejor forma de tu vida?",
    button: "Entendido",
    option: [
      "Hace menos de un año",
      "Hace 1-3 años",
      "Hace más de 3 años",
      "Nunca",
    ],
  },
  it: {
    title: "Da quanto tempo eri nella migliore forma della tua vita?",
    button: "Ho capito",
    option: ["Meno di un anno fa", "1-3 anni fa", "Più di 3 anni fa", "Mai"],
  },
};

export default function StepSix({language, AlterProcess}) {
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
              className={`w-[76%] card-option-select flex items-center text-lg font-bold cursor-pointer z-20 
              ${selectedOption === index ? " card-actived " : ""}`}
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
          <div className="absolute inset-0 flex items-center justify-end ">
            <img alt="..." src={IMGsix} className="w-36" />
          </div>
        </div>
        <div className="flex items-end justify-end pt-4 pb-12">
          <Button
            className="btn-custom-next flex justify-between items-center w-full lg:w-[40%] xl:w-[36%]"
            onClick={() => AlterProcess("step-seven")}
            disabled={selectedOption === null}
          >
            {button} <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

StepSix.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it"]),
  AlterProcess: PropTypes.func,
};
