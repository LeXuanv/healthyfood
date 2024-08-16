import React from "react";
import HeaderApp from "./components/header/header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HeaderApp />
      <Outlet />
    </div>
  );
}

export default App;
