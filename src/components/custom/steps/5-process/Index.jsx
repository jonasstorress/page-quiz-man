import "./Index.Style.css";
import PropTypes from "prop-types";
import {FaArrowRight} from "react-icons/fa6";

// IMG's
import IMGfive from "../../../../assets/images/steps/five.png";
import {Button} from "@/components/ui/button";

const translations = {
  pt: {
    title: "Homens na faixa dos 20 anos",
    subtitle:
      "Podem precisar de uma abordagem ligeiramente diferente para os treinos com base em sua experiência com exercícios e nível de atividade.",
    button: "Entendi",
  },
  in: {
    title: "Men in their 20s",
    subtitle:
      "May need a slightly different approach to workouts based on their exercise experience and activity level.",
    button: "Got it",
  },
  es: {
    title: "Hombres en sus 20 años",
    subtitle:
      "Pueden necesitar un enfoque ligeramente diferente para los entrenamientos según su experiencia con el ejercicio y su nivel de actividad.",
    button: "Entendido",
  },
  it: {
    title: "Uomini sulla ventina",
    subtitle:
      "Potrebbero aver bisogno di un approccio leggermente diverso agli allenamenti in base alla loro esperienza con l'esercizio fisico e al livello di attività.",
    button: "Ho capito",
  },
};

export default function StepFive({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, subtitle, button} = translations[lang];

  return (
    <div className="grid-custom-step px-4 md:px-0">
      <div className="flex flex-col justify-center items-center pt-8 w-full">
        <span className="text-white text-center md:text-start lg:text-3xl font-bold pb-4 w-full">
          {title}
        </span>
        <p className="text-white text-lg text-start leading-tight pb-8">
          {subtitle}
        </p>
      </div>
      <div className="flex flex-col w-full gap-4 mb-4">
        <img alt="..." src={IMGfive} />
        <div className="flex items-end justify-end pt-4 pb-12">
          <Button
            className="btn-custom-next flex justify-between items-center w-full lg:w-[40%] xl:w-[36%]"
            onClick={() => AlterProcess("step-six")}
          >
            {button} <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

StepFive.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it"]),
  AlterProcess: PropTypes.func,
};
