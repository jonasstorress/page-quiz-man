import "./Index.Style.css";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {Card} from "@/components/ui/card";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

// Imagens
import IMGSix1 from "../../../../assets/images/steps/four-1.svg";
import IMGSix2 from "../../../../assets/images/steps/six-2.svg";
import IMGSix3 from "../../../../assets/images/steps/three-4.svg";
import IMGSix4 from "../../../../assets/images/steps/six-1.svg";

const translations = {
  pt: {
    title:
      "Você está preocupado que problemas sexuais estejam afetando seus relacionamentos?",
    weight: [
      "Sim, é uma grande preocupação",
      "Sim, eu tenho em mente",
      "Eu não tenho certeza",
      "Não, de jeito nenhum",
    ],
  },
  in: {
    title:
      "Are you worried that sexual problems are affecting your relationships?",
    weight: [
      "Yes, it's a major concern",
      "Yes, it's on my mind",
      "I'm not sure",
      "No, not at all",
    ],
  },
  es: {
    title:
      "¿Te preocupa que los problemas sexuales estén afectando tus relaciones?",
    weight: [
      "Sí, es una gran preocupación",
      "Sí, lo tengo en mente",
      "No estoy seguro",
      "No, para nada",
    ],
  },
  it: {
    title:
      "Sei preoccupato che i problemi sessuali stiano influenzando le tue relazioni?",
    weight: [
      "Sì, è una grande preoccupazione",
      "Sì, ci penso",
      "Non sono sicuro",
      "No, per niente",
    ],
  },
  fn: {
    title:
      "Êtes-vous inquiet que des problèmes sexuels affectent vos relations?",
    weight: [
      "Oui, c'est une préoccupation majeure",
      "Oui, j'y pense",
      "Je ne suis pas sûr",
      "Non, pas du tout",
    ],
  },
};
const images = [IMGSix1, IMGSix2, IMGSix3, IMGSix4];

export default function StepFour({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, weight} = translations[lang];

  const ChangeProcess = () => {
    AlterProcess("step-twelve");
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
