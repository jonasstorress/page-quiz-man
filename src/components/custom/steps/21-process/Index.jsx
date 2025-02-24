import "./Index.Style.css";
import PropTypes from "prop-types";
import {FaArrowRight} from "react-icons/fa6";
import {Button} from "@/components/ui/button";

// IMG's
import IMGpt from "../../../../assets/images/steps/twenty-one-pt.png";
import IMGin from "../../../../assets/images/steps/twenty-one-in.png";
import IMGes from "../../../../assets/images/steps/twenty-one-es.png";
import IMGit from "../../../../assets/images/steps/twenty-one-it.png";

const translations = {
  pt: {
    title: "Sono",
    subtitle:
      "O sono é essencial para o seu condicionamento físico. Um bom sono melhora o metabolismo, controla o apetite e lhe dá mais energia.",
    button: "Continuar",
    image: IMGpt,
  },
  in: {
    title: "Sleep",
    subtitle:
      "Sleep is essential for your physical conditioning. Good sleep improves metabolism, controls appetite, and gives you more energy.",
    button: "Continue",
    image: IMGin,
  },
  es: {
    title: "Sueño",
    subtitle:
      "El sueño es esencial para tu condición física. Un buen sueño mejora el metabolismo, controla el apetito y te da más energía.",
    button: "Continuar",
    image: IMGes,
  },
  it: {
    title: "Sonno",
    subtitle:
      "Il sonno è essenziale per la tua condizione fisica. Un buon sonno migliora il metabolismo, controlla l'appetito e ti dà più energia.",
    button: "Continua",
    image: IMGit,
  },
};

export default function StepTwentyOne({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, subtitle, button, image} = translations[lang];

  return (
    <div className="grid-custom-step px-4 md:px-0">
      <div className="flex flex-col justify-center items-center pt-8 w-full">
        <span className="text-white text-center lg:text-4xl font-bold pb-4 w-full">
          {title}
        </span>
      </div>
      <div className="flex flex-col w-full gap-4 mb-4">
        <img alt="..." src={image} className="my-4" />
        <p className="text-white text-lg text-start leading-tight">
          {subtitle}
        </p>
        <div className="flex items-end justify-end pt-4 pb-12">
          <Button
            className="btn-custom-next flex justify-between items-center w-full lg:w-[40%] xl:w-[36%]"
            onClick={() => AlterProcess("step-twenty-two")}
          >
            {button} <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

StepTwentyOne.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it"]),
  AlterProcess: PropTypes.func,
};
