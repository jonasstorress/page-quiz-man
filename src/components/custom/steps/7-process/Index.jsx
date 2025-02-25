import "./Index.Style.css";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {Card} from "@/components/ui/card";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

// Imagens
import IMGSix1 from "../../../../assets/images/steps/six-1.svg"; // ok
import IMGSix2 from "../../../../assets/images/steps/seven-2.svg";
import IMGSix3 from "../../../../assets/images/steps/six-2.svg"; // ok
import IMGSix4 from "../../../../assets/images/steps/seven-4.svg";
import IMGSix5 from "../../../../assets/images/steps/six-4.svg"; // ok

const translations = {
  pt: {
    title: "Você tem uma ereção completa toda vez que tem relações sexuais?",
    weight: [
      "Sim, sem problemas",
      "Sim, mas eu gostaria que fosse mais forte",
      "Nem sempre",
      "Quase nunca",
      "Prefiro não responder",
    ],
  },
  in: {
    title: "Do you have a full erection every time you have sex?",
    weight: [
      "Yes, without any problems",
      "Yes, but I wish it were stronger",
      "Not always",
      "Almost never",
      "Prefer not to answer",
    ],
  },
  es: {
    title:
      "¿Tienes una erección completa cada vez que tienes relaciones sexuales?",
    weight: [
      "Sí, sin problemas",
      "Sí, pero me gustaría que fuera más fuerte",
      "No siempre",
      "Casi nunca",
      "Prefiero no responder",
    ],
  },
  it: {
    title: "Hai un'erezione completa ogni volta che fai sesso?",
    weight: [
      "Sì, senza problemi",
      "Sì, ma vorrei che fosse più forte",
      "Non sempre",
      "Quasi mai",
      "Preferisco non rispondere",
    ],
  },
  fn: {
    title: "Avez-vous une érection complète à chaque rapport sexuel?",
    weight: [
      "Oui, sans aucun problème",
      "Oui, mais j'aimerais qu'elle soit plus forte",
      "Pas toujours",
      "Presque jamais",
      "Je préfère ne pas répondre",
    ],
  },
};

const images = [IMGSix1, IMGSix2, IMGSix3, IMGSix4, IMGSix5];

export default function StepSeven({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, weight} = translations[lang];

  const ChangeProcess = () => {
    AlterProcess("step-nine");
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

StepSeven.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it", "fn"]),
  AlterProcess: PropTypes.func,
};
