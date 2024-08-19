import Header from "../header/header";
import "./login.scss";
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { GooglePlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
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
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
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
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
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
