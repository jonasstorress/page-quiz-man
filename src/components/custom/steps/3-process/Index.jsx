import "./Index.Style.css";
import PropTypes from "prop-types";
import {Card} from "@/components/ui/card";

// Imagens
import IMGthree1 from "../../../../assets/images/steps/three-1.png";
import IMGthree2 from "../../../../assets/images/steps/three-2.png";
import IMGthree3 from "../../../../assets/images/steps/three-3.png";

const translations = {
  pt: {
    title: "Escolha o corpo que você deseja",
    values: ["Alguns tamanhos abaixo", "Em forma", "Atlético"],
  },
  in: {
    title: "Choose the body type you want",
    values: ["A few sizes smaller", "Fit", "Athletic"],
  },
  es: {
    title: "Elige el cuerpo que deseas",
    values: ["Algunos tamaños menos", "En forma", "Atlético"],
  },
  it: {
    title: "Scegli il corpo che desideri",
    values: ["Alcune taglie in meno", "In forma", "Atletico"],
  },
};

const images = [IMGthree1, IMGthree2, IMGthree3];

export default function StepThree({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, values} = translations[lang];

  const ChangeProcess = () => {
    AlterProcess("step-four");
  };

  return (
    <div className="grid-custom-step px-4 md:px-0">
      <div className="flex flex-col justify-center items-center pt-8 w-full">
        <span className="text-white text-center md:text-start step-title-three font-bold pb-8 w-full">
          {title}
        </span>
      </div>
      <div className="flex flex-col w-full gap-4 mb-4">
        {values.map((w, index) => (
          <Card
            key={index}
            className="card-custom-three flex items-center relative overflow-hidden"
            onClick={ChangeProcess}
          >
            <p className="z-10 relative">{w}</p>
            <div className="card-img-custom-three">
              <img
                alt={w}
                src={images[index]}
                className="img-custom-three mr-5"
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

StepThree.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it"]),
  AlterProcess: PropTypes.func,
};
