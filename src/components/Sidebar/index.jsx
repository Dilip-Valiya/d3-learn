import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

function LinkButton({ to, text, active }) {
  return (
    <Link className={`sidebar__link ${active ? "selected" : ""}`} to={to}>
      {text}
    </Link>
  );
}

function SideBar() {
  const { pathname } = useLocation();
  return (
    <aside className="sidebar">
      <Link className="sidebar__heading" to="/line-plot-infinite">
        <h1>D3 Graph</h1>
      </Link>
      <LinkButton
        to="/line-plot-infinite"
        text="Line Plot"
        active={pathname === "/line-plot-infinite"}
      />
      <LinkButton
        to="/bar-chart"
        text="Bar Chart"
        active={pathname === "/bar-chart"}
      />
    </aside>
  );
}

export default SideBar;
