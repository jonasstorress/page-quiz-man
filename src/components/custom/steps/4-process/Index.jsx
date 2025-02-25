import "./Index.Style.css";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {Card} from "@/components/ui/card";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

// Imagens
import IMGFour1 from "../../../../assets/images/steps/four-1.svg";
import IMGFour2 from "../../../../assets/images/steps/four-2.svg";
import IMGFour3 from "../../../../assets/images/steps/four-3.svg";
import IMGFour4 from "../../../../assets/images/steps/four-4.svg";
import IMGFour5 from "../../../../assets/images/steps/four-5.svg";

const translations = {
  pt: {
    title: "Como você classificaria seu desempenho sexual?",
    weight: [
      "Muito insatisfeito",
      "Insatisfeito",
      "Tudo bem",
      "Satisfeito",
      "Muito satisfeito",
    ],
  },
  in: {
    title: "How would you rate your sexual performance?",
    weight: [
      "Very dissatisfied",
      "Dissatisfied",
      "Okay",
      "Satisfied",
      "Very satisfied",
    ],
  },
  es: {
    title: "¿Cómo calificarías tu desempeño sexual?",
    weight: [
      "Muy insatisfecho",
      "Insatisfecho",
      "Está bien",
      "Satisfecho",
      "Muy satisfecho",
    ],
  },
  it: {
    title: "Come valuteresti la tua performance sessuale?",
    weight: [
      "Molto insoddisfatto",
      "Insoddisfatto",
      "Va bene",
      "Soddisfatto",
      "Molto soddisfatto",
    ],
  },
  fn: {
    title: "Comment évalueriez-vous votre performance sexuelle?",
    weight: [
      "Très insatisfait",
      "Insatisfait",
      "Ça va",
      "Satisfait",
      "Très satisfait",
    ],
  },
};

const images = [IMGFour1, IMGFour2, IMGFour3, IMGFour4, IMGFour5];

export default function StepFour({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, weight} = translations[lang];

  const ChangeProcess = () => {
    AlterProcess("step-six");
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (index) => {
    setSelectedOption(index);
  };

  // useEffect para chamar ChangeProcess 1 segundo após a seleção de um item
  useEffect(() => {
    if (selectedOption !== null) {
      const timer = setTimeout(() => {
        ChangeProcess();
      }, 1000); // 1000 milissegundos = 1 segundo

      // Limpa o timer se o componente for desmontado ou se selectedOption mudar antes do tempo
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption]); // Executa sempre que selectedOption mudar

  return (
    <div className="grid-custom-step px-4 md:px-0">
      <div className="flex flex-col justify-center items-center pt-4 w-full">
        <span
          className="text-center step-title-three font-bold pb-4 w-full"
          style={{color: "#ffffffe0", fontSize: "22px"}}
        >
          {title}
        </span>
      </div>
      <div className="flex flex-col w-full">
        {weight.map((text, index) => (
          <Card
            key={index}
            className={`w-full card-option-select flex justify-between items-center text-lg font-bold cursor-pointer z-20 ${
              selectedOption === index ? " card-actived " : ""
            }`}
            onClick={() => handleSelect(index)}
          >
            <div className="flex items-center py-1 ml-2">
              <img alt="..." src={images[index]} className="w-8 h-8" />
              <p className="ml-4 font-light text-base">{text}</p>
            </div>

            {selectedOption === index ? (
              <IoRadioButtonOn className="mr-2 text-2xl icon-active" />
            ) : (
              <IoRadioButtonOffSharp className="mr-2 text-2xl" />
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

StepFour.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it", "fn"]),
  AlterProcess: PropTypes.func,
};
