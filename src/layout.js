import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Blog from "./components/blog/blog";
import BodyIndex from "./components/BodyIndex/bodyindex";
import CalorieIndex from "./components/CalorieIndex/calorieIndex";
import CalorieCalculation from "./components/CalorieCalculation/calorieCalculation";
import Dashboard from "./components/Dashboard/dashboard";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Profile from "./components/profile/profile";

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
          <Route path="/Profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default Layout;
