export default function PoolSizeStep({ formData, onFieldChange, errors }) {
  const sanitizeDimension = (value) => value.replace(/[^0-9.,]/g, "");

  return (
    <section className="step step--custom-size">
      <div className="step__header">
        <p className="eyebrow">Параметры</p>
        <h2>Размеры бассейна</h2>
        <p>Укажите размеры чаши бассейна</p>
      </div>

      <div className="custom-size-sections">
        <div className="choice-section">
          <div className="choice-section__header">
            <h3>Размеры бассейна (м)</h3>
          </div>
          <div className="form-grid">
            <label className="field">
              <span>Длина (м)</span>
              <input
                type="text"
                inputMode="decimal"
                value={formData.poolLength}
                onChange={(event) => onFieldChange("poolLength", sanitizeDimension(event.target.value))}
                placeholder="Например, 8"
              />
              {errors?.poolLength ? <span className="field-error">{errors.poolLength}</span> : null}
            </label>
            <label className="field">
              <span>Ширина (м)</span>
              <input
                type="text"
                inputMode="decimal"
                value={formData.poolWidth}
                onChange={(event) => onFieldChange("poolWidth", sanitizeDimension(event.target.value))}
                placeholder="Например, 4"
              />
              {errors?.poolWidth ? <span className="field-error">{errors.poolWidth}</span> : null}
            </label>
            <label className="field">
              <span>Глубина (м)</span>
              <input
                type="text"
                inputMode="decimal"
                value={formData.poolDepth}
                onChange={(event) => onFieldChange("poolDepth", sanitizeDimension(event.target.value))}
                placeholder="Например, 1.5"
              />
              {errors?.poolDepth ? <span className="field-error">{errors.poolDepth}</span> : null}
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
