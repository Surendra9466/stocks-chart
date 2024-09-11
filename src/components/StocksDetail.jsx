import { useState } from "react";
import ChartView from "./ChartView";
import { relDiff } from "../utils";
import { PeriodicTabs } from "./PeriodicTabs";
import { graphData } from "../mockApiData/index";

const StocksDetail = () => {
  const [activeGraph, setActiveGraph] = useState(graphData["1D"]);

  const CAGR =
    activeGraph && activeGraph.length && activeGraph.length > 2
      ? relDiff(activeGraph[0]?.[1], activeGraph[activeGraph.length - 1]?.[1])
      : null;
  const isCAGRpos = CAGR ? CAGR >= 0 : null;
  const priceDiff = Math.abs(
    activeGraph[0]?.[1] - activeGraph[activeGraph.length - 1]?.[1]
  );

  return (
    <div>
      <h1 className="text-[#1A243A] text-6xl mb-4 flex">25063 <span className="text-2xl text-[#BDBEBF] ml-2">(Nifty 50)</span></h1>
      <p
        className={`text-[#67BF6B] mt-2.5 ${
          isCAGRpos ? "text-green-375" : " text-red-400"
        }`}
      >
        {isCAGRpos ? "+" : "-"}
        {priceDiff.toFixed(2)} ({CAGR.toFixed(2)}%)
      </p>
      <PeriodicTabs setActiveGraph={setActiveGraph} />
      <div className="mt-5"><ChartView activeGraph={activeGraph} /></div>
    </div>
  );
};

export default StocksDetail;
