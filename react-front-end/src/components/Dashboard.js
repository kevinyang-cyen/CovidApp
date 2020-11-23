import AreaGraph from "./Graph/AreaGraph";
import BarGraph from "./Graph/BarGraph";
import PieGraph from "./Graph/PieGraph";
import PieAngleGraph from "./Graph/PieAngleGraph";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading.js";
import sortProvinceData from "../helpers/sortProvinceData.js";

export default function Dashboard() {
  let provData_state = {
    confirmed_data: [{
      name: '', cases: 0
    }],
    deaths_data: [{
      name: '', deaths: 0
    }],
    recovered_data: [{
      name: '', recoveries: 0
    }],
    ageDemographic_count: [
      { name: '', "Case Count": 0, fill: '#8884d8' }
    ],
    genderDemographic_infections: [
      { "Gender": "Male", "Infection": 0 },
      { "Gender": "Female", "Infection": 0 }
    ]
  }

  useEffect(() => {
    // change inputs to incorporate province
    const runCall = async () => {
      let apiValue = await fetchData();

      // returning sorted province data
      let return_data = sortProvinceData(apiValue)

      setProvData(return_data);
      setIsLoading(false);
    }
    // change inputs to incorporate province
    const fetchData = async () => {
      // links 1 you can specify loc=canada, links 2 and 3 you have to take the location query out entirely
      const apiURLToDate = `https://cors-anywhere.herokuapp.com/https://api.opencovid.ca/summary?loc=BC&after=01-01-2020`;
      const apiURLMortality = 'https://cors-anywhere.herokuapp.com/https://api.opencovid.ca/individual?stat=mortality&loc=BC'
      const apiURLDist = 'https://cors-anywhere.herokuapp.com/https://api.opencovid.ca/individual?stat=cases&loc=BC'
      try {
        const response = await Promise.all([
          axios.get(apiURLToDate),
          axios.get(apiURLMortality),
          axios.get(apiURLDist)
        ])
        console.log("response: ", response);
        return response
      } catch (err) {
        console.log(err)
        return null;
      }
    }
    runCall();
  }, []);



  return (
    <>
      <div>
        <Select />
      </div>
      <div>
        {isLoading ?
          <Loading /> :
          <div>
            <AreaGraph coviddata={provData.confirmed_data} keydata="cases" xaxis=" Time Frame" yaxis="[Placeholder Province] Confirmed Cases" color="purple" />
            <AreaGraph coviddata={provData.deaths_data} keydata="deaths" xaxis=" Time Frame" yaxis="[Placeholder Province] Confirmed Deaths" color="black" />
            <AreaGraph coviddata={provData.recoveries_data} keydata="recoveries" xaxis="Time Frame" yaxis="[Placeholder Province] Recoveries" color="red" />
            <PieGraph coviddata={provData.ageDemographic_count} />
            <PieAngleGraph coviddata={provData.gender_demographic_infections} datakey="Infection" nameKey="Gender" />
          </div>
        }
      </div>
    </>
  );
}
