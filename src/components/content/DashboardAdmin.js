import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardContent from "../DashboardAdmin/Content/DashboardContent";

const DashboardAdmin = () => {
  const history = useNavigate();
  // const token = localStorage.getItem("accessToken");
  const roleId = localStorage.getItem("roleId");
  useEffect(() => {
    if (roleId !== "1") {
      return history("/");
    }
  }, []);

  return <>{roleId && <DashboardContent />}</>;
};

export default DashboardAdmin;
