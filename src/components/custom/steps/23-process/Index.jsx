import "./Index.Style.css";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {Card} from "@/components/ui/card";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

// Imagens
import IMGSix1 from "../../../../assets/images/steps/six-2.svg";
import IMGSix2 from "../../../../assets/images/steps/six-1.svg";
import IMGSix3 from "../../../../assets/images/steps/four-1.svg";
import IMGSix4 from "../../../../assets/images/steps/three-4.svg";

const translations = {
  pt: {
    title:
      "Você sente que seu parceiro fica decepcionado depois da intimidade?",
    weight: [
      "Sim, acho que sim.",
      "Às vezes",
      "Eu não tenho certeza",
      "Definitivamente não",
    ],
  },
  in: {
    title: "Do you feel like your partner gets disappointed after intimacy?",
    weight: ["Yes, I think so.", "Sometimes", "I'm not sure", "Definitely not"],
  },
  es: {
    title: "¿Sientes que tu pareja se decepciona después de la intimidad?",
    weight: [
      "Sí, creo que sí.",
      "A veces",
      "No estoy seguro",
      "Definitivamente no",
    ],
  },
  it: {
    title: "Senti che il tuo partner si sente deluso dopo l'intimità?",
    weight: [
      "Sì, penso di sì.",
      "A volte",
      "Non sono sicuro",
      "Definitivamente no",
    ],
  },
  fn: {
    title:
      "Avez-vous l'impression que votre partenaire est déçu après l'intimité ?",
    weight: [
      "Oui, je pense que oui.",
      "Parfois",
      "Je ne suis pas sûr",
      "Certainement pas",
    ],
  },
};

const images = [IMGSix1, IMGSix2, IMGSix3, IMGSix4];

export default function StepTwentyThree({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, weight} = translations[lang];

  const ChangeProcess = () => {
    AlterProcess("step-twenty-five");
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

StepTwentyThree.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it", "fn"]),
  AlterProcess: PropTypes.func,
};
