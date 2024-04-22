import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { MdClose, MdEmail } from "react-icons/md";
import { AiFillEye, AiTwotoneEye } from "react-icons/ai";
import "./signup.css";
import { FaUserAlt } from "react-icons/fa";
const Sign_up = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [icon, setIcon] = useState(AiFillEye);
  const [setisOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError("");
  };
  
  const handleClose = () => {
    setIsOpen(false);
    navigate("/login");
  };
  const togglepassword=()=>{
    setIcon((prevIcon)=>(prevIcon === AiFillEye ? AiTwotoneEye : AiFillEye))
    setShowPassword(!showPassword)
  }
  const handleSubmit = () => {
    axios
      .post("http://192.168.0.108/api/user/register", formData)
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .then(error);
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 500
    ) {
      setError(error.response.formData.message);
    }
  };

  return (
    <div className="container">
      <span className="icon-close">
        <MdClose  onClick={handleClose}/>
      </span>
      <div className="form-box">
        <h2>Sign Up</h2>
        <form className="formContainer" onSubmit={handleSubmit}>
          <div className="input-box">
            <span className="icon">
            <FaUserAlt />    
            </span>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="input"
              placeholder="User Name"
              required
            />
          </div>
          <div className="input-box">
            <span className="icon">
              <MdEmail />
            </span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              placeholder="E-Mail"
              required
            />
          </div>
          <div className="input-box">
            <span className="icon">
              <AiFillEye
                icon={icon}
                style={{ cursor: "pointer" }}
                onClick={togglepassword}
              >
                {showPassword ? "Hide" : "Show"}Passsword
              </AiFillEye>
            </span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input"
              placeholder="Password"
              required
            />
          </div>
          {error && <div className="inputs error-msg">{error}</div>}
          <button className="btn">Sign Up</button>
          <div className="login-register">
            <p>
              Already i have an account?
              <Link to="/login" className="register-link">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign_up;
