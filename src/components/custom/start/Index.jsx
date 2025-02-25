import "./Index.Style.css";

import PropTypes from "prop-types";

import IMG1829 from "../../../assets/images/start/18-30.png";
import IMG3039 from "../../../assets/images/start/31-45.png";
import IMG4049 from "../../../assets/images/start/46-55.png";
import IMG150plus from "../../../assets/images/start/56plus.png";

import {Card} from "@/components/ui/card";

const translations = {
  pt: {
    title: "Plano para melhorar o desempenho sexual de acordo com sua idade",
    subtitle: "TESTE DE 3 MINUTOS",
    ages: ["18-30", "31-45", "46-55", "56+"],
  },
  es: {
    title: "Plan para mejorar el rendimiento sexual según tu edad",
    subtitle: "PRUEBA DE 3 MINUTOS",
    ages: ["18-30", "31-45", "46-55", "56+"],
  },
  it: {
    title: "Piano per migliorare le prestazioni sessuali in base alla tua età",
    subtitle: "TEST DI 3 MINUTI",
    ages: ["18-30", "31-45", "46-55", "56+"],
  },
  in: {
    title: "Plan to improve sexual performance according to your age",
    subtitle: "3-MINUTE TEST",
    ages: ["18-30", "31-45", "46-55", "56+"],
  },
  fn: {
    title: "Plan pour améliorer les performances sexuelles selon votre âge",
    subtitle: "TEST DE 3 MINUTES",
    ages: ["18-30", "31-45", "46-55", "56+"],
  },
};

export default function Start({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, subtitle, ages} = translations[lang];

  const ChangeProcess = () => {
    AlterProcess("step-two");
  };

  return (
    <div className="container flex flex-col">
      <div className="flex flex-col justify-center items-center content-center pt-6">
        <span
          className="text-center font-bold pb-6"
          style={{fontSize: "22px", color: "#ffffffE0"}}
        >
          {title}
        </span>
        <p className="pb-6 text-base font-bolder" style={{color: "#ffffffa3"}}>
          {subtitle}
        </p>
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

Start.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it", "fn"]),
  AlterProcess: PropTypes.func,
};
