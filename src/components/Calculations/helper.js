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
  TierOneAllowence,
  TierTwoAllowence,
} from "../../constants/constants";

let month = "Jan";
export function monthSelect(selectedMonth) {
  month = selectedMonth;
}

export function calculateTiers(kwUsed) {
  let reminderTier2 = 0;
  let reminderTier3 = 0;
  let sum = 0;

  let tierOneSelectedPrice = 0;
  let tierTwoSelectedPrice = 0;
  let tierThreeSelectedPrice = 0;
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

  if (kwUsed === 0)
    return [
      kwUsed,
      reminderTier2,
      reminderTier3,
      tierOneSelectedPrice,
      tierTwoSelectedPrice,
      tierThreeSelectedPrice,
      0,
      0,
      0,
      sum,
    ];

  if (kwUsed <= TierOneAllowence) {
    sum += kwUsed * tierOneSelectedPrice;
    sum += PowerAccessChargeTierOne;
    const SalesTaxes = sum * 0.1;
    sum += SalesTaxes + kwUsed * 0.0003;
    return [
      kwUsed,
      0,
      0,
      tierOneSelectedPrice,
      tierTwoSelectedPrice,
      tierThreeSelectedPrice,
      PowerAccessChargeTierOne,
      Math.round(SalesTaxes),
      Math.round(kwUsed * 0.0003 * 100) / 100,
      Math.round(sum),
    ];
  } else if (kwUsed <= 3000) {
    sum += TierOneAllowence * tierOneSelectedPrice;
    reminderTier2 = kwUsed - TierOneAllowence;
    sum += reminderTier2 * tierTwoSelectedPrice;
    sum += PowerAccessChargeTierTwo;
    const SalesTaxes = sum * 0.1;
    sum += SalesTaxes + kwUsed * 0.0003;
    return [
      TierOneAllowence,
      reminderTier2,
      0,
      tierOneSelectedPrice,
      tierTwoSelectedPrice,
      tierThreeSelectedPrice,
      PowerAccessChargeTierTwo,
      Math.round(SalesTaxes),
      Math.round(kwUsed * 0.0003 * 100) / 100,
      Math.round(sum),
    ];
  } else if (kwUsed > 3000) {
    sum += TierOneAllowence * tierOneSelectedPrice;
    sum += TierTwoAllowence * tierTwoSelectedPrice;
    reminderTier3 = kwUsed - (TierOneAllowence + TierTwoAllowence);
    sum += reminderTier3 * tierThreeSelectedPrice;
    sum += PowerAccessChargeTierThree;
    const SalesTaxes = sum * 0.1;
    sum += SalesTaxes + kwUsed * 0.0003;
    return [
      TierOneAllowence,
      TierTwoAllowence,
      reminderTier3,
      tierOneSelectedPrice,
      tierTwoSelectedPrice,
      tierThreeSelectedPrice,
      PowerAccessChargeTierThree,
      Math.round(SalesTaxes),
      Math.round(kwUsed * 0.0003 * 100) / 100,
      Math.round(sum),
    ];
  }
}

export function adjustRange(currVal, array, name) {
  let [base, high, low] = array;
  const max = 100;
  const min = 0;

  if (name === "base") {
    let diff = currVal - base;
    base = currVal;
    if (diff > 0 && high > min && low > min) {
      high -= diff / 2;
      low -= diff / 2;
    }
    if (diff < 0 && high < max && low < max) {
      high -= diff / 2;
      low -= diff / 2;
    }
    if (diff > 0 && high > min && low === min) {
      high -= diff;
    }
    if (diff > 0 && low > min && high === min) {
      low -= diff;
    }
    if (diff < 0 && high < max && low === max) {
      high -= diff;
    }
    if (diff < 0 && low < max && high === max) {
      low -= diff;
    }
    return [base, high, low];
  }

  if (name === "high") {
    let diff = currVal - high;
    high = currVal;

    if (diff > 0 && base > min && low > min) {
      base -= diff / 2;
      low -= diff / 2;
    }
    if (diff < 0 && base < max && low < max) {
      base -= diff / 2;
      low -= diff / 2;
    }
    if (diff > 0 && base > min && low === min) {
      base -= diff;
    }
    if (diff > 0 && low > min && base === min) {
      low -= diff;
    }
    if (diff < 0 && base < max && low === max) {
      base -= diff;
    }
    if (diff < 0 && low < max && base === max) {
      low -= diff;
    }

    return [base, high, low];
  }
  if (name === "low") {
    let diff = currVal - low;
    low = currVal;

    if (diff > 0 && high > min && base > min) {
      high -= diff / 2;
      base -= diff / 2;
    }
    if (diff < 0 && high < max && base < max) {
      high -= diff / 2;
      base -= diff / 2;
    }
    if (diff > 0 && high > min && base === min) {
      high -= diff;
    }
    if (diff > 0 && base > min && high === min) {
      base -= diff;
    }
    if (diff < 0 && high < max && base === max) {
      high -= diff;
    }
    if (diff < 0 && base < max && high === max) {
      base -= diff;
    }

    return [base, high, low];
  }
}

export function CalculateTimeOfUse(perc, useage) {
  if (useage === 0) return [0, 0, 0, 0, 0, 0, 0, 0, 0];
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
    return [
      base,
      high,
      low,
      BasePriceJan,
      HighPeakPriceJan,
      LowPeakPriceJan,
      Math.round(tax),
      TimeOfUseServiceCharge,
      Math.round(sum),
    ];
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
    return [
      base,
      high,
      low,
      BasePriceApril,
      HighPeakPriceApril,
      LowPeakPriceApril,
      Math.round(tax),
      TimeOfUseServiceCharge,
      Math.round(sum),
    ];
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
    return [
      base,
      high,
      low,
      BasePriceJune,
      HighPeakPriceJune,
      LowPeakPriceJune,
      Math.round(tax),
      TimeOfUseServiceCharge,
      Math.round(sum),
    ];
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
    return [
      base,
      high,
      low,
      BasePriceJuly,
      HighPeakPriceJuly,
      LowPeakPriceJuly,
      Math.round(tax),
      TimeOfUseServiceCharge,
      Math.round(sum),
    ];
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
    return [
      base,
      high,
      low,
      BasePriceOct,
      HighPeakPriceOct,
      LowPeakPriceOct,
      Math.round(tax),
      TimeOfUseServiceCharge,
      Math.round(sum),
    ];
  }
}
