import { Button, Divider, Form, Input, Typography, Checkbox } from "antd";
import React, { useState, useEffect } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./Redux/Slice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const status=false;

  const handleSubmit = (value) => {
    console.log("value ", value);

    // localStorage.setItem("status", true);
    dispatch(login())
    navigate("/dashboard");
  };

  useEffect(() => {
    // const storedUsername = localStorage.getItem("username");
    // const storedPassword = localStorage.getItem("password");
    // if (storedUsername && storedPassword) {
    //   setUsername(storedUsername);
    //   setPassword(storedPassword);
    // }
  }, []);

  useEffect(() => {
    // localStorage.setItem("username", username);
    // localStorage.setItem("password", password);
    // localStorage.setItem('status', status)
  }, [username, password]);

  return (
    <>
      <div className="login">
        <Form className="loginForm" onFinish={handleSubmit}>
          <Typography.Title>Welcome Back!</Typography.Title>

          <Form.Item
            label="Username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
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
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
              Login
            </Button>
          </Form.Item>

          <Divider style={{ borderColor: "black" }}>or Login with</Divider>
        </Form>
      </div>
    </>
  );
}
