import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function Dashboard() {
  const navigate = useNavigate();
  const count = useSelector((state) => state.logged.status)
  console.log(
    "aaaaa",count)
  

  useEffect(() => {
    // const storedStatus = localStorage.getItem("status");
    // console.log("status", { storedStatus });
    if (!count) {
      navigate("/login");
    }
  }, [count]);

  return <div>Dashboard</div>;
}

export default Dashboard;
