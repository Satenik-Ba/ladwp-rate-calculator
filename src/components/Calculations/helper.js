import {
  TierOnePriceJan,
  TierTwoPriceJan,
  TierThreePriceJan,
  TierOnePriceApril,
  TierTwoPriceApril,
  TierThreePriceApril,
  TierOnePriceJune,
  TierTwoPriceJune,
  TierThreePriceJune,
  TierOnePriceJuly,
  TierTwoPriceJuly,
  TierThreePriceJuly,
  TierOnePriceOct,
  TierTwoPriceOct,
  TierThreePriceOct,
  PowerAccessChargeTierThree,
  HighPeakPriceJan,
  LowPeakPriceJan,
  BasePriceJan,
  HighPeakPriceApril,
  LowPeakPriceApril,
  BasePriceApril,
  HighPeakPriceJune,
  LowPeakPriceJune,
  BasePriceJune,
  HighPeakPriceJuly,
  LowPeakPriceJuly,
  BasePriceJuly,
  HighPeakPriceOct,
  LowPeakPriceOct,
  BasePriceOct,
  TimeOfUseServiceCharge,
  PowerAccessChargeTierOne,
  PowerAccessChargeTierTwo,
  TierOneAllowenceZone1,
  TierTwoAllowenceZone1,
  TierThreeAllowenceZone1,
  TierOneAllowenceZone2,
  TierTwoAllowenceZone2,
  TierThreeAllowenceZone2,
} from "../../constants/constants";

let month = "Jan";
export function monthSelect(selectedMonth) {
  month = selectedMonth;
}

export function calculateTiers(kwUsed, tier, zone) {
  let reminderTier2 = 0;
  let reminderTier3 = 0;
  let sum = 0;
  let tierOneAllowence;
  let tierTwoAllowence;
  let tierThreeAllowence;

  let tierOneSelectedPrice = 0;
  let tierTwoSelectedPrice = 0;
  let tierThreeSelectedPrice = 0;

  if (zone === "zone1") {
    tierOneAllowence = TierOneAllowenceZone1;
    tierTwoAllowence = TierTwoAllowenceZone1;
    tierThreeAllowence = TierThreeAllowenceZone1;
  } else if (zone === "zone2") {
    tierOneAllowence = TierOneAllowenceZone2;
    tierTwoAllowence = TierTwoAllowenceZone2;
    tierThreeAllowence = TierThreeAllowenceZone2;
  }

  if (kwUsed === 0)
    return {
      tier1: kwUsed,
      tier2: reminderTier2,
      tier3: reminderTier3,
      tier1Price: tierOneSelectedPrice,
      tier2Price: tierTwoSelectedPrice,
      tier3Price: tierThreeSelectedPrice,
      tier1Calc: 0,
      tier2Calc: 0,
      tier3Calc: 0,
      powerAccessCharge: 0,
      tax: 0,
      stateEnergySurcharge: 0,
      sum: sum,
    };

  if (month === "Jan") {
    tierOneSelectedPrice = TierOnePriceJan;
    tierTwoSelectedPrice = TierTwoPriceJan;
    tierThreeSelectedPrice = TierThreePriceJan;
  } else if (month === "April") {
    tierOneSelectedPrice = TierOnePriceApril;
    tierTwoSelectedPrice = TierTwoPriceApril;
    tierThreeSelectedPrice = TierThreePriceApril;
  } else if (month === "June") {
    tierOneSelectedPrice = TierOnePriceJune;
    tierTwoSelectedPrice = TierTwoPriceJune;
    tierThreeSelectedPrice = TierThreePriceJune;
  } else if (month === "July") {
    tierOneSelectedPrice = TierOnePriceJuly;
    tierTwoSelectedPrice = TierTwoPriceJuly;
    tierThreeSelectedPrice = TierThreePriceJuly;
  } else if (month === "Oct") {
    tierOneSelectedPrice = TierOnePriceOct;
    tierTwoSelectedPrice = TierTwoPriceOct;
    tierThreeSelectedPrice = TierThreePriceOct;
  }

  if (kwUsed <= tierOneAllowence) {
    let tier1Calc = kwUsed * tierOneSelectedPrice;
    let powerAccessCharge;
    sum += tier1Calc;

    if (tier === "tier2") {
      sum += PowerAccessChargeTierTwo;
      powerAccessCharge = PowerAccessChargeTierTwo;
    } else if (tier === "tier3") {
      sum += PowerAccessChargeTierThree;
      powerAccessCharge = PowerAccessChargeTierThree;
    } else {
      sum += PowerAccessChargeTierOne;
      powerAccessCharge = PowerAccessChargeTierOne;
    }

    const SalesTaxes = sum * 0.1;
    sum += SalesTaxes + kwUsed * 0.0003;
    return {
      tier1: kwUsed,
      tier2: 0,
      tier3: 0,
      tier1Price: tierOneSelectedPrice,
      tier2Price: tierTwoSelectedPrice,
      tier3Price: tierThreeSelectedPrice,
      tier1Calc: tier1Calc.toFixed(2),
      tier2Calc: 0,
      tier3Calc: 0,
      powerAccessCharge: powerAccessCharge.toFixed(2),
      tax: SalesTaxes.toFixed(2),
      stateEnergySurcharge: (kwUsed * 0.0003).toFixed(2),
      sum: sum.toFixed(2),
    };
  } else if (kwUsed <= tierOneAllowence + tierTwoAllowence) {
    let tier1Calc = tierOneAllowence * tierOneSelectedPrice;
    let powerAccessCharge;
    reminderTier2 = kwUsed - tierOneAllowence;
    let tier2Calc = reminderTier2 * tierTwoSelectedPrice;
    sum += tier1Calc + tier2Calc;
    if (tier === "tier3") {
      sum += PowerAccessChargeTierThree;
      powerAccessCharge = PowerAccessChargeTierThree;
    } else {
      sum += PowerAccessChargeTierTwo;
      powerAccessCharge = PowerAccessChargeTierTwo;
    }
    const SalesTaxes = sum * 0.1;
    sum += SalesTaxes + kwUsed * 0.0003;
    return {
      tier1: tierOneAllowence,
      tier2: reminderTier2,
      tier3: 0,
      tier1Price: tierOneSelectedPrice,
      tier2Price: tierTwoSelectedPrice,
      tier3Price: tierThreeSelectedPrice,
      tier1Calc: tier1Calc.toFixed(2),
      tier2Calc: tier2Calc.toFixed(2),
      tier3Calc: 0,
      powerAccessCharge: powerAccessCharge.toFixed(2),
      tax: SalesTaxes.toFixed(2),
      stateEnergySurcharge: (kwUsed * 0.0003).toFixed(2),
      sum: sum.toFixed(2),
    };
  } else if (kwUsed > tierThreeAllowence) {
    let tier1Calc = tierOneAllowence * tierOneSelectedPrice;
    let tier2Calc = tierTwoAllowence * tierTwoSelectedPrice;
    reminderTier3 = kwUsed - (tierOneAllowence + tierTwoAllowence);
    let tier3Calc = reminderTier3 * tierThreeSelectedPrice;
    sum += tier1Calc + tier2Calc + tier3Calc;
    sum += PowerAccessChargeTierThree;
    const SalesTaxes = sum * 0.1;
    sum += SalesTaxes + kwUsed * 0.0003;
    return {
      tier1: tierOneAllowence,
      tier2: tierTwoAllowence,
      tier3: reminderTier3,
      tier1Price: tierOneSelectedPrice,
      tier2Price: tierTwoSelectedPrice,
      tier3Price: tierThreeSelectedPrice,
      tier1Calc: tier1Calc.toFixed(2),
      tier2Calc: tier2Calc.toFixed(2),
      tier3Calc: tier3Calc.toFixed(2),
      powerAccessCharge: PowerAccessChargeTierThree.toFixed(2),
      tax: SalesTaxes.toFixed(2),
      stateEnergySurcharge: (kwUsed * 0.0003).toFixed(2),
      sum: sum.toFixed(2),
    };
  }
}

export function CalculateTimeOfUse(perc, useage) {
  if (useage === 0)
    return {
      basePerc: 0,
      highPerc: 0,
      lowPerc: 0,
      baseCalc: 0,
      highCalc: 0,
      lowCalc: 0,
      basePrice: 0,
      highPeakPrice: 0,
      lowPeakPrice: 0,
      tax: 0,
      timeOfUseServiceCharge: 0,
      stateEnergySurchage: 0,
      sum: 0,
    };
  let [base, high, low] = perc;

  if (month === "Jan") {
    base = Math.round((base / 100) * useage);
    let baseCalc = base * BasePriceJan;
    high = Math.round((high / 100) * useage);
    let highCalc = high * HighPeakPriceJan;
    low = Math.round((low / 100) * useage);
    let lowCalc = low * LowPeakPriceJan;
    let sum = baseCalc + highCalc + lowCalc;
    let tax = sum * 0.1;
    sum += tax;
    sum += TimeOfUseServiceCharge;
    sum += useage * 0.0003;
    return {
      basePerc: base,
      highPerc: high,
      lowPerc: low,
      baseCalc: baseCalc.toFixed(2),
      highCalc: highCalc.toFixed(2),
      lowCalc: lowCalc.toFixed(2),
      basePrice: BasePriceJan,
      highPeakPrice: HighPeakPriceJan,
      lowPeakPrice: LowPeakPriceJan,
      tax: tax.toFixed(2),
      timeOfUseServiceCharge: TimeOfUseServiceCharge.toFixed(2),
      stateEnergySurchage: (useage * 0.0003).toFixed(2),
      sum: sum.toFixed(2),
    };
  } else if (month === "April") {
    base = Math.round((base / 100) * useage);
    let baseCalc = base * BasePriceApril;
    high = Math.round((high / 100) * useage);
    let highCalc = high * HighPeakPriceApril;
    low = Math.round((low / 100) * useage);
    let lowCalc = low * LowPeakPriceApril;
    let sum = baseCalc + highCalc + lowCalc;
    let tax = sum * 0.1;
    sum += tax;
    sum += TimeOfUseServiceCharge;
    sum += useage * 0.0003;
    return {
      basePerc: base,
      highPerc: high,
      lowPerc: low,
      baseCalc: baseCalc.toFixed(2),
      highCalc: highCalc.toFixed(2),
      lowCalc: lowCalc.toFixed(2),
      basePrice: BasePriceApril,
      highPeakPrice: HighPeakPriceApril,
      lowPeakPrice: LowPeakPriceApril,
      tax: tax.toFixed(2),
      timeOfUseServiceCharge: TimeOfUseServiceCharge.toFixed(2),
      stateEnergySurchage: (useage * 0.0003).toFixed(2),
      sum: sum.toFixed(2),
    };
  } else if (month === "June") {
    base = Math.round((base / 100) * useage);
    let baseCalc = base * BasePriceJune;
    high = Math.round((high / 100) * useage);
    let highCalc = high * HighPeakPriceJune;
    low = Math.round((low / 100) * useage);
    let lowCalc = low * LowPeakPriceJune;
    let sum = baseCalc + highCalc + lowCalc;
    let tax = sum * 0.1;
    sum += tax;
    sum += TimeOfUseServiceCharge;
    sum += useage * 0.0003;
    return {
      basePerc: base,
      highPerc: high,
      lowPerc: low,
      baseCalc: baseCalc.toFixed(2),
      highCalc: highCalc.toFixed(2),
      lowCalc: lowCalc.toFixed(2),
      basePrice: BasePriceJune,
      highPeakPrice: HighPeakPriceJune,
      lowPeakPrice: LowPeakPriceJune,
      tax: tax.toFixed(2),
      timeOfUseServiceCharge: TimeOfUseServiceCharge.toFixed(2),
      stateEnergySurchage: (useage * 0.0003).toFixed(2),
      sum: sum.toFixed(2),
    };
  } else if (month === "July") {
    base = Math.round((base / 100) * useage);
    let baseCalc = base * BasePriceJuly;
    high = Math.round((high / 100) * useage);
    let highCalc = high * HighPeakPriceJuly;
    low = Math.round((low / 100) * useage);
    let lowCalc = low * LowPeakPriceJuly;
    let sum = baseCalc + highCalc + lowCalc;
    let tax = sum * 0.1;
    sum += tax;
    sum += TimeOfUseServiceCharge;
    sum += useage * 0.0003;
    return {
      basePerc: base,
      highPerc: high,
      lowPerc: low,
      baseCalc: baseCalc.toFixed(2),
      highCalc: highCalc.toFixed(2),
      lowCalc: lowCalc.toFixed(2),
      basePrice: BasePriceJuly,
      highPeakPrice: HighPeakPriceJuly,
      lowPeakPrice: LowPeakPriceJuly,
      tax: tax.toFixed(2),
      timeOfUseServiceCharge: TimeOfUseServiceCharge.toFixed(2),
      stateEnergySurchage: (useage * 0.0003).toFixed(2),
      sum: sum.toFixed(2),
    };
  } else if (month === "Oct") {
    base = Math.round((base / 100) * useage);
    let baseCalc = base * BasePriceOct;
    high = Math.round((high / 100) * useage);
    let highCalc = high * HighPeakPriceOct;
    low = Math.round((low / 100) * useage);
    let lowCalc = low * LowPeakPriceOct;
    let sum = baseCalc + highCalc + lowCalc;
    let tax = sum * 0.1;
    sum += tax;
    sum += TimeOfUseServiceCharge;
    sum += useage * 0.0003;
    return {
      basePerc: base,
      highPerc: high,
      lowPerc: low,
      baseCalc: baseCalc.toFixed(2),
      highCalc: highCalc.toFixed(2),
      lowCalc: lowCalc.toFixed(2),
      basePrice: BasePriceOct,
      highPeakPrice: HighPeakPriceOct,
      lowPeakPrice: LowPeakPriceOct,
      tax: tax.toFixed(2),
      timeOfUseServiceCharge: TimeOfUseServiceCharge.toFixed(2),
      stateEnergySurchage: (useage * 0.0003).toFixed(2),
      sum: sum.toFixed(2),
    };
  }
}
