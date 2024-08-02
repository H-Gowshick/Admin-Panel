import React from "react";
import Chart from "react-apexcharts";
import { chartOptions, chartSeries } from "../data/chartConfig";

const UniqueVisitorChart = () => {
  return (
    <div className="col-xl-6 col-md-12">
      <div className="card">
        <div className="card-header">
          <h5>Customer Analytics</h5>
        </div>
        <div className="card-body ps-4 pt-4 pb-0">
          <Chart options={chartOptions} series={chartSeries} type="line" height={230} />
        </div>
      </div>
    </div>
  );
};

export default UniqueVisitorChart;