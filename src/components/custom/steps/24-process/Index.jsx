import "./Index.Style.css";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {Card} from "@/components/ui/card";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

const translations = {
  pt: {
    title:
      "Quanto tempo você gostaria de durar para satisfazer completamente seu parceiro?",
    weight: [
      "5-10 minutos",
      "10-15 minutos",
      "15-20 minutos",
      "20-30 minutos",
      "30+ minutos",
    ],
  },
  in: {
    title: "How long would you like to last to fully satisfy your partner?",
    weight: [
      "5-10 minutes",
      "10-15 minutes",
      "15-20 minutes",
      "20-30 minutes",
      "30+ minutes",
    ],
  },
  es: {
    title:
      "¿Cuánto tiempo te gustaría durar para satisfacer completamente a tu pareja?",
    weight: [
      "5-10 minutos",
      "10-15 minutos",
      "15-20 minutos",
      "20-30 minutos",
      "30+ minutos",
    ],
  },
  it: {
    title:
      "Quanto tempo ti piacerebbe durare per soddisfare completamente il tuo partner?",
    weight: [
      "5-10 minuti",
      "10-15 minuti",
      "15-20 minuti",
      "20-30 minuti",
      "30+ minuti",
    ],
  },
  fn: {
    title:
      "Combien de temps aimeriez-vous durer pour satisfaire pleinement votre partenaire ?",
    weight: [
      "5-10 minutes",
      "10-15 minutes",
      "15-20 minutes",
      "20-30 minutes",
      "30+ minutes",
    ],
  },
};

export default function StepTwentyFour({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, weight} = translations[lang];

  const ChangeProcess = () => {
    AlterProcess("step-twenty-six");
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

StepTwentyFour.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it", "fn"]),
  AlterProcess: PropTypes.func,
};
