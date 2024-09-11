import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getStockColor } from "../utils/index";
import { options } from "../utils/index";

const ChartView = ({activeGraph}) => {
  const showTimeInToolTip = false;
  const stockColor = getStockColor(activeGraph);
  const stockOptions = options([...activeGraph], stockColor, showTimeInToolTip);

  return <HighchartsReact highcharts={Highcharts} options={stockOptions} />;
};

export default ChartView;
