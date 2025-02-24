import "./Index.Style.css";
import PropTypes from "prop-types";
import {FaArrowRight} from "react-icons/fa6";
import {Button} from "@/components/ui/button";

// IMG's
import IMGninePt from "../../../../assets/images/steps/nine-pt.png";
import IMGnineIt from "../../../../assets/images/steps/nine-it.png";
import IMGnineEs from "../../../../assets/images/steps/nine-es.png";
import IMGnineIn from "../../../../assets/images/steps/nine-in.png";

const translations = {
  pt: {
    title: "Apenas 2 semanas para o primeiro resultado",
    subtitle: "Prevemos que você verá melhorias até o final da segunda semana",
    button: "Entendi",
    info: "*Com base em dados de 1,3 milhão de treinos",
    image: IMGninePt,
  },
  in: {
    title: "Just 2 weeks for the first results",
    subtitle:
      "We predict you will see improvements by the end of the second week",
    button: "Got it",
    info: "*Based on data from 1.3 million workouts",
    image: IMGnineIn,
  },
  es: {
    title: "Solo 2 semanas para los primeros resultados",
    subtitle: "Predecimos que verás mejoras para el final de la segunda semana",
    button: "Entendido",
    info: "*Basado en datos de 1,3 millones de entrenamientos",
    image: IMGnineEs,
  },
  it: {
    title: "Solo 2 settimane per i primi risultati",
    subtitle:
      "Prevediamo che vedrai miglioramenti entro la fine della seconda settimana",
    button: "Ho capito",
    info: "*Basato su dati di 1,3 milioni di allenamenti",
    image: IMGnineIt,
  },
};

export default function StepNine({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, subtitle, button, info, image} = translations[lang];

  return (
    <div className="grid-custom-step px-4 md:px-0">
      <div className="flex flex-col justify-center items-center pt-8 w-full">
        <span className="text-white text-center lg:text-4xl font-bold pb-4 w-full">
          {title}
        </span>
        <p className="text-white text-lg text-center leading-tight pb-8">
          {subtitle}
        </p>
      </div>
      <div className="flex flex-col w-full gap-4 mb-4">
        <img alt="..." src={image} className="mt-4" />
        <p className="text-center text-custom-muted pt-8">{info}</p>
        <div className="flex items-end justify-end pt-4 pb-12">
          <Button
            className="btn-custom-next flex justify-between items-center w-full lg:w-[40%] xl:w-[36%]"
            onClick={() => AlterProcess("step-ten")}
          >
            {button} <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

StepNine.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it"]),
  AlterProcess: PropTypes.func,
};
