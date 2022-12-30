import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DashboardAdmin from "./components/content/DashboardAdmin";
import Company from "./components/content/Company";
import LandingPage from "./components/content/LandingPage";
import Login from "./components/content/Login";
import LoginAdmin from "./components/content/LoginAdmin";
import Register from "./components/content/Register";
import Profile from "./components/Profile/Index";
import Airport from "./components/content/Airport";
import Airplane from "./components/content/Airplane";
import Ticket from "./components/content/Ticket";
import SearchIndex from "./components/Buyer/searchCard/SearchIndex";
import InputIndex from "./components/Buyer/InputData/InputIndex";
import HistoryIndex from "./components/Buyer/history/HistoryIndex";
import ConfirmIndex from "./components/Buyer/paymentConfirmation/ConfirmIndex";
import ProtectedUser from "./protectedUser/protectedUser";
import WishlistIndex from "./components/Buyer/wishlist/WishlistIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard/admin" element={<DashboardAdmin />} />
        <Route path="/dashboard/admin/companies" element={<Company />} />
        <Route path="/dashboard/admin/airports" element={<Airport />} />
        <Route path="/dashboard/admin/airplanes" element={<Airplane />} />
        <Route path="/dashboard/admin/tickets" element={<Ticket />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/admin" element={<LoginAdmin />} />
        <Route element={<ProtectedUser />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<SearchIndex />} />
          <Route path="/inputData" element={<InputIndex />} />
          <Route path="/history" element={<HistoryIndex />} />
          <Route path="/wishlist" element={<WishlistIndex />} />
          <Route path="/payment/confirmation" element={<ConfirmIndex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
