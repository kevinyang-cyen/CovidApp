import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useState } from "react";
import "../styles/Quarantine.scss";

export default function Register() {
  const { handleSubmit } = useForm();
  const [cookies, setCookie] = useCookies();
  const [location, setLocation] = useState([]);
  const onSubmit = (data) => {

    axios.post("/quarantine", cookies['user-cookie'])
      .then((res) => {
        setCookie(['user-cookie'], [res.data[0], res.data[1], res.data[2]]);
      });

    axios.post("/selfreport", [cookies['user-cookie'], location])
    .then((res) => {
      console.log(res);
    });
  }

  var options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    var crd = pos.coords;
    setLocation([crd.latitude, crd.longitude]);
  }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);

  return (
    <>
      <section className="login-register">
        <Form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          {cookies['user-cookie'] ? 
            (cookies['user-cookie'][2]?
              <div className="quarantine-div">
                <h1 className="quarantine-timer">Quarantine Countdown</h1>
                <h2 className="quarantine-timer">{14 - Math.round(((new Date().getTime() - cookies['user-cookie'][2]) / 86400000))} Days Remaining...</h2>
                <h3 className="quarantine-timer"><Link to="/map">Check your marker the map</Link></h3>
              </div>
              : 
              <Button variant="dark" type="submit">
                Self-Report and Start My Countdown
              </Button> ) :
            <h2>Please log in to start your quarantine!</h2>
          }
        </Form>

      </section >
    </>
  )
}