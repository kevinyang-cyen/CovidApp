import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import axios from "axios";
import { useCookies } from 'react-cookie';

export default function Register() {
  const { register, handleSubmit } = useForm();
  const [cookies, setCookie, removeCookie] = useCookies();
  console.log(cookies);
  const onSubmit = data => {
    axios.post("/quarantine", cookies['user-cookie'])
      .then((res) => {
        setCookie(['user-cookie'], [res.data[0], res.data[1], res.data[2]]);
      });
  }

  return (
    <>
      <h1 className='loginTitle'>Quarantine</h1>
      <section className="login-register">
        <Form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          {cookies['user-cookie'] ? 
            (cookies['user-cookie'][2]? 
              <h2>{14 - Math.round(((new Date().getTime() - cookies['user-cookie'][2]) / 86400000)*24)} Days Left...</h2> 
              : 
              <Button variant="dark" type="submit">
                Start My Countdown
              </Button> ) :
            <h2>Please log in to start your quarantine!</h2>
          }
        </Form>

      </section >
    </>
  )
}