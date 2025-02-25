import "./Index.Style.css";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

const Result = ({lang}) => {
  const frasesPorIdioma = {
    pt: [
      "Coletando suas respostas",
      "Analisando os seus resultados",
      "Processando seu perfil",
      "Priorizando os desafios",
      "Estabelecendo suas metas",
      "Criando seu plano pessoal",
      "Gerado com sucesso! Você será direcionado..",
    ],
    en: [
      "Analyzing your answers",
      "Analyzing your results",
      "Processing your profile",
      "Prioritizing challenges",
      "Setting your goals",
      "Creating your personal plan",
      "Successfully generated! You will be redirected..",
    ],
    es: [
      "Recopilando tus respuestas",
      "Analizando tus resultados",
      "Procesando tu perfil",
      "Priorizando los desafíos",
      "Estableciendo tus metas",
      "Creando tu plan personal",
      "¡Generado con éxito! Serás redirigido..",
    ],
    it: [
      "Raccogliendo le tue risposte",
      "Analizzando i tuoi risultati",
      "Elaborando il tuo profilo",
      "Prioritizzando le sfide",
      "Stabilendo i tuoi obiettivi",
      "Creando il tuo piano personale",
      "Generato con successo! Sarai reindirizzato..",
    ],
    fn: [
      "Collecting your answers",
      "Analyzing your results",
      "Processing your profile",
      "Prioritizing the challenges",
      "Setting your goals",
      "Creating your personal plan",
      "Successfully generated! You will be redirected..",
    ],
  };

  const destinosPorIdioma = {
    pt: "https://pay.cakto.com.br/8sas7uf",
    en: "https://pay.cakto.com.br/8sas7uf",
    es: "https://pay.cakto.com.br/8sas7uf",
    it: "https://pay.cakto.com.br/8sas7uf",
  };

  const frases = frasesPorIdioma[lang] || frasesPorIdioma["pt"];
  const destino = destinosPorIdioma[lang] || destinosPorIdioma["pt"];

  const totalTempo = frases.length * 1500;
  const tempoPorIncremento = totalTempo / 100;

  const [progress, setProgress] = useState(0);
  const [fraseAtual, setFraseAtual] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        setIsComplete(true);
        return prev;
      });
    }, tempoPorIncremento);

    const fraseInterval = setInterval(() => {
      setFraseAtual((prev) => {
        if (prev + 1 < frases.length) return prev + 1;
        clearInterval(fraseInterval); // Para de alternar frases na última
        return prev;
      });
    }, 1500);

    setTimeout(() => {
      clearInterval(progressInterval);
      clearInterval(fraseInterval);
      setTimeout(() => {
        window.location.href = destino;
      }, 1000);
    }, totalTempo);

    return () => {
      clearInterval(progressInterval);
      clearInterval(fraseInterval);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-inherit text-inherit">
      <div className="relative w-40 h-40">
        <svg className="w-full h-full transform -rotate-90">
          {/* Círculo de fundo que fica laranja ao completar */}
          <circle
            strokeWidth="6"
            stroke="currentColor"
            fill={isComplete ? "#eb3349" : "transparent"}
            r="58"
            cx="50%"
            cy="50%"
          />
          {/* Círculo de progresso animado */}
          <motion.circle
            strokeWidth="6"
            strokeLinecap="round"
            fill="transparent"
            r="58"
            cx="50%"
            cy="50%"
            stroke="#eb3349"
            strokeDasharray="364.24"
            strokeDashoffset="364.24"
            animate={{
              strokeDashoffset: `${364.24 - (progress / 100) * 364.24}`,
            }}
            transition={{duration: 0.1, ease: "linear"}}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">
          {progress}%
        </div>
      </div>
      <p className="text-xl text-center text-white">{frases[fraseAtual]}</p>
    </div>
  );
};

export default Result;
