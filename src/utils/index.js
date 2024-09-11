import { STOCK_GREEN, STOCK_RED } from "./constants";
const Color = require("color");

const xAxis = (color) => {
  return {
    crosshair: {
      color: color.gradient,
      dashStyle: "LongDash",
    },
    type: "datetime",
    main: "",
    lineColor: "#DADFEA",
    tickLength: 0,
    labels: {
      style: {
        color: "#9092A3",
        font: "Gilroy",
      },
      enabled: false,
    },
  };
};

export const arrayColumn = (arr, n) => arr.map((x) => x[n]);

export const getXAxisConfig = (color) => {
  return { ...xAxis(color) };
};

export const getStockColor = (prices) => {
  if (prices.length < 2) return STOCK_GREEN;
  const end = prices[prices.length - 1]?.[1] || 0;
  const start = prices[0]?.[1] || 0;
  return start <= end ? STOCK_GREEN : STOCK_RED;
};

export const getShortDate = (value) => {
  return new Date(value)
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, " ");
};

export const formatAMPM = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

export const getCommonOptions = (stockColor) => {
  return {
    chart: {
      type: "area",
    },
    title: {
      text: "",
      color: "white",
    },
    time: {
      timezoneOffset: -330, // -5:30 hrs India is East to UTC
    },
    credits: false,
    legend: {
      enabled: false,
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, Color(stockColor.gradient).alpha(0.4).string()],
            [1, Color(stockColor.gradient).alpha(0).string()],
          ],
        },
        marker: {
          enabled: false,
          states: {
            hover: {
              fillColor: stockColor.line,
              lineColor: "#ffffff",
              lineWidth: 3,
              radius: 8,
            },
          },
        },
        lineWidth: 2,
        lineColor: stockColor.line,
        threshold: null,
      },
      series: {
        turboThreshold: 5000,
      },
    },
    yAxis: {
      visible: false,
      crosshair: {
        color: stockColor.gradient,
        dashStyle: "LongDash",
      },
    },
  };
};

export const options = (stockData, stockColor, showTimeInToolTip) => ({
  ...getCommonOptions(stockColor),
  tooltip: {
    animation: true,
    borderRadius: 20,
    backgroundColor: "white",
    borderWidth: 0,
    padding: 12,
    formatter: function () {
      const timestamp = stockData[this.key]?.[0];
      const dateObj = new Date(timestamp);
      const time = formatAMPM(dateObj);
      return `<span style="color: var(--font-200);">${getShortDate(
        dateObj
      )}</span><br/><br/><strong style="color: var(--font-500);">₹${this.y}${
        showTimeInToolTip
          ? `</strong><span style="color: var(--font-200); padding-left:8px;">${" "}${time}</span>`
          : ``
      }`;
    },
    style: { opacity: 1 },
  },
  xAxis: getXAxisConfig(stockColor),
  series: [
    {
      data: arrayColumn([...stockData], 1),
    },
  ],
});

export const relDiff = (a, b) => {
  if (!!a && !!b) return ((b - a) * 100) / a;
  else return null;
};
