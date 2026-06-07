export const requestTypeOptions = [
  { value: "liner_only", label: "Только покупка пленки ПВХ" },
  { value: "liner_installation", label: "Покупка пленки ПВХ с монтажными работами" },
  { value: "polymer_panels_pool", label: "Возведение бассейна на основе конструктива из полимерных панелей" },
];

export const poolWidthOptions = ["3", "3.5", "4", "4.5", "5"];
export const poolLengthOptions = ["6", "7", "8", "9", "10", "12"];

export const linerTypeOptions = [
  { value: "mosaic", label: "Мозаика" },
  { value: "marble", label: "Мрамор" },
];

export const locationOptions = [
  { value: "outdoor", label: "На улице" },
  { value: "indoor", label: "В помещении" },
];

/* ═══════════════════════════════════════
   ШАГ 3 — Оборудование
   ═══════════════════════════════════════ */

export const equipmentSolutionOptions = [
  {
    value: "indoor_tech_compartment",
    label: "Конфигурация данного оборудования мне необходима внутри технологического отсека (бассейн на улице)",
  },
  {
    value: "tech_stand",
    label: "Конфигурация данного оборудования мне необходима на технологическом стенде (бассейн в помещении)",
  },
  {
    value: "equipment_only",
    label: "Мне необходимо только оборудование",
  },
];

export const equipmentItemOptions = [
  { value: "sand_filter", label: "Песочная фильтровальная установка" },
  { value: "water_lighting", label: "Подсветка воды" },
];

export const waterDisinfectionOptions = [
  { value: "uv_lamp", label: "УФ лампа для дезинфекции воды" },
  { value: "auto_chemical_dosing", label: "Станция автоматического дозирования хим. реагентов" },
  { value: "anti_algae_dosing", label: "Блок автоматического дозирования средств против водорослей" },
  { value: "auto_chlorinator", label: "Автохлоратор" },
];

export const counterflowOptions = [
  { value: "no", label: "Нет" },
  { value: "mounted_in_extra_compartment", label: "Противоток будет смонтирован в доп. отсеке" },
  { value: "equipment_without_installation", label: "Противоток просто как оборудование, без монтажа" },
];

export const waterHeatingOptions = [
  { value: "no", label: "Нет" },
  { value: "electric_flow_heater", label: "Проточным электрическим водонагревателем" },
  { value: "gas_boiler_heat_exchanger", label: "Теплообменником от газового котла" },
  {
    value: "heat_pump",
    label: "Тепловым насосом (при отсутствии газа и лимите электроэнергии на участке и сезонном использовании бассейна)",
  },
];

/* ═══════════════════════════════════════
   ШАГ 4 — Дополнительно (TODO: обновить по скриншотам)
   ═══════════════════════════════════════ */

export const additionalItemOptions = [
  { value: "pool_pavilion", label: "Павильон для бассейна" },
  { value: "border_stone", label: "Бордюрный камень" },
  { value: "stainless_ladder", label: "Лестницу из нержавеющей стали" },
  { value: "manual_vacuum", label: "Ручной пылесос для очистки дна и стен" },
  { value: "manual_chemistry_set", label: "Набор химии для ручной дезинфекции воды" },
  { value: "auto_dosing_chemistry_set", label: "Набор химии для автоматической станции дозирования" },
];

export const promotionOptions = [
  { value: "no", label: "Нет" },
  { value: "4_of_6", label: "4 из 6" },
  { value: "3_of_5", label: "3 из 5" },
];

/* ═══════════════════════════════════════
   ШАГ 5 — Время и бюджет
   ═══════════════════════════════════════ */

export const implementationTimeOptions = [
  { value: "this_year", label: "В этом году" },
  { value: "next_year", label: "В следующем году" },
  { value: "researching", label: "Изучаю рынок" },
];

export const budgetOptions = [
  { value: "economy_up_to_400k", label: "Эконом (до 400 000 рублей)" },
  { value: "standard_up_to_600k", label: "Стандарт (до 600 000 рублей)" },
  { value: "premium_up_to_1m", label: "Премиум (до 1 000 000 рублей)" },
  { value: "over_1m", label: "Более 1 000 000 рублей" },
];

/* ═══════════════════════════════════════
   Словарь value → label для email
   ═══════════════════════════════════════ */

export const optionLabels = Object.fromEntries(
  [
    ...requestTypeOptions,
    ...locationOptions,
    ...equipmentSolutionOptions,
    ...equipmentItemOptions,
    ...waterDisinfectionOptions,
    ...counterflowOptions,
    ...waterHeatingOptions,
    ...additionalItemOptions,
    ...promotionOptions,
    ...implementationTimeOptions,
    ...budgetOptions,
    ...linerTypeOptions,
  ].map((option) => [option.value, option.label]),
);

