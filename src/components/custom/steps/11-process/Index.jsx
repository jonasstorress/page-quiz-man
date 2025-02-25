import "./Index.Style.css";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {Card} from "@/components/ui/card";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

const translations = {
  pt: {
    title: "Quantas vezes em média você tem atividade sexual por mês?",
    weight: [
      "Menos de 3 vezes por mês",
      "3-6 vezes por mês",
      "7 a 15 vezes por mês",
      "Mais de 15 vezes por mês",
      "Prefiro não responder",
    ],
  },
  in: {
    title: "On average, how many times do you have sexual activity per month?",
    weight: [
      "Less than 3 times per month",
      "3-6 times per month",
      "7 to 15 times per month",
      "More than 15 times per month",
      "Prefer not to answer",
    ],
  },
  es: {
    title: "¿Cuántas veces en promedio tienes actividad sexual al mes?",
    weight: [
      "Menos de 3 veces al mes",
      "3-6 veces al mes",
      "7 a 15 veces al mes",
      "Más de 15 veces al mes",
      "Prefiero no responder",
    ],
  },
  it: {
    title: "Quante volte in media hai attività sessuale al mese?",
    weight: [
      "Meno di 3 volte al mese",
      "3-6 volte al mese",
      "7 a 15 volte al mese",
      "Più di 15 volte al mese",
      "Preferisco non rispondere",
    ],
  },
  fn: {
    title:
      "En moyenne, combien de fois avez-vous une activité sexuelle par mois?",
    weight: [
      "Moins de 3 fois par mois",
      "3 à 6 fois par mois",
      "7 à 15 fois par mois",
      "Plus de 15 fois par mois",
      "Je préfère ne pas répondre",
    ],
  },
};
export default function StepEleven({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, weight} = translations[lang];

  const ChangeProcess = () => {
    AlterProcess("step-thirteen");
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

StepEleven.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it", "fn"]),
  AlterProcess: PropTypes.func,
};
