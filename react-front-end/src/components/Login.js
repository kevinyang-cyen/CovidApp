import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    axios.post("http://localhost:8080/login", data)
      .then((res) => console.log(res));
  }

  return (
    <>
      <h1 className='loginTitle'>Login</h1>
      <section className="login-register">
        <Form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" ref={register}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" ref={register}/>
          </Form.Group>
          <Button variant="dark" type="submit">
            Sign In
          </Button>
        </Form>

      </section >
    </>

  )
}
