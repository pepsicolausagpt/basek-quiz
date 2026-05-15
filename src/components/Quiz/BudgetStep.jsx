import {
  budgetOptions,
  implementationTimeOptions,
} from "../../data/quizOptions";

function RadioGroup({ title, options, value, onChange, error }) {
  return (
    <div className="choice-section">
      <div className="choice-section__header">
        <h3>{title}</h3>
      </div>
      <div className="choice-list">
        {options.map((option) => (
          <button
            key={option.value}
            className={`choice ${value === option.value ? "is-selected" : ""}`}
            type="button"
            onClick={() => onChange(option.value)}
          >
            <span className="choice__label">{option.label}</span>
          </button>
        ))}
      </div>
      {error ? <p className="field-error">{error}</p> : null}
    </div>
  );
}

export default function BudgetStep({ formData, onFieldChange, errors }) {
  return (
    <section className="step step--budget">
      <div className="step__header">
        <p className="eyebrow">Планирование</p>
        <h2>Время и бюджет</h2>
        <p>Пожалуйста, ответьте на вопросы, которые помогут нам в формировании расчета, соответсвующего Вашему ожиданию.</p>
      </div>
      <div className="planning-sections">
        <RadioGroup
          title="Предполагаемый срок реализации устройства бассейна"
          options={implementationTimeOptions}
          value={formData.implementationTime}
          onChange={(value) => onFieldChange("implementationTime", value)}
          error={errors.implementationTime}
        />
        <RadioGroup
          title="Ваша оценка бюджетности и планируемый бюджет"
          options={budgetOptions}
          value={formData.budget}
          onChange={(value) => onFieldChange("budget", value)}
          error={errors.budget}
        />
        <label className="field planning-comment">
          <span>Комментарий</span>
          <textarea value={formData.comment} onChange={(event) => onFieldChange("comment", event.target.value)} />
        </label>
      </div>
    </section>
  );
}
