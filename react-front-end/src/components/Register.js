import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';

export default function Register() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [emailExists, setEmailExists] = useState(false)
  const [cookies, setCookie, removeCookie] = useCookies([0]);

  // displays error if email authentication fails
  const handleEmailExists = (error) => {
    if (error) {
      return (
        <Alert variant="danger">
          <Alert.Heading>Error</Alert.Heading>
          <p>
            Email already exists
          </p>
        </Alert>
      )
    }
  }

  // sends user input to backend to check if user email already exists
  // sets user cookie if email does not exist and if new user successfully registers
  const onSubmit = data => {
    setEmailExists(false)
    axios.post("/api/register", data)
      .then((res) => {
        if (res.data === "Email already in system") {
          setEmailExists(true)
        } else {
          setCookie(['user-cookie'], [res.data[0], res.data[1]]);
          history.push('/');
        }
      });
  }

  return (
    <>
      {handleEmailExists(emailExists)}
      <section className="register">
        <h1 className='loginTitle'>Register</h1>
        <Form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control name="username" type="username" placeholder="Enter a username" ref={register} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" ref={register} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" ref={register} />
          </Form.Group>
          <Button className="submit-btn" variant="dark" type="submit">
            Register
          </Button>
        </Form>

      </section >
    </>
  )
}
