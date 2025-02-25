/* eslint-disable react-hooks/exhaustive-deps */
import "./Index.Style.css";

import {useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useState, Suspense, lazy} from "react";

import {FaChevronLeft} from "react-icons/fa";
import {Progress} from "@/components/ui/progress";

import Start from "@/components/custom/start/Index";
import Result from "@/components/custom/result/Index.jsx";

// Lazy load dos Steps
const stepsComponents = {
  "step-two": lazy(() => import("@/components/custom/steps/1-process/Index")),
  "step-three": lazy(() => import("@/components/custom/steps/2-process/Index")),
  "step-four": lazy(() => import("@/components/custom/steps/3-process/Index")),
  "step-five": lazy(() => import("@/components/custom/steps/4-process/Index")),
  "step-six": lazy(() => import("@/components/custom/steps/5-process/Index")),
  "step-seven": lazy(() => import("@/components/custom/steps/6-process/Index")),
  "step-eight": lazy(() => import("@/components/custom/steps/7-process/Index")),
  "step-nine": lazy(() => import("@/components/custom/steps/8-process/Index")),
  "step-ten": lazy(() => import("@/components/custom/steps/9-process/Index")),
  "step-eleven": lazy(() =>
    import("@/components/custom/steps/10-process/Index")
  ),
  "step-twelve": lazy(() =>
    import("@/components/custom/steps/11-process/Index")
  ),
  "step-thirteen": lazy(() =>
    import("@/components/custom/steps/12-process/Index")
  ),
  "step-fourteen": lazy(() =>
    import("@/components/custom/steps/13-process/Index")
  ),
  "step-fifteen": lazy(() =>
    import("@/components/custom/steps/14-process/Index")
  ),
  "step-sixteen": lazy(() =>
    import("@/components/custom/steps/15-process/Index")
  ),
  // "step-seventeen": lazy(() =>
  //   import("@/components/custom/steps/16-process/Index")
  // ),
  // "step-eighteen": lazy(() =>
  //   import("@/components/custom/steps/17-process/Index")
  // ),
  // "step-nineteen": lazy(() =>
  //   import("@/components/custom/steps/18-process/Index")
  // ),
  // "step-twenty": lazy(() =>
  //   import("@/components/custom/steps/19-process/Index")
  // ),
  // "step-twenty-one": lazy(() =>
  //   import("@/components/custom/steps/20-process/Index")
  // ),
  // "step-twenty-two": lazy(() =>
  //   import("@/components/custom/steps/21-process/Index")
  // ),
  // "step-twenty-three": lazy(() =>
  //   import("@/components/custom/steps/22-process/Index")
  // ),
  // "step-twenty-four": lazy(() =>
  //   import("@/components/custom/steps/23-process/Index")
  // ),
  // "step-twenty-five": lazy(() =>
  //   import("@/components/custom/steps/24-process/Index")
  // ),
};

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguage] = useState("pt");
  const [stepProcess, setStepProcess] = useState("start");

  const validSteps = Object.keys(stepsComponents).concat(["start", "result"]);

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const urlLanguage = pathParts[1] || "pt";
    const urlStep = pathParts[2] || "start";

    if (!["in", "pt", "es", "it", "fn"].includes(urlLanguage)) {
      navigate(`/pt/start`, {replace: true});
      return;
    }

    setLanguage(urlLanguage);
    window.dispatchEvent(
      new CustomEvent("languageChange", {detail: urlLanguage})
    );

    if (!validSteps.includes(urlStep)) {
      navigate(`/${urlLanguage}/start`, {replace: true});
    } else {
      setStepProcess(urlStep);
    }
  }, [location.pathname]);

  const AlterProcess = (newStep) => {
    if (!validSteps.includes(newStep)) return;
    setStepProcess(newStep);
    navigate(`/${language}/${newStep}`);
  };

  const goToPreviousStep = () => {
    const currentIndex = validSteps.indexOf(stepProcess);
    if (currentIndex > 0) {
      const previousStep = validSteps[currentIndex - 1];
      setStepProcess(previousStep);
      navigate(`/${language}/${previousStep}`);
    } else {
      navigate(`/${language}/`);
    }
  };

  return (
    <>
      {stepProcess === "start" ? (
        <div className="background-custom-lines container pr-0 pl-0">
          <div className="background-custom-lines-bottom w-full">
            <div className="flex justify-between pt-12 pb-6 font-extrabold">
              <div></div>
              <span className="text-white text-base px-7 flex items-center space-x-1">
                <div className="color-orange-custom ">01</div>{" "}
                <div className="text-xl font-bolder">/</div>
                <div>{validSteps.length}</div>
              </span>
            </div>
            <div className="flex justify-between items-center px-7">
              <Progress
                value={Math.round((1 / validSteps.length) * 100)}
                className="line-custom-color"
              />
            </div>
            <Start language={language} AlterProcess={AlterProcess} />
          </div>
        </div>
      ) : (
        <div className="background-custom-process container">
          {stepProcess !== "result" && (
            <>
              <div className="justify-between items-center">
                <div className="flex justify-between pt-12 pb-6 font-extrabold">
                  <div
                    onClick={goToPreviousStep}
                    className="btn-custom-back cursor-pointer"
                  >
                    <FaChevronLeft />
                  </div>
                  <span className="text-white text-base font-semibold flex items-center space-x-1 select-none">
                    <div className="color-orange-custom ">
                      {validSteps.indexOf(stepProcess) + 2 < 10 && <>0</>}
                      {validSteps.indexOf(stepProcess) + 2}
                    </div>
                    <div className="text-xl font-bolder"> /</div>
                    <div> {validSteps.length}</div>
                  </span>
                </div>

                <Progress
                  value={Math.round(
                    ((validSteps.indexOf(stepProcess) + 1) /
                      validSteps.length) *
                      100
                  )}
                  className="line-custom-color"
                />
              </div>
            </>
          )}

          {stepProcess === "result" ? (
            <Result lang={language} />
          ) : (
            <Suspense fallback={<div></div>}>
              {stepsComponents[stepProcess] &&
                React.createElement(stepsComponents[stepProcess], {
                  language,
                  AlterProcess,
                })}
            </Suspense>
          )}
        </div>
      )}
    </>
  );
}
