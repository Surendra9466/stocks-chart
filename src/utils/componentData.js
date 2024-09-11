import StocksDetail from "../components/StocksDetail";
import Summary from "../components/Summary";
import Statistics from "../components/Statistics";
import Analysis from "../components/Analysis";

export const tabsData = [
  {
    id: 0,
    label: "Summary",
    component: <Summary />,
  },
  {
    id: 1,
    label: "Chart",
    component: <StocksDetail />,
  },
  {
    id: 2,
    label: "Statistics",
    component: <Statistics />,
  },
  {
    id: 3,
    label: "Analysis",
    component: <Analysis />,
  },
];
