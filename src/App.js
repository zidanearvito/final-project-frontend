import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DashboardAdmin from "./components/content/DashboardAdmin";
import LandingPage from "./components/content/LandingPage";
import Login from "./components/content/Login";
import LoginAdmin from "./components/content/LoginAdmin";
import Register from "./components/content/Register";
import DashboardAirplane from "./components/DashboardAdmin/Content/airplane/DashboardAirplane";
import DashboardAirport from "./components/DashboardAdmin/Content/airport/DashboardAirport";
import DashboardCompany from "./components/DashboardAdmin/Content/company/DashboardCompany";
import DashboardTicket from "./components/DashboardAdmin/Content/tickets/DashboardTicket";
import Profile from "./components/Profile/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard/admin" element={<DashboardAdmin />} />
        <Route
          path="/dashboard/admin/companies"
          element={<DashboardCompany />}
        />
        <Route
          path="/dashboard/admin/airports"
          element={<DashboardAirport />}
        />
        <Route
          path="/dashboard/admin/airplanes"
          element={<DashboardAirplane />}
        />
        <Route path="/dashboard/admin/tickets" element={<DashboardTicket />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/admin" element={<LoginAdmin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
