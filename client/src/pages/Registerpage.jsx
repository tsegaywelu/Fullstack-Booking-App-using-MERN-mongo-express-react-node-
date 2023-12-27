import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Registerpage = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  async function register(e) {
    console.log("clicking");
    e.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
    } catch (e) {
      alert("registration is failed try latter");
    }

    /* axios
      .get("/")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      }); */
  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="-mt-64">
        <h1 className="text-4xl text-center mb-4">
          <i>registration </i>
        </h1>
        <form className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(eve) => setname(eve.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            onChange={(eve) => setemail(eve.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(eve) => setpassword(eve.target.value)}
          />

          <button className="primar " onClick={register}>
            register1
          </button>
          <div className="text-gray-300 text-center">
            {" "}
            log in
            <Link to={"/login"} className="underline text-gray-900">
              {" "}
              here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registerpage;
