import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Router from "./router";
import SideBar from "./components/Sidebar";

export default function App() {
  return (
    <BrowserRouter>
      <section className="main-container">
        <SideBar />
        <section className="content-container">
          <Router />
        </section>
      </section>
    </BrowserRouter>
  );
}
