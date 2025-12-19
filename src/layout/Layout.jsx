import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import "../styles/global.scss";

export default function Layout() {
  return (
    <div className="app-wrapper">
      <div className="container">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
