import "./Index.Style.css";

import {useState} from "react";
import PropTypes from "prop-types";

import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

import {FaArrowRight} from "react-icons/fa6";
import {IoMdCheckboxOutline} from "react-icons/io";
import {MdOutlineCheckBoxOutlineBlank} from "react-icons/md";

// Imagens
import IMGfour1 from "../../../../assets/images/steps/four-1.png";
import IMGfour2 from "../../../../assets/images/steps/four-2.png";
import IMGfour3 from "../../../../assets/images/steps/four-3.png";
import IMGfour4 from "../../../../assets/images/steps/four-4.png";

const translations = {
  pt: {
    title: "Selecione as áreas problemáticas",
    button: "Continuar",
    values: [
      "Peito Fraco",
      "Braços Magros",
      "Barriga de Cerveja",
      "Pernas Magras",
    ],
  },
  in: {
    title: "Select the problem areas",
    button: "Continue",
    values: ["Weak Chest", "Thin Arms", "Beer Belly", "Thin Legs"],
  },
  es: {
    title: "Selecciona las áreas problemáticas",
    button: "Continuar",
    values: [
      "Pecho Débil",
      "Brazos Delgados",
      "Barriga Cervecera",
      "Piernas Delgadas",
    ],
  },
  it: {
    title: "Seleziona le aree problematiche",
    button: "Continua",
    values: ["Petto Debole", "Braccia Magre", "Pancia da Birra", "Gambe Magre"],
  },
};

const images = [IMGfour1, IMGfour2, IMGfour3, IMGfour4];

export default function StepFour({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, button, values} = translations[lang];
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelection = (index) => {
    setSelectedItems((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const isAnySelected = selectedItems.length > 0;

  return (
    <div className="grid-custom-step px-4 md:px-0">
      <div className="flex flex-col justify-center items-center pt-8 w-full">
        <span className="text-white text-center md:text-start step-title-four font-bold pb-8 w-full">
          {title}
        </span>
      </div>
      <div className="flex flex-col w-full gap-4 mb-4">
        {values.map((w, index) => (
          <Card
            key={index}
            className={`card-custom-four flex items-center relative overflow-hidden ${
              selectedItems.includes(index) ? "card-custom-active" : ""
            }`}
            onClick={() => toggleSelection(index)}
          >
            <div className="flex flex-col h-full ">
              {selectedItems.includes(index) ? (
                <IoMdCheckboxOutline className="w-6 h-6 custom-icon-on" />
              ) : (
                <MdOutlineCheckBoxOutlineBlank className="w-6 h-6 custom-icon-off" />
              )}
            </div>
            <p className="z-10 relative">{w}</p>
            <div className="card-img-custom-four">
              <img alt={w} src={images[index]} className="mr-5" />
            </div>
          </Card>
        ))}
        <div className="flex items-end justify-end pt-4 pb-12">
          <Button
            className="btn-custom-next flex justify-between items-center w-full lg:w-[40%] xl:w-[36%]"
            onClick={() => AlterProcess("step-five")}
            disabled={!isAnySelected}
          >
            {button} <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

StepFour.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it"]),
  AlterProcess: PropTypes.func,
};
