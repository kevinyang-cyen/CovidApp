import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useForm } from "react-hook-form";
import axios from "axios";
import { Route, BrowserRouter as Router, Link, Redirect, useHistory } from "react-router-dom";
import { useState } from "react";
import { useCookies } from 'react-cookie';
import "../public/styles/Login.css";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies([0]);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // checks for which error to show 
  const incorrectEmailOrPassword = (emailError, passwordError) => {
    if (emailError) {
      return 'Email not found. Please double check.'
    } else if (passwordError) {
      return 'Incorrect password. Please try again.'
    }
  }

  // checks for either error - shows alert on login
  const error = (emailError, passwordError) => {
    if (emailError || passwordError) {
      return (
        <Alert variant="danger">
          <Alert.Heading>Error</Alert.Heading>
          <p>
            {incorrectEmailOrPassword(emailError, passwordError)}
          </p>
        </Alert>
      )
    }
  }

  const onSubmit = data => {
    setEmailError(false)
    setPasswordError(false)
    axios.post("http://localhost:8080/login", data)
      .then((res) => {
        if (res.data === 'incorrect password') {
          setPasswordError(true)
        } else if (res.data.length !== 4) {
          setEmailError(true)
        } else if (res.status === 200) {
          setCookie(['user-cookie'], [res.data[0], res.data[1], res.data[2], res.data[3]]);
          history.push('/');
        }
      })
  }


  return (
    <>
      {error(emailError, passwordError)}
      <section className="login">
        <h1 className='loginTitle'>Login</h1>
        <Form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" ref={register} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" ref={register} />
          </Form.Group>
          <Button className="submit-btn" variant="dark" type="submit">
            Sign In
          </Button>
        </Form>

      </section >
    </>

  )
}
