import { linerTextureOptions } from "../../data/quizOptions";

export default function LinerTextureStep({ formData, onFieldChange, error }) {
  return (
    <section className="step">
      <div className="step__header">
        <p className="eyebrow">Выбор пленки</p>
        <h2>Выберите цвет и фактуру пленки</h2>
        <p>Выберите наиболее подходящий вариант для вашего бассейна</p>
      </div>
      
      <div className="liner-grid">
        {linerTextureOptions.map((option) => {
          const selected = formData.linerTexture === option.value;
          const imgUrl = `${import.meta.env.BASE_URL}images/${option.img}`;

          return (
            <button
              key={option.value}
              className={`liner-card ${selected ? "active" : ""}`}
              type="button"
              onClick={() => onFieldChange("linerTexture", option.value)}
            >
              <div className="liner-image-wrapper">
                <img src={imgUrl} alt={option.label} className="liner-image" />
              </div>
              <span className="liner-name">{option.label}</span>
            </button>
          );
        })}
      </div>

      {error ? <p className="field-error">{error}</p> : null}
    </section>
  );
}
