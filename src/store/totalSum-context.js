import { createContext, useState } from "react";
import {
  CalculateTimeOfUse,
  calculateTiers,
} from "../components/Calculations/helper";

const TotalSumContext = createContext({
  kwUsed: 0,
  totalSumTier: {
    tier1: 0,
    tier2: 0,
    tier3: 0,
    tier1Price: 0,
    tier2Price: 0,
    tier3Price: 0,
    tier1Calc: 0,
    tier2Calc: 0,
    tier3Calc: 0,
    powerAccessCharge: 0,
    tax: 0,
    stateEnergySurcharge: 0,
    sum: 0,
  },
  totalSumTime: {
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
  },
  timeOfUsePercentages: [50, 20, 30],
  tier: "",
  zone: "",
  totalSumTierFunc(sum) {},
  totalSumTimeFunc(sum) {},
  timeofuseFunc(perc) {},
  kwUsedFunc(kwhUsed) {},
  tierFunc(tier) {},
  zoneFunc(zipCode) {},
});

export function TotalSumContextProvider(props) {
  const [timeofUsePerc, setTimeOfUsePerc] = useState([50, 20, 30]);
  const [kwUsed, setKwUsed] = useState(558);
  const [tier, setTier] = useState("tier1");
  const [zone, setZone] = useState("zone2");

  const [totalSumTier, setTotalSumTier] = useState(
    calculateTiers(kwUsed, tier, zone)
  );
  const [totalSumTimeOfUse, setTotalSumTimeOfUse] = useState(
    CalculateTimeOfUse(timeofUsePerc, kwUsed)
  );

  function totalSumTierHandler(sum) {
    setTotalSumTier(sum);
  }
  function timeOfUsePercHandler(perc) {
    setTimeOfUsePerc(perc);
  }

  function kwUsedHandler(kwhUsed) {
    setKwUsed(kwhUsed);
  }

  function totalSumTimeOfUseHandler(sum) {
    setTotalSumTimeOfUse(sum);
  }
  function past12MonthTierHandler(tier) {
    setTier(tier);
  }
  function zoneHandler(zipCode) {
    setZone(zipCode);
  }
  const context = {
    kwUsed: kwUsed,
    totalSumTier: totalSumTier,
    totalSumTime: totalSumTimeOfUse,
    timeOfUsePercentages: timeofUsePerc,
    tier: tier,
    zone: zone,
    totalSumTierFunc: totalSumTierHandler,
    totalSumTimeFunc: totalSumTimeOfUseHandler,
    timeofuseFunc: timeOfUsePercHandler,
    tierFunc: past12MonthTierHandler,
    zoneFunc: zoneHandler,
    kwUsedFunc: kwUsedHandler,
  };

  return (
    <TotalSumContext.Provider value={context}>
      {props.children}
    </TotalSumContext.Provider>
  );
}

export default TotalSumContext;
