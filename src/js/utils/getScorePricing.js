const salesTax = 0.0625;
const durationPricingFactor = 1;
const costPerPart = 3;
const minPrice = 10;

export default function getScorePricing(work) {
  if (work.instrumentation.length === 0 || (work.instrumentation.length === 1 && work.instrumentation[0] === "elec")) {
    return null;
  }
  const durationCost = work.duration * durationPricingFactor;
  const instrumentationCost = costPerPart * work.instrumentation.length;
  const subTotal = Math.max(minPrice, durationCost + instrumentationCost);
  const taxes = salesTax * subTotal;
  return Math.round((subTotal + taxes) / 0.5) * 0.5;
}
