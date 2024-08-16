import { Link } from "react-router-dom";
import "./header.scss";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("/");
  const handlelinkClick = (path) => {
    setActiveLink(path);
  };
  return (
    <>
      <div className="all-header">
        <div className="container">
          <div className="logo-header">
            <img
              src="https://img.freepik.com/premium-vector/healthy-food-lettering-round-frame_1262-9329.jpg?w=1060"
              alt="logo"
            />
            <p className="name-logo">Healthy Food</p>
          </div>
          <div className="title-web">
            <Link
              to="/"
              className={`title ${activeLink === "/" ? "active" : ""}`}
              id="blog"
              onClick={() => handlelinkClick("/")}
            >
              <p>Blog</p>
            </Link>
            <Link
              to="/BodyIndex"
              className={`title ${activeLink === "/bodyIndex" ? "active" : ""}`}
              onClick={() => handlelinkClick("/bodyIndex")}
            >
              <p>Body Index</p>
            </Link>
            <Link
              to="/CalorieIndex"
              className={`title ${
                activeLink === "/calorieIndex" ? "active" : ""
              }`}
              onClick={() => handlelinkClick("/calorieIndex")}
            >
              <p>Calorie Index</p>
            </Link>
            <Link
              to="/CalorieCalculation"
              className={`title ${
                activeLink === "/CalorieCalculation" ? "active" : ""
              }`}
              onClick={() => handlelinkClick("/CalorieCalculation")}
            >
              <p>Calorie Calculation</p>
            </Link>
            <Link
              to="/Dashboard"
              className={`title ${activeLink === "/Dashboard" ? "active" : ""}`}
              onClick={() => handlelinkClick("/Dashboard")}
            >
              <p>Dashboard</p>
            </Link>
          </div>
          <div className="user-login">
            <Link to="" className="login">
              <UserOutlined />
              <p>Login</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
