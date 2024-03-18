import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(username, email, password);
    try {
      const response = await axios.post("http://localhost:8000/register", {
        name: username,
        email: email,
        password: password,
      });
      navigate("/");
      console.log("User created:", response.data);
      username = "";
      email = "";
      password = "";
      if (response.status === 201) {
        alert("User created successfully");
        navigator.push("/");
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <div className="mb-4">
        <input
          className="w-full px-3 outline-none py-2 border rounded-md"
          type="text"
          id="username"
          placeholder="Username"
        />
      </div>
      <div className="mb-4">
        <input
          id="email"
          className="w-full px-3 outline-none py-2 border rounded-md"
          type="email"
          placeholder="Email"
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
        Register
      </button>
      <p className="text-sm">
        Already Have An Account?
        <span className="text-blue-500 cursor-pointer">Login Here</span>
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

export default Register;
