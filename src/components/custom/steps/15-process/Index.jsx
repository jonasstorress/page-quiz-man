import "./Index.Style.css";

import PropTypes from "prop-types";

import IMG1829 from "../../../../assets/images/steps/15-1.png";
import IMG3039 from "../../../../assets/images/steps/15-2.png";
import IMG4049 from "../../../../assets/images/steps/15-3.png";
import IMG150plus from "../../../../assets/images/steps/15-4.png";

import {Card} from "@/components/ui/card";

const translations = {
  pt: {
    title: "Plano para melhorar o desempenho sexual de acordo com sua idade",
    ages: ["No escritório", "Caminhadas", "Trabalho físico", "Em casa"],
  },
  es: {
    title: "Plan para mejorar el rendimiento sexual según tu edad",
    ages: ["En la oficina", "Caminatas", "Trabajo físico", "En casa"],
  },
  it: {
    title: "Piano per migliorare le prestazioni sessuali in base alla tua età",
    ages: ["In ufficio", "Passeggiate", "Lavoro fisico", "A casa"],
  },
  in: {
    title: "Plan to improve sexual performance according to your age",
    ages: ["In the office", "Walking", "Physical work", "At home"],
  },
  fn: {
    title: "Plan pour améliorer les performances sexuelles selon votre âge",
    ages: ["Au bureau", "Marches", "Travail physique", "À la maison"],
  },
};

export default function StepFifteen({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, ages} = translations[lang];

  const ChangeProcess = () => {
    AlterProcess("step-sixteen");
  };

  return (
    <div className="container flex flex-col w-full pr-0 pl-0">
      <div className="flex flex-col justify-center items-center content-center pt-6">
        <span
          className="text-center font-bold pb-6"
          style={{fontSize: "22px", color: "#ffffffE0"}}
        >
          {title}
        </span>
      </div>
      <div className="grid gap-4 grid-cols-2 ">
        {[IMG1829, IMG3039, IMG4049, IMG150plus].map((img, index) => (
          <Card
            key={index}
            className="card-custom-start w-full"
            onClick={() => ChangeProcess()}
          >
            <div className="card-custom-img">
              <img
                alt="..."
                src={img}
                className="w-full h-[167px] object-contain"
              />
            </div>
            <div className="card-custom-footer">
              <p className="font-light">{ages[index]}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

StepFifteen.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it", "fn"]),
  AlterProcess: PropTypes.func,
};
