import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useState } from "react";
import Countdown from 'react-countdown';
import "../public/styles/Quarantine.css";

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
      <section className="quarantine">
        <Form className="quarantine-timer" onSubmit={handleSubmit(onSubmit)}>
          {cookies['user-cookie'] ? 
            (cookies['user-cookie'][2]?
              <div className="quarantine-div">
                <h1 className="quarantine-timer">Quarantine Countdown</h1>
                <h2 className="quarantine-timer">                <Countdown date={(Math.round(((cookies['user-cookie'][2])))) + 1209600000} /></h2>
                <h3 className="quarantine-timer map-link"><Link to="/map">Check your marker the map</Link></h3>
              </div>
              : 
                <Button variant="warning" type="submit">
                  <h3 className="quarantine-timer">Self-Report and Start My Countdown</h3>
                </Button> ) :
              <h2 className="quarantine-timer">Please Log In to Self Report!</h2>
          }
        </Form>

      </section >
    </>
  )
}