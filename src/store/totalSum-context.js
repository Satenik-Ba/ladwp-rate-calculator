import { createContext, useState } from "react";

const TotalSumContext = createContext({
  kwUsed: 0,
  totalSumTier: 0,
  totalSumTime: 0,
  timeOfUsePercentages: [50, 20, 30],
  totalSumTierFunc(sum) {},
  totalSumTimeFunc(sum) {},
  timeofuseFunc(perc) {},
  kwUsedFunc(kwhUsed) {},
});

export function TotalSumContextProvider(props) {
  const [timeofUsePerc, setTimeOfUsePerc] = useState([50, 20, 30]);
  const [totalSumTier, setTotalSumTier] = useState(0);
  const [totalSumTimeOfUse, setTotalSumTimeOfUse] = useState(0);
  const [kwUsed, setKwUsed] = useState(0);

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
  const context = {
    kwUsed: kwUsed,
    totalSumTier: totalSumTier,
    totalSumTime: totalSumTimeOfUse,
    timeOfUsePercentages: timeofUsePerc,
    totalSumTierFunc: totalSumTierHandler,
    totalSumTimeFunc: totalSumTimeOfUseHandler,
    timeofuseFunc: timeOfUsePercHandler,
    kwUsedFunc: kwUsedHandler,
  };

  return (
    <TotalSumContext.Provider value={context}>
      {props.children}
    </TotalSumContext.Provider>
  );
}

export default TotalSumContext;
