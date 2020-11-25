import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useState } from "react";


export default function Register() {
  const { register, handleSubmit } = useForm();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [location, setLocation] = useState([]);
  
  const onSubmit = data => {
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
    console.log(crd);
    setLocation([crd.latitude, crd.longitude]);
  }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);

  return (
    <>
      <h1 className='loginTitle'>Self-Report</h1>
      <section className="login-register">
        <Form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          {cookies['user-cookie'] ? 
            (cookies['user-cookie'][2]? 
              <h2>Please quaraintine yourself for the next 14 days!</h2> 
              : 
              <Button variant="dark" type="submit">
                Self-Report (Uses your nearby location)
              </Button> ) :
            <h2>Please log in self-report!</h2>
          }
        </Form>

      </section >
    </>
  )
}