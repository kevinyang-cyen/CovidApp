import { Route, BrowserRouter as Router, Link, Redirect, useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';

export default function Logout() {
  const history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies([0]);
  console.log(cookies);

  removeCookie(['user-cookie'])
  history.push('/login');
  
  return null;

}