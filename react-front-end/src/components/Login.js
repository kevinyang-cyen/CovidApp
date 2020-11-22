import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Login() {
  const [testVar, setTestVar] = useState("Kevin");

  useEffect(() => {
    axios.get("http://localhost:8080/map").then((res) => {
      console.log(res.data);
      setTestVar(res.data);
    });
  }, []);
  return (
    <section>
      <h1>Login</h1>
      <form>
        <input></input>


      </form>

    </section>

  )
}
