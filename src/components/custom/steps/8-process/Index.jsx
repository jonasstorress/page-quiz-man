import "./Index.Style.css";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import PropTypes from "prop-types";
import {Card} from "@/components/ui/card";
import {IoMdCheckboxOutline} from "react-icons/io";
import {FaArrowRight} from "react-icons/fa6";
import {MdOutlineCheckBoxOutlineBlank} from "react-icons/md";

// Imagens
import IMGEight1 from "../../../../assets/images/steps/eight-1.svg";
import IMGEight2 from "../../../../assets/images/steps/eight-2.svg";
import IMGEight3 from "../../../../assets/images/steps/eight-3.svg";
import IMGEight4 from "../../../../assets/images/steps/eight-4.svg";
import IMGEight5 from "../../../../assets/images/steps/eight-5.svg";
import IMGEight6 from "../../../../assets/images/steps/eight-6.svg";

const translations = {
  pt: {
    title: "Como você se sente em relação ao seu desempenho sexual?",
    alter: "Selecione todas as opções aplicáveis",
    button: "Continuar",
    selections: [
      "Sobrecarregado",
      "Altamente tenso",
      "Meu humor oscila",
      "Minha confiança diminuiu",
      "Minha motivação e energia estão baixas",
      "Nenhuma das acima",
    ],
  },
  in: {
    title: "How do you feel about your sexual performance?",
    alter: "Select all applicable options",
    button: "Continue",
    selections: [
      "Overwhelmed",
      "Highly tense",
      "My mood fluctuates",
      "My confidence has decreased",
      "My motivation and energy are low",
      "None of the above",
    ],
  },
  es: {
    title: "¿Cómo te sientes acerca de tu desempeño sexual?",
    alter: "Selecciona todas las opciones aplicables",
    button: "Continuar",
    selections: [
      "Abrumado",
      "Muy tenso",
      "Mi estado de ánimo fluctúa",
      "Mi confianza ha disminuido",
      "Mi motivación y energía están bajas",
      "Ninguna de las anteriores",
    ],
  },
  it: {
    title: "Come ti senti riguardo alla tua performance sessuale?",
    alter: "Seleziona tutte le opzioni applicabili",
    button: "Continua",
    selections: [
      "Sopraffatto",
      "Molto teso",
      "Il mio umore oscilla",
      "La mia fiducia è diminuita",
      "La mia motivazione e energia sono basse",
      "Nessuna delle precedenti",
    ],
  },
  fn: {
    title: "Comment vous sentez-vous par rapport à votre performance sexuelle?",
    alter: "Sélectionnez toutes les options applicables",
    button: "Continuer",
    selections: [
      "Débordé",
      "Très tendu",
      "Mon humeur fluctue",
      "Ma confiance a diminué",
      "Ma motivation et mon énergie sont faibles",
      "Aucune des réponses ci-dessus",
    ],
  },
};

const images = [
  IMGEight1,
  IMGEight2,
  IMGEight3,
  IMGEight4,
  IMGEight5,
  IMGEight6,
];

export default function StepEight({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, alter, button, selections} = translations[lang];

  const ChangeProcess = () => {
    AlterProcess("step-ten");
  };

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedAlter, setSelectedAlter] = useState(false);

  const handleSelect = (index) => {
    if (selectedAlter) {
      setSelectedAlter(false);
    }

    setSelectedItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

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
        {selections.map((text, index) => (
          <Card
            key={index}
            className={`w-full card-option-select h-16 flex justify-between items-center text-lg font-bold cursor-pointer z-20 ${
              selectedItems.includes(index) ? " card-actived " : ""
            }`}
            onClick={() => handleSelect(index)}
          >
            <div className="flex items-center">
              <img
                alt="..."
                src={images[index]}
                className="w-8 h-8 object-contain ml-3"
              />
              <p className="text-base font-light ml-4"> {text}</p>
            </div>
            {selectedItems.includes(index) ? (
              <IoMdCheckboxOutline className="w-6 h-6 custom-icon-on mr-2" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank className="w-6 h-6 custom-icon-off mr-2" />
            )}
          </Card>
        ))}
        <Button
          className="btn-custom-next h-14 mt-6 shadow-black shadow-2xl"
          onClick={ChangeProcess}
          disabled={selectedItems.length === 0} // Desabilita o botão se nenhum item estiver selecionado
        >
          {button} <FaArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
}

StepEight.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it", "fn"]),
  AlterProcess: PropTypes.func,
};
