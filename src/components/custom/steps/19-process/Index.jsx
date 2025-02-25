import "./Index.Style.css";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {Card} from "@/components/ui/card";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

const translations = {
  pt: {
    title: "Qual é o seu nível de atividade física?",
    weight: [
      "Eu faço exercícios todos os dias",
      "Eu faço exercícios de vez em quando",
      "Tenho pouca atividade física",
      "Eu não faço exercícios físicos",
    ],
  },
  in: {
    title: "What is your level of physical activity?",
    weight: [
      "I exercise every day",
      "I exercise occasionally",
      "I have little physical activity",
      "I don't exercise at all",
    ],
  },
  es: {
    title: "¿Cuál es tu nivel de actividad física?",
    weight: [
      "Hago ejercicio todos los días",
      "Hago ejercicio de vez en cuando",
      "Tengo poca actividad física",
      "No hago ejercicio físico",
    ],
  },
  it: {
    title: "Qual è il tuo livello di attività fisica?",
    weight: [
      "Faccio esercizio tutti i giorni",
      "Faccio esercizio ogni tanto",
      "Ho poca attività fisica",
      "Non faccio esercizio fisico",
    ],
  },
  fn: {
    title: "Quel est votre niveau d'activité physique?",
    weight: [
      "Je fais de l'exercice tous les jours",
      "Je fais de l'exercice de temps en temps",
      "J'ai peu d'activité physique",
      "Je ne fais pas d'exercice physique",
    ],
  },
};

export default function StepNineteen({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, weight} = translations[lang];

  const ChangeProcess = () => {
    AlterProcess("step-twenty-one");
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

StepNineteen.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it", "fn"]),
  AlterProcess: PropTypes.func,
};
