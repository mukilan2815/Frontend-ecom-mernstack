import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    axios
      .post("http://localhost:8000/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch(() => {
        navigate("/register");
      });
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <div className="mb-4">
        <input
          id="username"
          className="w-full px-3 outline-none py-2 border rounded-md"
          type="name"
          placeholder="username"
        />
      </div>
      <div className="mb-4">
        <input
          className="w-full px-3 py-2 border outline-none rounded-md"
          type="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <button
        className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-md mb-4"
        onClick={handleSubmit}
      >
        Login
      </button>
      <p className="text-sm">
        New User?
        <span className="text-blue-500 cursor-pointer">
          Create a new account
        </span>
      </p>
      <div className="mb-4">
        <input type="checkbox" className="mr-2 cursor-pointer" />
        <label className="text-sm">
          By continuing, I agree to the terms of use & privacy policy
        </label>
      </div>
    </div>
  );
};

export default Login;
