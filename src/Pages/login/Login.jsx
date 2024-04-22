import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { MdClose, MdEmail } from "react-icons/md";
import { AiFillEye, AiTwotoneEye } from "react-icons/ai";
import { GiVileFluid } from "react-icons/gi";
// import { CiLogin } from "react-icons/ci";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [setisOpen, setIsOpen] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [icon, setIcon] = useState(AiFillEye);
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
    navigate("/");
  };
  const togglepassword=()=>{

    setShowPassword(!showPassword)
  }
  const handleSubmit = () => {
    axios
      .post("http://192.168.0.108/api/user/login", formData)
      .then((response) => {
        const user = response.data.user;
        const token = response.data.token;
        sessionStorage.setItem("user_data", JSON.stringify(user));
        sessionStorage.setItem("user_token", token);
        navigate("/");
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
    <div className="container-fluid">

    <div className="container">
      <span className="icon-close">
        <MdClose onClick={handleClose} />
      </span>
      <div className="form-box">
        <h2>Login</h2>
        <form className="formContainer" onSubmit={handleSubmit}>
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
              onClick={togglepassword} >
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
          <div className="remember-forgot">
            <label>
              <input type="checkbox" required />
              Remember me
            </label>
            <Link to="/mail">Fogot Passsword?</Link>
          </div>
          {error && <div className="inputs error-msg">{error}</div>}
          <button className="btn">Login</button>
          <div className="login-register">
            <p>
              Don't have an account?
              <Link to="/sign_up" className="register-link">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
