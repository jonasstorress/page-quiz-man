import "./Index.Style.css";
import PropTypes from "prop-types";
import {FaArrowRight} from "react-icons/fa6";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {useState} from "react";

const translations = {
  pt: {
    title: "O quanto você se identifica com essa afirmação?",
    subtitle:
      "Depois de uma ou duas semanas comendo de forma mais saudável ou praticando exercícios, costumo voltar à minha antiga rotina.",
    escala: ["De jeito nenhum", "Completamente"],
    button: "Continuar",
  },
  in: {
    title: "How much do you identify with this statement?",
    subtitle:
      "After one or two weeks of eating healthier or exercising, I usually go back to my old routine.",
    escala: ["Not at all", "Completely"],
    button: "Continue",
  },
  es: {
    title: "¿Cuánto te identificas con esta afirmación?",
    subtitle:
      "Después de una o dos semanas comiendo más saludable o haciendo ejercicio, suelo volver a mi antigua rutina.",
    escala: ["Para nada", "Completamente"],
    button: "Continuar",
  },
  it: {
    title: "Quanto ti identifichi con questa affermazione?",
    subtitle:
      "Dopo una o due settimane di alimentazione più sana o di esercizio fisico, di solito torno alla mia vecchia routine.",
    escala: ["Per niente", "Completamente"],
    button: "Continua",
  },
};

export default function StepTwentyThree({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, subtitle, button, escala} = translations[lang];

  // Estado para armazenar a opção selecionada
  const [selectedOption, setSelectedOption] = useState(null);

  // Função para lidar com a seleção de uma opção
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  // Função para avançar para a próxima etapa
  const handleNextStep = () => {
    if (selectedOption !== null) {
      AlterProcess("step-twenty-four");
    }
  };

  return (
    <div className="grid-custom-step px-4 md:px-0">
      <div className="flex flex-col justify-center items-center pt-8 w-full">
        <span className="text-white text-center lg:text-xl pb-4 w-full">
          {title}
        </span>
      </div>
      <div className="flex flex-col w-full gap-4 mb-4">
        <Card className="card-custom-frase bg-inherit rounded-none text-white font-bold">
          {subtitle}
        </Card>
        <div className="flex flex-row items-center justify-between space-x-4">
          {[1, 2, 3, 4, 5].map((option) => (
            <span
              key={option}
              className={`btn-custom-med ${
                selectedOption === option ? "btn-custom-med-active" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between text-white">
          <p>{escala[0]}</p>
          <p>{escala[1]}</p>
        </div>
        <div className="flex items-end justify-end pt-4 pb-12">
          <Button
            className="btn-custom-next flex justify-between items-center w-full lg:w-[40%] xl:w-[36%]"
            onClick={handleNextStep}
            disabled={selectedOption === null} // Desabilita o botão se nenhuma opção for selecionada
          >
            {button} <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

StepTwentyThree.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it"]),
  AlterProcess: PropTypes.func,
};
