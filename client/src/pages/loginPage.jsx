import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState();
  async function login(e) {
    e.preventDefault();
    let response = await axios.post("/logintopage", {
      email,
      password,
    });
    const token = await response.data;
    localStorage.setItem("token", JSON.stringify(token));
    console.log(token);
  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="-mt-64">
        <h1 className="text-4xl text-center mb-4">log in</h1>
        <form className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button className="primar " onClick={login}>
            log in1
          </button>

          <div className="text-gray-300 text-center">
            {" "}
            sign up
            <Link to={"/register"} className="underline text-gray-900">
              {" "}
              here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
