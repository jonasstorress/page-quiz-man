import "./Index.Style.css";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {Card} from "@/components/ui/card";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

// Imagens
import IMGSix1 from "../../../../assets/images/steps/six-2.svg";
import IMGSix2 from "../../../../assets/images/steps/four-1.svg";
import IMGSix3 from "../../../../assets/images/steps/three-4.svg";
import IMGSix4 from "../../../../assets/images/steps/six-1.svg";

const translations = {
  pt: {
    title:
      "Você tem pensamentos críticos sobre si mesmo antes, durante ou depois do sexo?",
    alter:
      "por exemplo, “Eu sei que não vou conseguir ter uma ereção esta noite”",
    weight: ["Sim", "Não", "Às vezes", "Eu não tenho certeza"],
  },
  in: {
    title:
      "Do you have critical thoughts about yourself before, during, or after sex?",
    alter: "for example, 'I know I won't be able to get an erection tonight.'",
    weight: ["Yes", "No", "Sometimes", "I'm not sure"],
  },
  es: {
    title:
      "¿Tienes pensamientos críticos sobre ti mismo antes, durante o después del sexo?",
    alter:
      "por ejemplo, 'Sé que no voy a poder tener una erección esta noche.'",
    weight: ["Sí", "No", "A veces", "No estoy seguro"],
  },
  it: {
    title: "Hai pensieri critici su te stesso prima, durante o dopo il sesso?",
    alter:
      "per esempio, 'So che questa sera non riuscirò ad avere un'erezione.'",
    weight: ["Sì", "No", "A volte", "Non sono sicuro"],
  },
  fn: {
    title:
      "Avez-vous des pensées critiques sur vous-même avant, pendant ou après le sexe ?",
    alter:
      "par exemple, 'Je sais que je ne pourrai pas avoir une érection ce soir.'",
    weight: ["Oui", "Non", "Parfois", "Je ne suis pas sûr"],
  },
};

const images = [IMGSix1, IMGSix2, IMGSix3, IMGSix4];

export default function StepTwentyTwo({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, alter, weight} = translations[lang];

  const ChangeProcess = () => {
    AlterProcess("step-twenty-four");
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (index) => {
    setSelectedOption(index);
  };

  // useEffect para chamar ChangeProcess 1 segundo após a seleção de um item
  useEffect(() => {
    if (selectedOption !== null) {
      const timer = setTimeout(() => {
        ChangeProcess();
      }, 1000); // 1000 milissegundos = 1 segundo

      // Limpa o timer se o componente for desmontado ou se selectedOption mudar antes do tempo
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption]); // Executa sempre que selectedOption mudar

  return (
    <div className="grid-custom-step px-4 md:px-0">
      <div className="flex flex-col justify-center items-center pt-4 w-full">
        <span
          className="text-white text-center step-title-two font-bold pb-4 w-full"
          style={{color: "#ffffffe0", fontSize: "22px"}}
        >
          {title}
        </span>
        <p
          className="pb-6 text-base font-bolder text-center"
          style={{color: "#ffffffa3"}}
        >
          {alter}
        </p>
      </div>
      <div className="flex flex-col w-full">
        {weight.map((text, index) => (
          <Card
            key={index}
            className={`w-full card-option-select flex justify-between items-center text-lg font-bold cursor-pointer z-20 ${
              selectedOption === index ? " card-actived " : ""
            }`}
            onClick={() => handleSelect(index)}
          >
            <div className="flex items-center py-1 ml-2">
              <img alt="..." src={images[index]} className="w-8 h-8" />
              <p className="ml-4 font-light text-base">{text}</p>
            </div>

            {selectedOption === index ? (
              <IoRadioButtonOn className="mr-2 text-2xl icon-active" />
            ) : (
              <IoRadioButtonOffSharp className="mr-2 text-2xl" />
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

StepTwentyTwo.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it", "fn"]),
  AlterProcess: PropTypes.func,
};
