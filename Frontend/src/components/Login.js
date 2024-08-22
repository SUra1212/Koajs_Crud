import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginFunction } from "../services/LoginServices";

const Login = () => {
  const navigate = useNavigate();

  const [fromdata, setFromtdata] = useState({
    email: "",
    password: "",
  });

  const { email, password } = fromdata;

  const OnChangeData = (e) => {
    setFromtdata({ ...fromdata, [e.target.name]: e.target.value });
  };

  const submitdata = async (e) => {
    e.preventDefault();
    console.log("data", fromdata);

    let data = await loginFunction(fromdata);
    console.log("data", data);

    if (data?.data?.token) {
      localStorage.setItem("token", data?.data?.token);
      localStorage.setItem("userRole", data?.data?.userRole);
      navigate("/main");
    } else {
      alert("faild");
    }
  };

  return (
    <div>
      <div>
        <center>
          <div>
            <h2>Login to the system</h2>
          </div>
          <br />
          <br />
          <div>
            <form className="form">
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => OnChangeData(e)}
              />
              <br />
              <br />

              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => OnChangeData(e)}
              />
              <br />
              <br />

              <button
                className="btn btn-success"
                onClick={(e) => submitdata(e)}
              >
                Login
              </button>
            </form>
          </div>
          <br />
          <h4>Don't Have an account? Register Below</h4>
          <a href="/RegisterUser" className="btn btn-primary">
            Register
          </a>
        </center>
      </div>
    </div>
  );
};

export default Login;
