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
  StateEnergySurcharge,
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
  let reminderTier2 = null;
  let reminderTier3 = null;
  let sum = 0;

  let tierOneSelectedPrice = null;
  let tierTwoSelectedPrice = null;
  let tierThreeSelectedPrice = null;
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

  if (kwUsed === 0) return 0;

  if (kwUsed <= TierOneAllowence) {
    sum += kwUsed * tierOneSelectedPrice;
    sum += PowerAccessChargeTierOne;
    const SalesTaxes = sum * 0.1;
    sum += SalesTaxes + StateEnergySurcharge;
    return Math.round(sum);
  } else if (kwUsed <= 3000) {
    sum += TierOneAllowence * tierOneSelectedPrice;
    reminderTier2 = kwUsed - TierOneAllowence;
    sum += reminderTier2 * tierTwoSelectedPrice;
    sum += PowerAccessChargeTierTwo;
    const SalesTaxes = sum * 0.1;
    sum += SalesTaxes + StateEnergySurcharge;
    return Math.round(sum);
  } else if (kwUsed > 3000) {
    sum += TierOneAllowence * tierOneSelectedPrice;
    sum += TierTwoAllowence * tierTwoSelectedPrice;
    reminderTier3 = kwUsed - (TierOneAllowence + TierTwoAllowence);
    sum += reminderTier3 * tierThreeSelectedPrice;
    sum += PowerAccessChargeTierThree;
    const SalesTaxes = sum * 0.1;
    sum += SalesTaxes + StateEnergySurcharge;
    return Math.round(sum);
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

export function CalculateTimeOfUse(array, useage) {
  if (useage === 0) return 0;
  let [base, high, low] = array;

  if (month === "Jan") {
    base = (base / 100) * useage * BasePriceJan;
    high = (high / 100) * useage * HighPeakPriceJan;
    low = (low / 100) * useage * LowPeakPriceJan;
    let sum = base + high + low;
    sum += sum * 0.1;
    sum += TimeOfUseServiceCharge;
    return Math.round(sum);
  } else if (month === "April") {
    base = (base / 100) * useage * BasePriceApril;
    high = (high / 100) * useage * HighPeakPriceApril;
    low = (low / 100) * useage * LowPeakPriceApril;
    let sum = base + high + low;
    sum += sum * 0.1;
    sum += TimeOfUseServiceCharge;
    return Math.round(sum);
  } else if (month === "June") {
    base = (base / 100) * useage * BasePriceJune;
    high = (high / 100) * useage * HighPeakPriceJune;
    low = (low / 100) * useage * LowPeakPriceJune;
    let sum = base + high + low;
    sum += sum * 0.1;
    sum += TimeOfUseServiceCharge;
    return Math.round(sum);
  } else if (month === "July") {
    base = (base / 100) * useage * BasePriceJuly;
    high = (high / 100) * useage * HighPeakPriceJuly;
    low = (low / 100) * useage * LowPeakPriceJuly;
    let sum = base + high + low;
    sum += sum * 0.1;
    sum += TimeOfUseServiceCharge;
    return Math.round(sum);
  } else if (month === "Oct") {
    base = (base / 100) * useage * BasePriceOct;
    high = (high / 100) * useage * HighPeakPriceOct;
    low = (low / 100) * useage * LowPeakPriceOct;
    let sum = base + high + low;
    sum += sum * 0.1;
    sum += TimeOfUseServiceCharge;
    return Math.round(sum);
  }
}
