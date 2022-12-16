import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardAirplane from "../DashboardAdmin/Content/airplane/DashboardAirplane";

const Airplane = () => {
  const history = useNavigate();
  // const token = localStorage.getItem("accessToken");
  const roleId = localStorage.getItem("roleId");
  useEffect(() => {
    if (roleId !== "1") {
      return history("/");
    }
  }, []);

  return <>{roleId && <DashboardAirplane />}</>;
};

export default Airplane;
