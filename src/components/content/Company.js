import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardCompany from "../DashboardAdmin/Content/company/DashboardCompany";

const Company = () => {
  const history = useNavigate();
  // const token = localStorage.getItem("accessToken");
  const roleId = localStorage.getItem("roleId");
  useEffect(() => {
    if (roleId !== "1") {
      return history("/");
    }
  }, [history,roleId]);

  return <>{roleId && <DashboardCompany />}</>;
};

export default Company;
