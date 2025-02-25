import "./Index.Style.css";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {Card} from "@/components/ui/card";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

// Imagens
import IMGSix1 from "../../../../assets/images/steps/six-2.svg";
import IMGSix2 from "../../../../assets/images/steps/four-1.svg";
import IMGSix3 from "../../../../assets/images/steps/three-4.svg";
import IMGSix4 from "../../../../assets/images/steps/six-1.svg";

const translations = {
  pt: {
    title: "“Eu evito sexo porque estou preocupado com meu desempenho”",
    alter: "Você se identifica com esta afirmação?",
    weight: ["Sim", "Um pouco", "Não", "Eu não tenho certeza"],
  },
  in: {
    title: "“I avoid sex because I'm worried about my performance”",
    alter: "Do you identify with this statement?",
    weight: ["Yes", "A little", "No", "I'm not sure"],
  },
  es: {
    title: "“Evito el sexo porque estoy preocupado por mi desempeño”",
    alter: "¿Te identificas con esta afirmación?",
    weight: ["Sí", "Un poco", "No", "No estoy seguro"],
  },
  it: {
    title: "“Evito il sesso perché sono preoccupato per la mia performance”",
    alter: "Ti identifichi con questa affermazione?",
    weight: ["Sì", "Un po'", "No", "Non sono sicuro"],
  },
  fn: {
    title:
      "“J'évite les rapports sexuels parce que je suis inquiet pour ma performance”",
    alter: "Vous identifiez-vous à cette déclaration ?",
    weight: ["Oui", "Un peu", "Non", "Je ne suis pas sûr"],
  },
};
const images = [IMGSix1, IMGSix2, IMGSix3, IMGSix4];

export default function StepTwelve({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, alter, weight} = translations[lang];

  const ChangeProcess = () => {
    AlterProcess("step-fourteen");
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
          style={{color: "#ffffffe0"}}
        >
          {title}
        </span>
        <p className="pb-6 text-base font-bolder" style={{color: "#ffffffa3"}}>
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

StepTwelve.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it", "fn"]),
  AlterProcess: PropTypes.func,
};
