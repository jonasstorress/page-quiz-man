import "./Index.Style.css";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {Card} from "@/components/ui/card";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

const translations = {
  pt: {
    title: "Defina sua meta de tempo",
    alter:
      "Escolha quanto tempo você dedicará a cada dia para atingir seu objetivo",
    weight: ["5 min/dia", "10 min/dia", "15 min/dia", "20+ min/dia"],
  },
  in: {
    title: "Set your time goal",
    alter: "Choose how much time you will dedicate each day to reach your goal",
    weight: ["5 min/day", "10 min/day", "15 min/day", "20+ min/day"],
  },
  es: {
    title: "Define tu meta de tiempo",
    alter: "Elige cuánto tiempo dedicarás cada día para alcanzar tu objetivo",
    weight: ["5 min/día", "10 min/día", "15 min/día", "20+ min/día"],
  },
  it: {
    title: "Imposta il tuo obiettivo di tempo",
    alter:
      "Scegli quanto tempo dedicherai ogni giorno per raggiungere il tuo obiettivo",
    weight: [
      "5 min/giorno",
      "10 min/giorno",
      "15 min/giorno",
      "20+ min/giorno",
    ],
  },
  fn: {
    title: "Définissez votre objectif de temps",
    alter:
      "Choisissez combien de temps vous consacrerez chaque jour pour atteindre votre objectif",
    weight: ["5 min/jour", "10 min/jour", "15 min/jour", "20+ min/jour"],
  },
};

export default function StepTwentyFive({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, alter, weight} = translations[lang];

  const ChangeProcess = () => {
    AlterProcess("result");
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
          className="text-white text-center step-title-two font-bold pb-4 w-full"
          style={{color: "#ffffffe0", fontSize: "22px"}}
        >
          {title}
        </span>
        <p
          className="pb-6 text-base font-bolder text-center"
          style={{color: "#ffffffa3"}}
        >
          {alter}
        </p>
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

StepTwentyFive.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it", "fn"]),
  AlterProcess: PropTypes.func,
};
