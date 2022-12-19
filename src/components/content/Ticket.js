import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardTicket from "../DashboardAdmin/Content/tickets/DashboardTicket";

const Ticket = () => {
  const history = useNavigate();
  // const token = localStorage.getItem("accessToken");
  const roleId = localStorage.getItem("roleId");
  useEffect(() => {
    if (roleId !== "1") {
      return history("/");
    }
  }, [history, roleId]);

  return <>{roleId && <DashboardTicket />}</>;
};

export default Ticket;
