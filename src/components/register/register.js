import Header from "../header/header";
import "./register.scss";
import React, { useEffect, useState } from "react";
import { Form, Input, DatePicker, Select, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const Register = () => {
  const [tinh, setTinh] = useState([]);
  const [huyen, setHuyen] = useState([]);
  const [xa, setXa] = useState([]);
  const [selectedTinh, setSelectedTinh] = useState(null);
  const [selectedHuyen, setSelectedHuyen] = useState(null);

  const [cccd, setCccd] = useState("");
  const [sdt, setSdt] = useState("");
  const [email, setEmail] = useState("");
  const [matKhau, setMatkhau] = useState("");
  const [ngaySinh, setNgaysinh] = useState("");
  const [gioiTinh, setGioiTinh] = useState("");
  const [pTinh, setPTinh] = useState("");
  const [pHuyen, setPHuyen] = useState("");
  const [pXa, setPXa] = useState("");
  const [address, setAddress] = useState("");

  const token = uuidv4();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://esgoo.net/api-tinhthanh/1/0.htm")
      .then((response) => {
        // console.log(response.data.data);
        setTinh(response.data.data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu tỉnh:", error);
      });
  }, []);
  // console.log(selectedTinh);
  useEffect(() => {
    if (selectedTinh) {
      axios
        .get(`https://esgoo.net/api-tinhthanh/2/${selectedTinh.key}.htm`)
        .then((response) => {
          // console.log("huyện", response.data.data);
          setHuyen(response.data.data);
        })
        .catch((error) => {
          console.error("Lỗi khi lấy dữ liệu huyện:", error);
        });
    }
  }, [selectedTinh]);
  useEffect(() => {
    if (selectedHuyen) {
      axios
        .get(`https://esgoo.net/api-tinhthanh/3/${selectedHuyen.key}.htm`)
        .then((response) => {
          // console.log("xã", response.data.data);
          setXa(response.data.data);
        })
        .catch((error) => {
          console.error("Lỗi khi lấy dữ liệu huyện:", error);
        });
    }
  }, [selectedHuyen]);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  // console.log("tinh", pTinh);
  // console.log("slt", selectedTinh);
  const handleClickRegister = async () => {
    if (
      !cccd ||
      !sdt ||
      !email ||
      !matKhau ||
      !ngaySinh ||
      !gioiTinh ||
      !address
    ) {
      toast.error("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    const checkTypeEmail = validateEmail(email);
    if (!checkTypeEmail) {
      toast.error("Email không đúng định dạng!");
      return;
    }
    try {
      const response = await axios.post(
        "https://66c714bf732bf1b79fa54389.mockapi.io/User",
        {
          SoCCCD: cccd,
          sdt: sdt,
          email: email,
          password: matKhau,
          date: ngaySinh,
          genner: gioiTinh,
          tinh: pTinh,
          huyen: pHuyen,
          xa: pXa,
          address: address,
          token: token,
        }
      );
      toast.success("Đăng ký thành công!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/login");
      console.log("oke", response);
    } catch (error) {
      console.error("loi", error);
    }
  };
  return (
    <>
      <div className="container">
        <Header />
        <ToastContainer />
        <form>
          <div className="form-signup">
            <div className="full-signup">
              <div className="title-signup">
                <p>Welcome!</p>
                <h2>Đăng ký</h2>
              </div>
              <div className="full-type">
                <div className="inner-type">
                  <div className="type">
                    <div>
                      <Form.Item
                        layout="cccd"
                        label="Số CCCD"
                        name="cccd"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                        labelCol={{
                          span: 24,
                        }}
                        wrapperCol={{
                          span: 24,
                        }}
                      >
                        <Input
                          onChange={(event) => setCccd(event.target.value)}
                          placeholder="Nhập số căn cước công dân..."
                        />
                      </Form.Item>
                    </div>
                    <div>
                      <Form.Item
                        layout="phone-number"
                        label="Số điện thoại"
                        name="phone-number"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                        labelCol={{
                          span: 24,
                        }}
                        wrapperCol={{
                          span: 24,
                        }}
                      >
                        <Input
                          onChange={(event) => setSdt(event.target.value)}
                          placeholder="Nhập số điện thoại..."
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="type">
                    <div>
                      <Form.Item
                        layout="email"
                        label="Email"
                        name="email"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                        labelCol={{
                          span: 24,
                        }}
                        wrapperCol={{
                          span: 24,
                        }}
                      >
                        <Input
                          onChange={(event) => setEmail(event.target.value)}
                          placeholder="Nhập email..."
                        />
                      </Form.Item>
                    </div>
                    <div>
                      <Form.Item
                        layout="password"
                        label="Mật khẩu"
                        name="password"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                        labelCol={{
                          span: 24,
                        }}
                        wrapperCol={{
                          span: 24,
                        }}
                      >
                        <Input
                          onChange={(event) => setMatkhau(event.target.value)}
                          placeholder="Nhập mật khẩu..."
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="type">
                    <div>
                      <Form.Item
                        layout="date"
                        label="Ngày sinh"
                        name="date"
                        // rules={[
                        //   {
                        //     required: true,
                        //   },
                        // ]}
                        labelCol={{
                          span: 24,
                        }}
                        wrapperCol={{
                          span: 24,
                        }}
                      >
                        <DatePicker
                          onChange={(date, dateString) =>
                            setNgaysinh(dateString)
                          }
                        />
                      </Form.Item>
                    </div>
                    <div>
                      <Form.Item
                        layout="genner"
                        label="Giới tính"
                        name="genner"
                        labelCol={{
                          span: 24,
                        }}
                        wrapperCol={{
                          span: 24,
                        }}
                      >
                        <Select onChange={(value) => setGioiTinh(value)}>
                          <Select.Option value="nam">Nam</Select.Option>
                          <Select.Option value="nu">Nữ</Select.Option>
                          <Select.Option value="khac">Khác</Select.Option>
                        </Select>
                      </Form.Item>
                    </div>
                  </div>
                  <div className="type">
                    <div>
                      <Form.Item
                        layout="tinh"
                        label="Tỉnh/ Thành phố"
                        name="tinh"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                        labelCol={{
                          span: 24,
                        }}
                        wrapperCol={{
                          span: 24,
                        }}
                      >
                        <Select
                          onChange={(value, key) => {
                            setSelectedTinh(key);
                            setPTinh(value);
                          }}
                        >
                          {tinh.map((item) => (
                            <Select.Option key={item.id} value={item.name}>
                              {item.name}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </div>
                    <div>
                      <Form.Item
                        layout="huyen"
                        label="Quận/ Huyện"
                        name="huyen"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                        labelCol={{
                          span: 24,
                        }}
                        wrapperCol={{
                          span: 24,
                        }}
                      >
                        <Select
                          onChange={(value, key) => {
                            setSelectedHuyen(key);
                            setPHuyen(value);
                          }}
                        >
                          {huyen.map((item) => (
                            <Select.Option key={item.id} value={item.name}>
                              {item.name}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </div>
                  </div>
                  <div className="type">
                    <div>
                      <Form.Item
                        layout="xa"
                        label="Phường/ Xã"
                        name="xa"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                        labelCol={{
                          span: 24,
                        }}
                        wrapperCol={{
                          span: 24,
                        }}
                      >
                        <Select onChange={(value) => setPXa(value)}>
                          {xa.map((item) => (
                            <Select.Option key={item.id} value={item.name}>
                              {item.name}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </div>
                    <div>
                      <Form.Item
                        layout="dcct"
                        label="Địa chỉ cụ thể"
                        name="dcct"
                        labelCol={{
                          span: 24,
                        }}
                        wrapperCol={{
                          span: 24,
                        }}
                      >
                        <Input
                          onChange={(event) => setAddress(event.target.value)}
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="btn-sign">
                    <Button
                      type="primary"
                      // htmlType="submit"
                      onClick={() => handleClickRegister()}
                    >
                      Đăng Ký
                    </Button>
                  </div>
                  <div className="btn-lg">
                    <span>Bạn đã có tài khoản?</span>
                    <Link to="/login">Đăng nhập</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
