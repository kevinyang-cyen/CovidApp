import { Route, BrowserRouter as Router, Link, Redirect, useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';

export default function Logout() {
  const history = useHistory();

  history.push('/login');
  
  return null;

}