import { useState } from "react";
import { buildLeadData } from "../../utils/buildLeadData";
import { isStepValid, validateStep } from "../../utils/validation";
import { submitLead } from "../../utils/submitLead";
import RequestTypeStep from "./RequestTypeStep";
import PoolSizeStep from "./PoolSizeStep";
import LinerTextureStep from "./LinerTextureStep";
import LocationStep from "./LocationStep";
import EquipmentStep from "./EquipmentStep";
import AdditionalStep from "./AdditionalStep";
import BudgetStep from "./BudgetStep";
import ContactStep from "./ContactStep";
import ProgressBar from "./ProgressBar";
import SuccessScreen from "./SuccessScreen";

const createInitialFormData = () => ({
  requestType: "",
  poolWidth: "",
  poolLength: "",
  poolDepth: "",
  linerType: "",
  linerTexture: "",
  location: "",
  equipmentSolution: "",
  equipmentItems: [],
  waterDisinfection: [],
  counterflow: "no",
  waterHeating: "no",
  additionalItems: [],
  promotion: "no",
  implementationTime: "",
  budget: "",
  comment: "",
  fullName: "",
  deliveryCity: "",
  phone: "",
  email: "",
});

export default function Quiz() {
  const [screen, setScreen] = useState("quiz");
  const [formData, setFormData] = useState(createInitialFormData);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showErrors, setShowErrors] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  let steps = ["requestType"];
  if (formData.requestType === "liner_only") {
    steps = ["requestType", "linerTexture", "poolSize", "contact"];
  } else if (formData.requestType === "liner_installation") {
    steps = ["requestType", "linerTexture", "poolSize", "contact"];
  } else {
    // polymer_panels_pool or unselected
    steps = ["requestType", "linerTexture", "poolSize", "location", "equipment", "additional", "budget", "contact"];
  }

  const currentStep = steps[currentStepIndex] || steps[0];
  const errors = showErrors ? validateStep(currentStep, formData) : {};
  const canGoNext = isStepValid(currentStep, formData);

  const resetQuiz = () => {
    setFormData(createInitialFormData());
    setCurrentStepIndex(0);
    setShowErrors(false);
    setIsSubmitting(false);
    setSubmitError("");
  };

  const startQuiz = () => {
    resetQuiz();
    setScreen("quiz");
  };

  const updateField = (field, value) => {
    if (submitError) {
      setSubmitError("");
    }
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  const goBack = () => {
    setShowErrors(false);
    if (currentStepIndex === 0) {
      return;
    }
    setCurrentStepIndex((previous) => Math.max(previous - 1, 0));
  };

  const goNext = async () => {
    const nextErrors = validateStep(currentStep, formData);
    setShowErrors(true);
    setSubmitError("");

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    if (currentStep === "contact") {
      setIsSubmitting(true);
      const leadData = buildLeadData(formData);
      try {
        await submitLead(leadData);
        setScreen("success");
      } catch (error) {
        setSubmitError(error.message || "Не удалось отправить заявку. Попробуйте еще раз.");
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    setShowErrors(false);
    setCurrentStepIndex((previous) => Math.min(previous + 1, steps.length - 1));
  };

  const renderStep = () => {
    if (currentStep === "requestType") {
      return <RequestTypeStep formData={formData} onFieldChange={updateField} error={errors.requestType} />;
    }

    if (currentStep === "poolSize") {
      return <PoolSizeStep formData={formData} onFieldChange={updateField} errors={errors} />;
    }

    if (currentStep === "linerTexture") {
      return <LinerTextureStep formData={formData} onFieldChange={updateField} error={errors.linerTexture} />;
    }

    if (currentStep === "location") {
      return <LocationStep formData={formData} onFieldChange={updateField} error={errors.location} />;
    }

    if (currentStep === "equipment") {
      return <EquipmentStep formData={formData} onFieldChange={updateField} />;
    }

    if (currentStep === "additional") {
      return <AdditionalStep formData={formData} onFieldChange={updateField} />;
    }

    if (currentStep === "budget") {
      return <BudgetStep formData={formData} onFieldChange={updateField} errors={errors} />;
    }

    return <ContactStep formData={formData} onFieldChange={updateField} errors={errors} />;
  };

  if (screen === "success") {
    return <SuccessScreen onRestart={startQuiz} />;
  }

  return (
    <main className="quiz-shell">
      <div className="quiz-shell__photo" aria-hidden="true" />
      <section className="quiz-panel">
        <div className="quiz-panel__top">
          <ProgressBar current={currentStepIndex} total={steps.length} />
        </div>
        {renderStep()}
        {submitError ? <p className="submit-error">{submitError}</p> : null}
        <div className="quiz-actions">
          {currentStepIndex > 0 ? (
            <button className="button button--ghost" type="button" onClick={goBack}>
              Назад
            </button>
          ) : <span />}
          <span className="secure-note">Ваши данные защищены и не передаются третьим лицам</span>
          <button
            className="button button--primary"
            type="button"
            onClick={goNext}
            disabled={!canGoNext || isSubmitting}
          >
            {currentStep === "contact" ? (isSubmitting ? "Отправляем..." : "Отправить заявку") : "Далее"}
          </button>
        </div>
      </section>
    </main>
  );
}
