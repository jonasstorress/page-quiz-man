import "./Index.Style.css";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import PropTypes from "prop-types";
import {Card} from "@/components/ui/card";
import {IoMdCheckboxOutline} from "react-icons/io";
import {FaArrowRight} from "react-icons/fa6";
import {MdOutlineCheckBoxOutlineBlank} from "react-icons/md";

// Imagens
import IMGtwo1 from "../../../../assets/images/steps/two-1.png";
import IMGtwo2 from "../../../../assets/images/steps/two-2.png";
import IMGtwo3 from "../../../../assets/images/steps/two-3.png";
import IMGtwo4 from "../../../../assets/images/steps/two-4.png";

const translations = {
  pt: {
    title: "Escolha seus objetivos",
    alter: "Selecione todas as opções aplicáveis",
    button: "Continuar",
    selections: [
      "Durar mais durante o sexo",
      "Tenha orgasmos mais intensos",
      "Obtenha ereções mais firmes",
    ],
  },
  in: {
    title: "Choose your goals",
    alter: "Select all applicable options",
    button: "Continue",
    selections: [
      "Last longer during sex",
      "Have more intense orgasms",
      "Get firmer erections",
    ],
  },
  es: {
    title: "Elige tus objetivos",
    alter: "Selecciona todas las opciones aplicables",
    button: "Continuar",
    selections: [
      "Durar más durante el sexo",
      "Tener orgasmos más intensos",
      "Obtener erecciones más firmes",
    ],
  },
  it: {
    title: "Scegli i tuoi obiettivi",
    alter: "Seleziona tutte le opzioni applicabili",
    button: "Continua",
    selections: [
      "Durare più a lungo durante il sesso",
      "Avere orgasmi più intensi",
      "Ottenere erezioni più ferme",
    ],
  },
  fn: {
    title: "Choisissez vos objectifs",
    alter: "Sélectionnez toutes les options applicables",
    button: "Continuer",
    selections: [
      "Durer plus longtemps pendant les rapports sexuels",
      "Avoir des orgasmes plus intenses",
      "Obtenir des érections plus fermes",
    ],
  },
};

const images = [IMGtwo1, IMGtwo2, IMGtwo3, IMGtwo4];

export default function StepTwo({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, alter, button, selections} = translations[lang];

  const ChangeProcess = () => {
    AlterProcess("step-four");
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
                className="w-16 h-12 object-contain"
              />
              <p className="text-base font-light"> {text}</p>
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

StepTwo.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it", "fn"]),
  AlterProcess: PropTypes.func,
};
