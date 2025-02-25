import "./Index.Style.css";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {Card} from "@/components/ui/card";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

const translations = {
  pt: {
    title: "Você bebe álcool?",
    weight: [
      "Eu não bebo nada",
      "Eu raramente bebo",
      "Menos de 10 vezes por mês",
      "10-20 vezes por mês",
      "Mais de 20 vezes por mês",
    ],
  },
  in: {
    title: "Do you drink alcohol?",
    weight: [
      "I don't drink at all",
      "I rarely drink",
      "Less than 10 times a month",
      "10-20 times a month",
      "More than 20 times a month",
    ],
  },
  es: {
    title: "¿Bebes alcohol?",
    weight: [
      "No bebo nada",
      "Rara vez bebo",
      "Menos de 10 veces al mes",
      "10-20 veces al mes",
      "Más de 20 veces al mes",
    ],
  },
  it: {
    title: "Bevi alcolici?",
    weight: [
      "Non bevo affatto",
      "Bevo raramente",
      "Meno di 10 volte al mese",
      "10-20 volte al mese",
      "Più di 20 volte al mese",
    ],
  },
  fn: {
    title: "Buvez-vous de l'alcool ?",
    weight: [
      "Je ne bois pas du tout",
      "Je bois rarement",
      "Moins de 10 fois par mois",
      "10-20 fois par mois",
      "Plus de 20 fois par mois",
    ],
  },
};
export default function StepSixteen({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, weight} = translations[lang];

  const ChangeProcess = () => {
    AlterProcess("step-eighteen");
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

StepSixteen.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it", "fn"]),
  AlterProcess: PropTypes.func,
};
