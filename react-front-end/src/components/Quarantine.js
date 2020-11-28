import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useState } from "react";
import Countdown from 'react-countdown';
import "../public/styles/Quarantine.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function Register() {
  const { handleSubmit } = useForm();
  const [cookies, setCookie] = useCookies();
  const [location, setLocation] = useState([]);

  // adding quarantine set time to database and updating user cookie with time left
  const onSubmit = (data) => {
    axios.post("/quarantine", cookies['user-cookie'])
      .then((res) => {
        setCookie(['user-cookie'], [res.data[0], res.data[1], res.data[2], res.data[3]]);
      });
    }

  // adding self-report case to database and updating user cookie with self-report date
  const onSubmission = (data) => {
    axios.post("/selfreport", [cookies['user-cookie'], location])
    .then((res) => {
      setCookie(['user-cookie'], [res.data[0], res.data[1], res.data[2], res.data[3]]);
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

  // google API function to find your location coordinates to add marker
  navigator.geolocation.getCurrentPosition(success, error, options);

  return (
    <>
      <section id="one" className="quarantine">
        <Form className="quarantine-timer" onSubmit={handleSubmit(onSubmit)}>
          {cookies['user-cookie'] ? 
            (cookies['user-cookie'][2]?
              <div className="quarantine-div">
                <h1 className="quarantine-timer">Quarantine Countdown</h1>
                <h2 className="quarantine-timer">
                  <Countdown date={(Math.round(((cookies['user-cookie'][2])))) + 1209600000} />
                </h2>
              </div>
              : 
                <OverlayTrigger key={2} placement={'right'}
                  overlay={
                    <Tooltip id={`tooltip-${'right'}`}>
                      Click here to start a 2-week quarantine counter
                    </Tooltip>
                  }>
                    <Button variant="warning" type="submit">
                      <h3 className="quarantine-timer">Start My Quarantine Countdown</h3>
                    </Button>
                </OverlayTrigger> ) :
              <h2 className="quarantine-timer">Please Log In to Self Report!</h2>
          }
        </Form>

        <Form className="quarantine-timer" onSubmit={handleSubmit(onSubmission)}>
          {cookies['user-cookie'] ? 
            (cookies['user-cookie'][3]? 
              <h3 className='quarantine-timer map-link'><Link to='/map'>Check your marker the map</Link></h3>
              : 
              <OverlayTrigger key={2} placement={'right'}
                overlay={
                  <Tooltip id={`tooltip-${'right'}`}>
                    Click here if you wish to display your case on the map
                  </Tooltip>
                }>
                <Button variant="warning" type="submit">
                  <h3 className="quarantine-timer">Self-Report</h3>
                </Button>
              </OverlayTrigger>

              ) : ""
          }
        </Form>

      </section >
    </>
  )
}