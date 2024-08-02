export const chartOptions = {
  chart: {
    type: "line",
    height: 230,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  legend: {
    position: "top",
  },
  colors: ["#73B4FF", "#59E0C5", "#ff869a"],
};

export const chartSeries = [
  {
    name: "New Users",
    data: [30, 40, 35, 50, 49, 60, 70, 50, 60, 35, 50, 45],
  },
  {
    name: "Income",
    data: [20, 30, 45, 50, 49, 50, 60, 60, 50, 40, 50, 45],
  },
  {
    name: "Downloads",
    data: [20, 30, 45, 40, 49, 60, 65, 70, 60, 40, 50, 30],
  },
];
