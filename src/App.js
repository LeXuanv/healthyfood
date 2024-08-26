import React, { useEffect } from "react";
import HeaderApp from "./components/header/header";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className="App">
      <HeaderApp />
      <Outlet />
    </div>
  );
}

export default App;
