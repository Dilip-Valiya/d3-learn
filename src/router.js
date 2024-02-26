import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { componentLazyLoader } from "./utils";

const LinePlotWrapper = React.lazy(() => import("./Pages/LinePlot"));
const BarChart = React.lazy(() =>
  componentLazyLoader(() => import("./Pages/BarGraph"))
);

export default function Router() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <Routes>
        <Route path="/line-plot-infinite" Component={LinePlotWrapper} />
        <Route path="/bar-chart" Component={BarChart} />
        <Route path="/" Component={LinePlotWrapper} />
      </Routes>
    </Suspense>
  );
}
