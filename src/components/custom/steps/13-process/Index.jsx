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
    title: "Você notou uma diminuição no desejo sexual no último ano?",
    weight: [
      "Sim, uma diminuição drástica",
      "Talvez, não tenho certeza",
      "Não, mas eu quero mais",
      "Não, me sinto bem",
    ],
  },
  in: {
    title: "Have you noticed a decrease in sexual desire in the past year?",
    weight: [
      "Yes, a drastic decrease",
      "Maybe, I'm not sure",
      "No, but I want more",
      "No, I feel good",
    ],
  },
  es: {
    title: "¿Has notado una disminución en el deseo sexual en el último año?",
    weight: [
      "Sí, una disminución drástica",
      "Tal vez, no estoy seguro",
      "No, pero quiero más",
      "No, me siento bien",
    ],
  },
  it: {
    title:
      "Hai notato una diminuzione del desiderio sessuale nell'ultimo anno?",
    weight: [
      "Sì, una diminuzione drastica",
      "Forse, non sono sicuro",
      "No, ma vorrei di più",
      "No, mi sento bene",
    ],
  },
  fn: {
    title:
      "Avez-vous remarqué une diminution du désir sexuel au cours de la dernière année ?",
    weight: [
      "Oui, une diminution drastique",
      "Peut-être, je ne suis pas sûr",
      "Non, mais j'en veux plus",
      "Non, je me sens bien",
    ],
  },
};
const images = [IMGSix1, IMGSix2, IMGSix3, IMGSix4];

export default function StepThirteen({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, weight} = translations[lang];

  const ChangeProcess = () => {
    AlterProcess("step-fifteen");
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

StepThirteen.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it", "fn"]),
  AlterProcess: PropTypes.func,
};
