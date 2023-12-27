import React from "react";
import Header from "../header";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Indexpages = () => {
  const token = localStorage.getItem("token");
  async function gethome() {
    const response = await axios.get("/home", {
      headers: {
        token,
        "content-type": "application/json",
        "Content-Length": 1000,
      },
    });
    console.log(response);
  }
  if (!localStorage.getItem("token")) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div>
      you are on index pages
      <button onClick={gethome}>click me to go home </button>
    </div>
  );
};

export default Indexpages;
