import {
  poolWidthOptions,
  poolLengthOptions,
  linerTypeOptions,
} from "../../data/quizOptions";

export default function PoolSizeStep({ formData, onFieldChange, errors }) {
  return (
    <section className="step step--custom-size">
      <div className="step__header">
        <p className="eyebrow">Параметры</p>
        <h2>Размеры и тип плёнки</h2>
        <p>Укажите параметры вашего будущего бассейна</p>
      </div>

      <div className="custom-size-sections">
        <div className="choice-section">
          <div className="choice-section__header">
            <h3>Ширина бассейна (м)</h3>
          </div>
          <div className="choice-list">
            {poolWidthOptions.map((w) => (
              <button
                key={w}
                className={`choice ${formData.poolWidth === w ? "is-selected" : ""}`}
                type="button"
                onClick={() => onFieldChange("poolWidth", w)}
              >
                <span className="choice__label">{w} м</span>
              </button>
            ))}
          </div>
          {errors?.poolWidth ? <p className="field-error">{errors.poolWidth}</p> : null}
        </div>

        <div className="choice-section">
          <div className="choice-section__header">
            <h3>Длина бассейна (м)</h3>
          </div>
          <div className="choice-list">
            {poolLengthOptions.map((l) => (
              <button
                key={l}
                className={`choice ${formData.poolLength === l ? "is-selected" : ""}`}
                type="button"
                onClick={() => onFieldChange("poolLength", l)}
              >
                <span className="choice__label">{l} м</span>
              </button>
            ))}
          </div>
          {errors?.poolLength ? <p className="field-error">{errors.poolLength}</p> : null}
        </div>

        <div className="choice-section">
          <div className="choice-section__header">
            <h3>Тип плёнки</h3>
          </div>
          <div className="choice-list">
            {linerTypeOptions.map((option) => (
              <button
                key={option.value}
                className={`choice ${formData.linerType === option.value ? "is-selected" : ""}`}
                type="button"
                onClick={() => onFieldChange("linerType", option.value)}
              >
                <span className="choice__label">{option.label}</span>
              </button>
            ))}
          </div>
          {errors?.linerType ? <p className="field-error">{errors.linerType}</p> : null}
        </div>
      </div>
    </section>
  );
}
