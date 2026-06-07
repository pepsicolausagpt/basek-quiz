export function validateStep(stepId, formData) {
  const errors = {};
  const emailPattern = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/;

  const requireField = (field, message = "Заполните поле") => {
    const value = formData[field];
    if (Array.isArray(value) ? value.length === 0 : !value) {
      errors[field] = message;
    }
  };

  if (stepId === "requestType") {
    requireField("requestType", "Выберите один из вариантов");
  }

  if (stepId === "poolSize") {
    const isPolymer = formData.requestType === "polymer_panels_pool";

    if (isPolymer) {
      requireField("poolWidth", "Выберите ширину бассейна");
      requireField("poolLength", "Выберите длину бассейна");
      requireField("linerType", "Выберите тип пленки");
    } else {
      requireField("poolWidth", "Укажите ширину бассейна");
      requireField("poolLength", "Укажите длину бассейна");
      requireField("poolDepth", "Укажите глубину бассейна");

      if (formData.poolWidth) {
        const val = parseFloat(formData.poolWidth.replace(",", "."));
        if (isNaN(val) || val <= 0) {
          errors.poolWidth = "Введите корректное число";
        }
      }
      if (formData.poolLength) {
        const val = parseFloat(formData.poolLength.replace(",", "."));
        if (isNaN(val) || val <= 0) {
          errors.poolLength = "Введите корректное число";
        }
      }
      if (formData.poolDepth) {
        const val = parseFloat(formData.poolDepth.replace(",", "."));
        if (isNaN(val) || val <= 0) {
          errors.poolDepth = "Введите корректное число";
        }
      }
    }
  }

  if (stepId === "linerTexture") {
    requireField("linerTexture", "Выберите цвет и фактуру пленки");
  }

  if (stepId === "location") {
    requireField("location", "Выберите местоположение");
  }

  /* Оборудование — необязательные поля, валидация не нужна */

  if (stepId === "budget") {
    requireField("implementationTime", "Выберите срок реализации");
    requireField("budget", "Выберите бюджет");
  }

  if (stepId === "contact") {
    requireField("fullName", "Укажите имя");
    requireField("deliveryCity", "Укажите город поставки");
    requireField("phone", "Укажите контактный телефон");
    requireField("email", "Укажите email для получения расчета");

    if (formData.phone && formData.phone.replace(/\D/g, "").length !== 11) {
      errors.phone = "Укажите номер телефона полностью";
    }

    if (formData.email && !emailPattern.test(formData.email)) {
      errors.email = "Проверьте формат email";
    }
  }

  return errors;
}

export function isStepValid(stepId, formData) {
  return Object.keys(validateStep(stepId, formData)).length === 0;
}
