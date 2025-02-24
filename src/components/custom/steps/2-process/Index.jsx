import "./Index.Style.css";
import PropTypes from "prop-types";
import {Card} from "@/components/ui/card";

// Imagens
import IMGtwo1 from "../../../../assets/images/steps/two-1.png";
import IMGtwo2 from "../../../../assets/images/steps/two-2.png";
import IMGtwo3 from "../../../../assets/images/steps/two-3.png";
import IMGtwo4 from "../../../../assets/images/steps/two-4.png";

const translations = {
  pt: {
    title: "Escolha seu objetivo",
    values: [
      "Perder peso",
      "Ganhar Massa Muscular",
      "Ficar Musculoso",
      "Aumentar o bem-estar em geral",
    ],
  },
  in: {
    title: "Choose your goal",
    values: [
      "Lose weight",
      "Gain muscle mass",
      "Get muscular",
      "Improve overall well-being",
    ],
  },
  es: {
    title: "Elige tu objetivo",
    values: [
      "Perder peso",
      "Ganar masa muscular",
      "Ponerse musculoso",
      "Mejorar el bienestar general",
    ],
  },
  it: {
    title: "Scegli il tuo obiettivo",
    values: [
      "Perdere peso",
      "Aumentare la massa muscolare",
      "Diventare muscoloso",
      "Migliorare il benessere generale",
    ],
  },
};

const images = [IMGtwo1, IMGtwo2, IMGtwo3, IMGtwo4];

export default function StepTwo({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, values} = translations[lang];

  const ChangeProcess = () => {
    AlterProcess("step-three");
  };

  return (
    <div className="grid-custom-step px-4 md:px-0">
      <div className="flex flex-col justify-center items-center pt-8 w-full">
        <span className="text-white text-center md:text-start step-title-two font-bold pb-8 w-full">
          {title}
        </span>
      </div>
      <div className="flex flex-col w-full gap-4 mb-4">
        {values.map((w, index) => (
          <Card
            key={index}
            className="card-custom-two flex items-center relative overflow-hidden"
            onClick={ChangeProcess}
          >
            <p className="z-10 relative">{w}</p>
            <div className="card-img-custom-two">
              <img
                alt={w}
                src={images[index]}
                className="img-custom-two mr-5"
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

StepTwo.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it"]),
  AlterProcess: PropTypes.func,
};
