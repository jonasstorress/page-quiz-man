import "./Index.Style.css";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {Card} from "@/components/ui/card";
import {IoRadioButtonOffSharp, IoRadioButtonOn} from "react-icons/io5";

const translations = {
  pt: {
    title: "Você segue alguma dieta?",
    weight: [
      "Sim, tento fazer refeições balanceadas",
      "Sim, mas às vezes eu como fast food",
      "Não, eu não presto atenção à dieta",
    ],
  },
  in: {
    title: "Do you follow any diet?",
    weight: [
      "Yes, I try to eat balanced meals",
      "Yes, but sometimes I eat fast food",
      "No, I don't pay attention to my diet",
    ],
  },
  es: {
    title: "¿Sigues alguna dieta?",
    weight: [
      "Sí, trato de comer comidas balanceadas",
      "Sí, pero a veces como comida rápida",
      "No, no presto atención a mi dieta",
    ],
  },
  it: {
    title: "Segui una dieta?",
    weight: [
      "Sì, cerco di mangiare pasti bilanciati",
      "Sì, ma a volte mangio fast food",
      "No, non bado alla mia dieta",
    ],
  },
  fn: {
    title: "Suivez-vous un régime?",
    weight: [
      "Oui, j'essaie de manger des repas équilibrés",
      "Oui, mais parfois je mange de la restauration rapide",
      "Non, je ne fais pas attention à mon alimentation",
    ],
  },
};
export default function StepEighteen({language, AlterProcess}) {
  const lang = translations[language] ? language : "pt";
  const {title, weight} = translations[lang];

  const ChangeProcess = () => {
    AlterProcess("step-twenty");
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
          className="text-center step-title-three font-bold pb-4 w-full"
          style={{color: "#ffffffe0", fontSize: "22px"}}
        >
          {title}
        </span>
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
            <p className="ml-4 font-light text-base py-2">{text}</p>

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

StepEighteen.propTypes = {
  language: PropTypes.oneOf(["in", "pt", "es", "it", "fn"]),
  AlterProcess: PropTypes.func,
};
