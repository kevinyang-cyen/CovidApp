import { Route, BrowserRouter as Router, Link, Redirect, useHistory } from "react-router-dom";

// logout redirects to login page
export default function Logout() {
  const history = useHistory();

  history.push('/login');
  return null;
}