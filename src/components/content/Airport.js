import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardAirport from "../DashboardAdmin/Content/airport/DashboardAirport";

const Airport = () => {
  const history = useNavigate();
  // const token = localStorage.getItem("accessToken");
  const roleId = localStorage.getItem("roleId");
  useEffect(() => {
    if (roleId !== "1") {
      return history("/");
    }
  }, []);

  return <>{roleId && <DashboardAirport />}</>;
};

export default Airport;
