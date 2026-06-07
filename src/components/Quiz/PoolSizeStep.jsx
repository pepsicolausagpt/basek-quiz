import {
  poolWidthOptions,
  poolLengthOptions,
  linerTypeOptions,
} from "../../data/quizOptions";

export default function PoolSizeStep({ formData, onFieldChange, errors }) {
  const isPolymer = formData.requestType === "polymer_panels_pool";
  const hasLinerStep = formData.requestType === "liner_only";

  return (
    <section className="step step--custom-size">
      <div className="step__header">
        <p className="eyebrow">Параметры</p>
        <h2>{isPolymer ? "Размеры и тип плёнки" : "Размеры бассейна"}</h2>
        <p>{isPolymer ? "Укажите параметры вашего будущего бассейна" : "Укажите размеры чаши бассейна"}</p>
      </div>

      <div className="custom-size-sections">
        {isPolymer ? (
          <>
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
          </>
        ) : (
          <div className="choice-section">
            <div className="choice-section__header">
              <h3>Размеры бассейна (м)</h3>
            </div>
            <div className="form-grid">
              <label className="field">
                <span>Ширина (м)</span>
                <input
                  type="text"
                  value={formData.poolWidth}
                  onChange={(event) => onFieldChange("poolWidth", event.target.value.replace(/[^0-9.,]/g, ""))}
                  placeholder="Например, 4"
                />
                {errors?.poolWidth ? <span className="field-error">{errors.poolWidth}</span> : null}
              </label>
              <label className="field">
                <span>Длина (м)</span>
                <input
                  type="text"
                  value={formData.poolLength}
                  onChange={(event) => onFieldChange("poolLength", event.target.value.replace(/[^0-9.,]/g, ""))}
                  placeholder="Например, 8"
                />
                {errors?.poolLength ? <span className="field-error">{errors.poolLength}</span> : null}
              </label>
              <label className="field">
                <span>Глубина (м)</span>
                <input
                  type="text"
                  value={formData.poolDepth}
                  onChange={(event) => onFieldChange("poolDepth", event.target.value.replace(/[^0-9.,]/g, ""))}
                  placeholder="Например, 1.5"
                />
                {errors?.poolDepth ? <span className="field-error">{errors.poolDepth}</span> : null}
              </label>
            </div>
          </div>
        )}

        {isPolymer && (
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
        )}
      </div>
    </section>
  );
}
