import "./Index.Style.css";
import PropTypes from "prop-types";
import {Card} from "@/components/ui/card";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";
import {useState, useEffect} from "react"; // Importando useEffect

// Imagens
import IMGone1 from "../../../../assets/images/steps/one-1.png";
import IMGone2 from "../../../../assets/images/steps/one-2.png";
import IMGone3 from "../../../../assets/images/steps/one-3.png";

const translations = {
  pt: {
    title: "Escolha seu tipo de corpo",
    weight: ["Magro", "Médio", "Pesado"],
  },
  in: {
    title: "Choose your body type",
    weight: ["Slim", "Medium", "Heavy"],
  },
  es: {
    title: "Elige tu tipo de cuerpo",
    weight: ["Delgado", "Medio", "Pesado"],
  },
  it: {
    title: "Scegli il tuo tipo di corpo",
    weight: ["Magro", "Medio", "Pesante"],
  },
  fn: {
    title: "Choisissez votre type de corps",
    weight: ["Mince", "Moyen", "Lourd"],
  },
};

const images = [IMGone1, IMGone2, IMGone3];

export default function StepOne({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, weight} = translations[lang];

  const ChangeProcess = () => {
    AlterProcess("step-three");
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
        <span className="text-white text-center step-title-one font-semibold pb-4 w-full">
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
            <div className="flex items-center">
              <img alt="..." src={images[index]} className="w-16 h-16" />
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

StepOne.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it", "fn"]),
  AlterProcess: PropTypes.func,
};
