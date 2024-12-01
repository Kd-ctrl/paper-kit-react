import React from "react";
import "../css/NumberCard.css";

const Dashboard = () => {
  const cards = [
    {
        title: "Projects",
        value: 2,
        icon: "📊",
        bgColor: "#bdddff",
        bdColor:"#005f99"
      },
      {
        title: "Tasks",
        value: 3,
        icon: "🔶",
        bgColor: "#fff4cf",
        bdColor:"#d4a017"
      },
      {
        title: "Dependencies",
        value: 50,
        icon: "📡",
        bgColor: "#ffe4e4",
        bdColor:"#c94c4c"
      },
      {
        title: "Total Users",
        value: 20,
        icon: "👤",
        bgColor: "#e6f9f1",
        bdColor:"#309960"
        
      }]

return (
  <div className=" dashboard-place">
    <div className="dashboard-container">
      
      {cards.map((card, index) => (
        <div
          key={index}
          className="dashboard-card"
          style={{ backgroundColor: card.bgColor,
            border: `2px solid ${card.bdColor}`,
           }}
        >
          <div className="dashboard-card-header">
            <h4>{card.title.toUpperCase()}</h4>
          </div>
          <div className="card-body">
            <h2>{card.value}</h2>
            <span className="arrow">⬆</span>
          </div>
          <div className="card-icon">
            <span>{card.icon}</span>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Dashboard;