import Header from "../header/header";
import "./login.scss";
import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { GooglePlusOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const apiLogin = async () => {
    try {
      const response = await axios.get(
        "https://66c714bf732bf1b79fa54389.mockapi.io/User"
      );
      const users = response.data;
      console.log(users);

      const user = users.find(
        (user) => user.email === username && user.password === password
      );

      if (user && user.token) {
        localStorage.setItem("authToken", user.token);
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("Đăng nhập thành công!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/");
        return true;
      } else {
        console.log("Đăng nhập thất bại:", user);
        return false;
      }
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
      return false;
    }
  };

  return (
    <>
      <div className="container">
        <Header />
        <div className="d-login">
          <div className="i-login">
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={
                {
                  // maxWidth: 600,
                }
              }
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div className="title-login">
                <h2>Đăng nhập</h2>
              </div>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
                labelCol={{
                  span: 24,
                }}
                wrapperCol={{
                  span: 24,
                }}
              >
                <Input onChange={(e) => setUsername(e.target.value)} />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                labelCol={{
                  span: 24,
                }}
                wrapperCol={{
                  span: 24,
                }}
              >
                <Input.Password onChange={(e) => setPassword(e.target.value)} />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                // wrapperCol={{
                //   offset: 4,
                //   span: 16,
                // }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={() => apiLogin()}
                >
                  Đăng nhập
                </Button>
              </Form.Item>
              <div className="login-google">
                <div>
                  <span>Đăng nhập bằng google</span>
                </div>
                <GooglePlusOutlined />
              </div>
              <div className="register">
                <span>Bạn chưa có tài khoản?</span>
                <Link to="/register">Đăng ký</Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
