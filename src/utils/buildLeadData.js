import { LEAD_SOURCE } from "../config/constants";

export function buildLeadData(formData) {
  const createdAt = new Date().toISOString();
  const contact = {
    fullName: formData.fullName?.trim() || "",
    deliveryCity: formData.deliveryCity?.trim() || "",
    phone: formData.phone?.trim() || "",
    email: formData.email?.trim() || "",
  };

  return {
    source: LEAD_SOURCE,
    poolWidth: formData.poolWidth,
    poolLength: formData.poolLength,
    linerType: formData.linerType,
    location: formData.location,
    equipmentSolution: formData.equipmentSolution,
    equipmentItems: formData.equipmentItems,
    waterDisinfection: formData.waterDisinfection,
    counterflow: formData.counterflow,
    waterHeating: formData.waterHeating,
    additionalItems: formData.additionalItems,
    promotion: formData.promotion,
    implementationTime: formData.implementationTime,
    budget: formData.budget,
    comment: formData.comment?.trim() || "",
    contact,
    createdAt,
  };
}
