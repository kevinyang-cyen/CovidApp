import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";

export default function Register() {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <>
      <h1 className='loginTitle'>Register</h1>
      <section className="login-register">
        <Form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control name="username" type="username" placeholder="Enter a username" ref={register}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" ref={register}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" ref={register}/>
          </Form.Group>
          <Button variant="dark" type="submit">
            Register
          </Button>
        </Form>

      </section >
    </>
  )
}
