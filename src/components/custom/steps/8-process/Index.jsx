import "./Index.Style.css";
import {useState} from "react";
import PropTypes from "prop-types";
import {FaArrowRight} from "react-icons/fa6";
import {IoMdCheckboxOutline} from "react-icons/io";
import {IoMdClose} from "react-icons/io";
import {MdOutlineCheckBoxOutlineBlank} from "react-icons/md";

import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";

const translations = {
  pt: {
    title: "Faz parte da sua vida?",
    button: "Continuar",
    selections: [
      "Caminhando ao ar livre 🚶‍♂️‍",
      "Exercício matinal 🌅",
      "Passear com meu animal de estimação 🐕",
      "Subir escadas com frequência 🪜",
      "Passar tempo com meu filho 👶",
      "Assuntos domésticos 🛠️",
    ],
    alter: "Nenhuma das acima",
  },
  in: {
    title: "Is this part of your life?",
    button: "Continue",
    selections: [
      "Walking outdoors 🚶‍♂️‍",
      "Morning exercise 🌅",
      "Walking my pet 🐕",
      "Climbing stairs frequently 🪜",
      "Spending time with my child 👶",
      "Household chores 🛠️",
    ],
    alter: "None of the above",
  },
  es: {
    title: "¿Forma parte de tu vida?",
    button: "Continuar",
    selections: [
      "Caminando al aire libre 🚶‍♂️‍",
      "Ejercicio matutino 🌅",
      "Pasear con mi mascota 🐕",
      "Subir escaleras con frecuencia 🪜",
      "Pasar tiempo con mi hijo 👶",
      "Tareas domésticas 🛠️",
    ],
    alter: "Ninguna de las anteriores",
  },
  it: {
    title: "Fa parte della tua vita?",
    button: "Continua",
    selections: [
      "Camminare all'aperto 🚶‍♂️‍",
      "Esercizio mattutino 🌅",
      "Portare a spasso il mio animale domestico 🐕",
      "Salire le scale frequentemente 🪜",
      "Passare del tempo con mio figlio 👶",
      "Lavori domestici 🛠️",
    ],
    alter: "Nessuna delle precedenti",
  },
};

export default function StepEight({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, alter, button, selections} = translations[lang];
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

  const handleAlterSelect = () => {
    setSelectedItems([]);
    setSelectedAlter(true);
  };

  return (
    <div className="grid-custom-step px-4 md:px-0 relative">
      <div className="flex flex-col justify-center items-center pt-8 w-full">
        <span className="text-white text-center md:text-start lg:text-4xl font-bold pb-8 w-full">
          {title}
        </span>
      </div>
      <div className="flex flex-col w-full relative">
        <div className="w-full flex flex-col relative">
          {selections.map((text, index) => (
            <Card
              key={index}
              className={`w-full card-option-select flex items-center text-lg font-bold cursor-pointer z-20 ${
                selectedItems.includes(index) ? " card-actived " : ""
              }`}
              onClick={() => handleSelect(index)}
            >
              {selectedItems.includes(index) ? (
                <IoMdCheckboxOutline className="w-6 h-6 custom-icon-on mr-2" />
              ) : (
                <MdOutlineCheckBoxOutlineBlank className="w-6 h-6 custom-icon-off mr-2" />
              )}
              {text}
            </Card>
          ))}
          <Separator className="mb-6 mt-2 line-color-custom" />
          <Card
            className={`w-full card-option-select flex items-center text-lg font-bold cursor-pointer z-20 ${
              selectedAlter ? " card-actived " : ""
            }`}
            onClick={handleAlterSelect}
          >
            <IoMdClose className="w-6 h-6 custom-icon-on mr-2" />

            {alter}
          </Card>
        </div>
        <div className="flex items-end justify-end pt-4 pb-12">
          <Button
            className="btn-custom-next flex justify-between items-center w-full lg:w-[40%] xl:w-[36%]"
            onClick={() => AlterProcess("step-nine")}
            disabled={selectedItems.length === 0 && !selectedAlter}
          >
            {button} <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

StepEight.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it"]),
  AlterProcess: PropTypes.func,
};
