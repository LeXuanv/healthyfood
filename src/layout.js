import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Blog from "./components/blog/blog";
import BodyIndex from "./components/BodyIndex/bodyindex";
import CalorieIndex from "./components/CalorieIndex/calorieIndex";
import CalorieCalculation from "./components/CalorieCalculation/calorieCalculation";
import Dashboard from "./components/Dashboard/dashboard";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Blog />} />
          <Route path="/BodyIndex" element={<BodyIndex />} />
          <Route path="/CalorieIndex" element={<CalorieIndex />} />
          <Route path="/CalorieCalculation" element={<CalorieCalculation />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default Layout;
