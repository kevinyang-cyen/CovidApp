import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

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
    axios.get('https://health-products.canada.ca/api/clinical-trial/protocol/?lang=en&type=json') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      // console.log(response.data) // The entire response from the Rails API
      let listOfResponses = response.data
      let covidResponses = listOfResponses.filter(item => item.medConditionList[0].med_condition_id == 1028);
      console.log(covidResponses);
      // console.log(response.data.message) // Just the message
      this.setState({
        message: response.data
      });
    }) 
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.state.message }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>        
      </div>
    );
  }
}

export default App;
