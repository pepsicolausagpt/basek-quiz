import { optionLabels } from "../data/quizOptions";

const formatValue = (value) => {
  if (Array.isArray(value)) {
    return value.length ? value.map((item) => optionLabels[item] || item).join(", ") : "Не выбрано";
  }

  if (value === null || value === undefined || value === "") {
    return "Не указано";
  }

  return optionLabels[value] || String(value);
};

const formatDate = (isoDate) =>
  new Intl.DateTimeFormat("ru-RU", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(isoDate));

export function formatLeadEmail(leadData) {
  const contact = leadData.contact;

  return [
    "Новая заявка на расчет бассейна с облицовкой ПВХ",
    "",
    "Контакты клиента:",
    `Имя: ${formatValue(contact.fullName)}`,
    `Город поставки: ${formatValue(contact.deliveryCity)}`,
    `Телефон: ${formatValue(contact.phone)}`,
    `Email: ${formatValue(contact.email)}`,
    "",
    "Параметры бассейна:",
    `Ширина: ${formatValue(leadData.poolWidth)} м`,
    `Длина: ${formatValue(leadData.poolLength)} м`,
    `Тип пленки: ${formatValue(leadData.linerType)}`,
    "",
    "Местоположение:",
    `Где будет расположен бассейн: ${formatValue(leadData.location)}`,
    "",
    "Оборудование:",
    `Решение по оборудованию: ${formatValue(leadData.equipmentSolution)}`,
    `Элементы оборудования: ${formatValue(leadData.equipmentItems)}`,
    `Обеззараживание воды: ${formatValue(leadData.waterDisinfection)}`,
    `Противоток: ${formatValue(leadData.counterflow)}`,
    `Нагрев воды: ${formatValue(leadData.waterHeating)}`,
    "",
    "Дополнительно:",
    `Дополнительные товары: ${formatValue(leadData.additionalItems)}`,
    `Учесть акцию: ${formatValue(leadData.promotion)}`,
    "",
    "Сроки и бюджет:",
    `Срок реализации: ${formatValue(leadData.implementationTime)}`,
    `Бюджет: ${formatValue(leadData.budget)}`,
    `Комментарий: ${formatValue(leadData.comment)}`,
    "",
    `Источник: ${leadData.source}`,
    `Дата заявки: ${formatDate(leadData.createdAt)}`,
  ].join("\n");
}
