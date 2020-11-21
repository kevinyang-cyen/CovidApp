import logo from './logo.svg';
import './App.css';
// import { useState, useEffect } from "react";
// import axios from "axios";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Map from './components/Map.js';


function App() {

  return (
    <Router>
      <Route path='/map' component={Map} />
    </Router>
  );
}

export default App;
