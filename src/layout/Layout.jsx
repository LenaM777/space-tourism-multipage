import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import "../styles/global.scss";

export default function Layout() {
  const location = useLocation();
  const route = location.pathname.split("/")[1] || "home";
  return (
    <div className={`app-wrapper ${route}`}>
      <div className="container">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
