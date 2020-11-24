import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import axios from "axios";
import { Route, BrowserRouter as Router, Link, Redirect, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';

export default function Logout() {
  const history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies([0]);
  console.log(cookies);

  removeCookie(['user-cookie'])
  history.push('/login');
  
  return null;

}