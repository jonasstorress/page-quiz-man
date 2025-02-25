import "./Index.Style.css";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {Card} from "@/components/ui/card";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

// Imagens
import IMGthree1 from "../../../../assets/images/steps/three-1.svg";
import IMGthree2 from "../../../../assets/images/steps/three-2.svg";
import IMGthree3 from "../../../../assets/images/steps/three-3.svg";
import IMGthree4 from "../../../../assets/images/steps/three-4.svg";

const translations = {
  pt: {
    title: "Você já treinou os músculos do assoalho pélvico?",
    weight: [
      "Sim, claro",
      "Não, eu só ouvi falar deles",
      "Não, nunca",
      "O que são os músculos do assoalho pélvico?",
    ],
  },
  in: {
    title: "Have you ever trained your pelvic floor muscles?",
    weight: [
      "Yes, of course",
      "No, I've only heard of them",
      "No, never",
      "What are pelvic floor muscles?",
    ],
  },
  es: {
    title: "¿Alguna vez has entrenado los músculos del suelo pélvico?",
    weight: [
      "Sí, por supuesto",
      "No, solo he oído hablar de ellos",
      "No, nunca",
      "¿Qué son los músculos del suelo pélvico?",
    ],
  },
  it: {
    title: "Hai mai allenato i muscoli del pavimento pelvico?",
    weight: [
      "Sì, certo",
      "No, ne ho solo sentito parlare",
      "No, mai",
      "Cosa sono i muscoli del pavimento pelvico?",
    ],
  },
  fn: {
    title: "Avez-vous déjà entraîné vos muscles du plancher pelvien?",
    weight: [
      "Oui, bien sûr",
      "Non, j'en ai seulement entendu parler",
      "Non, jamais",
      "Que sont les muscles du plancher pelvien?",
    ],
  },
};

const images = [IMGthree1, IMGthree2, IMGthree3, IMGthree4];

export default function StepThree({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, weight} = translations[lang];

  const ChangeProcess = () => {
    AlterProcess("step-five");
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

StepThree.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it", "fn"]),
  AlterProcess: PropTypes.func,
};
