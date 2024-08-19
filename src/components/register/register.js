import Header from "../header/header";
import "./register.scss";
import React from "react";
import { Button, Form, Input, DatePicker, Space } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const Register = () => {
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
                <h2>Đăng ký</h2>
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
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Ngày sinh"
                name="date"
                rules={[
                  {
                    required: true,
                    message: "Please input your date!",
                  },
                ]}
              >
                <Space direction="vertical">
                  <DatePicker onChange={onChange} />
                </Space>
              </Form.Item>
              <Form.Item
                label="Địa chỉ"
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Please input your address!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Đăng ký
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
