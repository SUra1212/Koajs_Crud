import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterUsers } from "../services/LoginServices";

const RegisterUser = () => {
  const navigate = useNavigate();

  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",
    userRole: "",
  });

  const { name, email, password, userRole } = formdata;

  const onChangedata = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const AddNewUser = async (e) => {
    e.preventDefault();
    try {
      var data = await RegisterUsers(formdata);
      console.log(data);
      if (data?.data?.name) {
        alert("Register success");
        navigate("/");
      } else {
        navigate("/main");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {" "}
      <div>
        <center>
          <div>
            <h2>Register to the System</h2>
          </div>
          <br />
          <br />
          <div>
            <form className="form">
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onChangedata(e)}
              />
              <br />
              <br />

              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => onChangedata(e)}
              />
              <br />
              <br />

              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => onChangedata(e)}
              />
              <br />
              <br />

              <label>select user role</label>
              <br />
              <select
                class=""
                onChange={(e) => onChangedata(e)}
                name="userRole"
                value={formdata.userRole}
              >
                <option value="customer">customer</option>
                <option value="admin">admin</option>
              </select>

              <br />
              <br />

              <button
                className="btn btn-success"
                onClick={(e) => AddNewUser(e)}
              >
                Insert
              </button>
              <br></br>
              <h4> Have an account? </h4>
              <a href="/" className="btn btn-primary">
                login
              </a>
            </form>
          </div>
        </center>
      </div>
    </div>
  );
};

export default RegisterUser;
