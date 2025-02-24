import "./Index.Style.css";
import PropTypes from "prop-types";
import {Card} from "@/components/ui/card";

// Imagens
import IMGone1 from "../../../../assets/images/steps/one-1.png";
import IMGone2 from "../../../../assets/images/steps/one-2.png";
import IMGone3 from "../../../../assets/images/steps/one-3.png";
import IMGone4 from "../../../../assets/images/steps/one-4.png";

const translations = {
  pt: {
    title: "Escolha o seu tipo de corpo",
    weight: ["Magro", "Médio", "Grande", "Pesado"],
  },
  in: {
    title: "Choose your body type",
    weight: ["Slim", "Medium", "Large", "Heavy"],
  },
  es: {
    title: "Elige tu tipo de cuerpo",
    weight: ["Delgado", "Medio", "Grande", "Pesado"],
  },
  it: {
    title: "Scegli il tuo tipo di corpo",
    weight: ["Magro", "Medio", "Grande", "Pesante"],
  },
};

const images = [IMGone1, IMGone2, IMGone3, IMGone4];

export default function StepOne({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, weight} = translations[lang];

  const ChangeProcess = () => {
    AlterProcess("step-two");
  };

  return (
    <div className="grid-custom-step px-4 md:px-0">
      <div className="flex flex-col justify-center items-center pt-8 w-full">
        <span className="text-white text-center md:text-start step-title-one font-bold pb-8 w-full">
          {title}
        </span>
      </div>
      <div className="flex flex-col w-full gap-4 mb-4">
        {weight.map((w, index) => (
          <Card
            key={index}
            className="card-custom-one flex items-center relative overflow-hidden"
            onClick={() => {
              ChangeProcess();
            }}
          >
            <p className="z-10 relative">{w}</p>
            <div className="card-img-custom-one">
              <img
                alt={w}
                src={images[index]}
                className="img-custom-one mr-5"
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

StepOne.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it"]),
  AlterProcess: PropTypes.func,
};
