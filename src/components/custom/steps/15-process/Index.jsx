import "./Index.Style.css";
import PropTypes from "prop-types";
import {FaArrowRight} from "react-icons/fa6";
import {Button} from "@/components/ui/button";

import Animation from "./animation/Index";

const translations = {
  pt: {
    title: "Não é necessário ir além dos limites!",
    subtitle:
      "Exercícios muito intensos podem aumentar seus níveis de cortisol e dificultar a perda de peso. A MadMuscles adapta seu plano para ajudá-lo a atingir suas metas sem exageros.",
    button: "Entendi",
    info: "*Com base em dados de 1,3 milhão de treinos",
  },
  in: {
    title: "No need to push beyond your limits!",
    subtitle:
      "Overly intense workouts can increase your cortisol levels and make weight loss harder. MadMuscles adapts your plan to help you reach your goals without overdoing it.",
    button: "Got it",
    info: "*Based on data from 1.3 million workouts",
  },
  es: {
    title: "¡No es necesario ir más allá de tus límites!",
    subtitle:
      "Los entrenamientos demasiado intensos pueden aumentar tus niveles de cortisol y dificultar la pérdida de peso. MadMuscles adapta tu plan para ayudarte a alcanzar tus objetivos sin excesos.",
    button: "Entendido",
    info: "*Basado en datos de 1,3 millones de entrenamientos",
  },
  it: {
    title: "Non è necessario andare oltre i tuoi limiti!",
    subtitle:
      "Allenamenti troppo intensi possono aumentare i livelli di cortisolo e rendere più difficile la perdita di peso. MadMuscles adatta il tuo piano per aiutarti a raggiungere i tuoi obiettivi senza esagerare.",
    button: "Ho capito",
    info: "*Basato su dati di 1,3 milioni di allenamenti",
  },
};

export default function StepFifteen({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, subtitle, button, info} = translations[lang];

  return (
    <div className="grid-custom-step px-4 md:px-0">
      <div className="flex flex-col justify-center items-center pt-8 w-full">
        <span className="text-white text-center lg:text-4xl font-bold pb-4 w-full">
          {title}
        </span>
      </div>
      <div className="flex flex-col w-full gap-4 mb-4">
        <Animation />
        <p className="text-white text-lg text-start leading-tight">
          {subtitle}
        </p>
        <p className="text-center text-custom-muted pt-2">{info}</p>
        <div className="flex items-end justify-end pt-4 pb-12">
          <Button
            className="btn-custom-next flex justify-between items-center w-full lg:w-[40%] xl:w-[36%]"
            onClick={() => AlterProcess("step-sixteen")}
          >
            {button} <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

StepFifteen.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it"]),
  AlterProcess: PropTypes.func,
};
