import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = "http://localhost:8080/map";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }
  // for CORS problems, add this in front
  // https://cors-anywhere.herokuapp.com/
  fetchData = () => {
    const url = `${API_URL}`;
    axios
      .get(url) // You can simply make your requests to "/api/whatever you want"
      .then(response => console.log(`over here: ${response.data}`))
  };

  render() {
    return (
      <div className="App">
        <h1>here it is { this.fetchData() }</h1>     
      </div>
    );
  }
}

export default App;
