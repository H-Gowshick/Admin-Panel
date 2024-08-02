import React from "react";
import StatCard from "./StatCard";
import TotalIncome from "./TotalIncome";
import CustomerTable from "./CustomerTable";
import DashboardHeader from "./DashboardHeader";
import UniqueVisitorChart from "./UniqueVisitorChart";
import './dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <div className="stats-row">
        <StatCard
          id="Download"
          title="Downloads"
          value="31K"
          subtitle="Jan 1st - Feb 1st"
        />
        <StatCard
          id="new_users"
          title="New Users"
          value="4,200"
          subtitle="↑ 400 (22%)"
        />
        <StatCard
          id="new_reg"
          title="New Registers"
          value="1,200"
          subtitle="↓ 90 (14%)"
        />
        <TotalIncome />
      </div>
      <CustomerTable />
      <UniqueVisitorChart />
    </div>
  );
}

export default Dashboard;
