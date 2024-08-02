import React from "react";

function StatCard({ id, title, value, subtitle }) {
  return (
    <div className="stat-card" id={id}>
      <h3>{title}</h3>
      <h2>{value}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

export default StatCard;
