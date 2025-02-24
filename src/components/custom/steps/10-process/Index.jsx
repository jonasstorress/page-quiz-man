import "./Index.Style.css";
import {useState} from "react";
import PropTypes from "prop-types";
import {FaArrowRight} from "react-icons/fa6";
import {IoMdCheckboxOutline} from "react-icons/io";
import {IoMdClose} from "react-icons/io";
import {MdOutlineCheckBoxOutlineBlank} from "react-icons/md";

// IMG's
import IMGten from "../../../../assets/images/steps/ten.png";
import {Card} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";

const translations = {
  pt: {
    title: "Você tem dificuldades com algum dos seguintes itens?",
    subtitle:
      "Ajustaremos o plano para proteger essas partes do corpo de mais danos",
    button: "Entendi",
    selections: [
      "Articulações",
      "Joelhos",
      "Costas",
      "Parte inferior das costas",
    ],
    orter: "Nenhuma das opções acima",
  },
  in: {
    title: "Do you have difficulties with any of the following items?",
    subtitle:
      "We will adjust the plan to protect these parts of the body from further damage",
    button: "Got it",
    selections: ["Joints", "Knees", "Back", "Lower back"],
    orter: "None of the above",
  },
  es: {
    title: "¿Tienes dificultades con alguno de los siguientes elementos?",
    subtitle:
      "Ajustaremos el plan para proteger estas partes del cuerpo de más daños",
    button: "Entendido",
    selections: [
      "Articulaciones",
      "Rodillas",
      "Espalda",
      "Parte baja de la espalda",
    ],
    orter: "Ninguna de las opciones anteriores",
  },
  it: {
    title: "Hai difficoltà con uno dei seguenti elementi?",
    subtitle:
      "Adatteremo il piano per proteggere queste parti del corpo da ulteriori danni",
    button: "Ho capito",
    selections: [
      "Articolazioni",
      "Ginocchia",
      "Schiena",
      "Parte bassa della schiena",
    ],
    orter: "Nessuna delle opzioni precedenti",
  },
};

export default function StepTen({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, subtitle, selections, button, orter} = translations[lang];
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
        <span className="text-white text-center md:text-start lg:text-3xl font-bold pb-4 w-full">
          {title}
        </span>
        <p className="text-white text-lg pb-6">{subtitle}</p>
      </div>
      <div className="flex flex-col w-full gap-2 relative">
        <div className="w-full flex flex-col relative">
          {selections.map((text, index) => (
            <Card
              key={index}
              className={`w-[70%] card-option-select flex items-center text-lg font-bold cursor-pointer z-20 
                        ${
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
          <Separator className="mb-6 mt-2 line-color-custom w-[70%]" />
          <Card
            className={`w-[70%] card-option-select flex items-center text-lg font-bold cursor-pointer z-20 ${
              selectedAlter ? " card-actived " : ""
            }`}
            onClick={handleAlterSelect}
          >
            <IoMdClose className="w-6 h-6 custom-icon-on mr-2" />

            {orter}
          </Card>
          <div className="absolute inset-0 flex items-center justify-end ">
            <img alt="..." src={IMGten} className="w-32" />
          </div>
        </div>
        <div className="flex items-end justify-end pt-4 pb-12">
          <Button
            className="btn-custom-next flex justify-between items-center w-full lg:w-[40%] xl:w-[36%]"
            onClick={() => AlterProcess("step-eleven")}
            disabled={selectedItems.length === 0 && !selectedAlter}
          >
            {button} <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

StepTen.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it"]),
  AlterProcess: PropTypes.func,
};
