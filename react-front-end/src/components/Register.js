import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Register() {
  const [testVar, setTestVar] = useState("Kevin");

  useEffect(() => {
    axios.get("http://localhost:8080/map").then((res) => {
      console.log(res.data);
      setTestVar(res.data);
    });
  }, []);
  return (
    <section>
    <h1>Register</h1>
    <form className="form-inline" action="/login" method="POST">
    <div className="form-group mb-2">
      <label for="email">Username</label>
    </div>
    <div className="form-group mb-2">
      <input className="form-control" type="text" placeholder="Enter Email" name="email"></input>
    </div>
    <div className="form-group mb-2">
      <label for="password">Password</label>
    </div>
    <div className="form-group mb-2">
      <input className="form-control" type="password" placeholder="Enter Password" name="password"></input>
    </div>
    <div className="form-group mb-2">  
      <button type="submit" className="btn btn-primary">Login</button>
    </div>
    </form>

  </section>
  )
}
