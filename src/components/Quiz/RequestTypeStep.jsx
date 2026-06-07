import { requestTypeOptions } from "../../data/quizOptions";

export default function RequestTypeStep({ formData, onFieldChange, error }) {
  return (
    <section className="step">
      <div className="step__header">
        <p className="eyebrow">Запрос</p>
        <h2>Выберите вариант запроса</h2>
        <p>Что вас интересует?</p>
      </div>
      <div className="choice-list choice-list--vertical">
        {requestTypeOptions.map((option) => (
          <button
            key={option.value}
            className={`choice choice--large ${formData.requestType === option.value ? "is-selected" : ""}`}
            type="button"
            onClick={() => onFieldChange("requestType", option.value)}
          >
            <span className="choice__label">{option.label}</span>
          </button>
        ))}
      </div>
      {error ? <p className="field-error">{error}</p> : null}
    </section>
  );
}
