import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function SideBar() {
  return (
    <aside className="sidebar">
      <Link className="sidebar__heading" to="/line-plot-infinite">
        <h1>D3 Graph</h1>
      </Link>
      <Link className="sidebar__link" to="/line-plot-infinite">
        Line Plot
      </Link>
      <Link className="sidebar__link" to="/bar-chart">
        Bar Chart
      </Link>
    </aside>
  );
}

export default SideBar;
