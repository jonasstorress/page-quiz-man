import "./Index.Style.css";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {Card} from "@/components/ui/card";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

const translations = {
  pt: {
    title: "Qual é seu estado civil?",
    weight: ["Casado", "Em uma relação", "Solteiro", "Prefiro não responder"],
  },
  in: {
    title: "What is your marital status?",
    weight: ["Married", "In a relationship", "Single", "Prefer not to answer"],
  },
  es: {
    title: "¿Cuál es tu estado civil?",
    weight: ["Casado", "En una relación", "Soltero", "Prefiero no responder"],
  },
  it: {
    title: "Qual è il tuo stato civile?",
    weight: [
      "Sposato",
      "In una relazione",
      "Single",
      "Preferisco non rispondere",
    ],
  },
  fn: {
    title: "Quel est votre état civil?",
    weight: ["Marié", "En couple", "Célibataire", "Je préfère ne pas répondre"],
  },
};

export default function StepNine({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, weight} = translations[lang];

  const ChangeProcess = () => {
    AlterProcess("step-eleven");
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
            <p className="ml-4 font-light text-base py-2">{text}</p>

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

StepNine.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it", "fn"]),
  AlterProcess: PropTypes.func,
};
