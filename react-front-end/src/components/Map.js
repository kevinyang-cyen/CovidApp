import { useState, useEffect } from "react";
import axios from "axios";

export default function Map() {
  const [testVar, setTestVar] = useState('Kevin');

  useEffect(() => {

    axios.get("http://localhost:8080/map")
    .then((res) => {
      console.log(res.data);
      setTestVar(res.data);
     })

  }, []);
  return (
    <h1>{testVar}</h1>
  );
}