import AreaGraph from "./Graph/AreaGraph";
import PieGraph from "./Graph/PieGraph";
import BarGraph from "./Graph/BarGraph";
import PieAngleGraph from "./Graph/PieAngleGraph";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading.js";
import Select from "./Select";
import sortProvinceData from "../helpers/sortProvinceData.js";
import timeConverter from "../helpers/convertTime.js";
import checkForZeroData from "../helpers/checkForZeroData.js";

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
    testing_data: [{
      name: '', recoveries: 0
    }],
    ageDemographic_count: [
      { name: '', "Case Count": 0 }
    ],
    timeSpecific_data: [{
      name: "",
      totalCases: 0,
      todayCase: 0,
      caseChange: 0,
      testToday: 0,
      activeCase: 0,
      todayDeaths: 0
    }],
    genderDemographic_infections: [
      { "Gender": "Male", "Infection": 0 },
      { "Gender": "Female", "Infection": 0 }
    ]
  }

  const [provData, setProvData] = useState(provData_state);
  const [isLoading, setIsLoading] = useState(true);
  const [ageCountIsZero, setAgeCountIsZero] = useState(true);
  const [locationCode, setLocationCode] = useState("Canada");

  const [urlOne, setUrlOne] = useState("?loc=canada&after=01-01-2020")
  const [urlTwo, setUrlTwo] = useState("?stat=mortality")
  const [urlThree, setUrlThree] = useState("?stat=cases")

  useEffect(() => {
    // change inputs to incorporate province
    const runCall = async () => {
      setIsLoading(true);
      let apiValue = await fetchData();

      // returning sorted province data
      let return_data = sortProvinceData(apiValue)

      setProvData(return_data);
      setIsLoading(false);
      setAgeCountIsZero(checkForZeroData(return_data));
    }
    // change inputs to incorporate province
    const fetchData = async () => {
      // links 1 you can specify loc=canada, links 2 and 3 you have to take the location query out entirely

      try {
        const response = await Promise.all([
          axios.post('/dashboard/summary', urlOne),
          axios.post('/dashboard/mortality', urlTwo),
          axios.post('/dashboard/cases', urlThree)
        ])
        console.log(response);
        return response
      } catch (err) {
        console.log(err)
        return null;
      }
    }
    runCall();
  }, [urlOne, urlTwo, urlThree]);

  const search = function (url1, url2, url3, locationCode) {
    setUrlOne(url1);
    setUrlTwo(url2);
    setUrlThree(url3);
    setLocationCode(locationCode)
  }

  // Most current time reported data 
  const yesterdayDate = (d => new Date(d.setDate(d.getDate() - 1)))(new Date);
  const dateToday = timeConverter(yesterdayDate);

  return (
    <section className="dashboard">
      <div>
        {isLoading ?
          <Loading /> :
          <>
            <div className="dashboard-topbar">
              <div className="filter-bar">
                <Select onClick={search} />
              </div>
              <div className="totals-count">
                {(provData.timeSpecific_data.map(date => {
                  if (date.name === dateToday) return
                  <p className="count-title"><h6>Current Total Cases</h6>{date.totalCases}</p>
                }))}
                {(provData.timeSpecific_data.map(date => { if (date.name === dateToday) return <p className="count-title"><h6>Number of Cases Today</h6> {date.todayCase}</p> }))}
                {(provData.timeSpecific_data.map(date => { if (date.name === dateToday) return <p className="count-title"><h6>Current Active Case Changes</h6> {date.caseChange}</p> }))}
                {(provData.timeSpecific_data.map(date => { if (date.name === dateToday) return <p className="count-title"><h6>Number of Tests Today</h6> {date.testToday}</p> }))}
                {(provData.timeSpecific_data.map(date => { if (date.name === dateToday) return <p className="count-title"><h6>Number of Active Cases</h6> {date.activeCase}</p> }))}
                {(provData.timeSpecific_data.map(date => { if (date.name === dateToday) return <p className="count-title"><h6>Number of Deaths Today</h6> {date.todayDeaths}</p> }))}
              </div>
            </div>
            <div className="graphs">
              <AreaGraph coviddata={provData.testing_data} keydata="testing" xaxis=" Time Frame" yaxis={locationCode + " Testing"} color="blue" />
              <AreaGraph coviddata={provData.confirmed_data} keydata="cases" xaxis=" Time Frame" yaxis={locationCode + " Confirmed Cases"} color="purple" />
              <AreaGraph coviddata={provData.deaths_data} keydata="deaths" xaxis=" Time Frame" yaxis={locationCode + " Confirmed Deaths"} color="black" />
              <AreaGraph coviddata={provData.recoveries_data} keydata="recoveries" xaxis="Time Frame" yaxis={locationCode + " Recoveries"} color="red" />
              {
                (ageCountIsZero) ? "No Age Demographic Data Available" : <BarGraph coviddata={provData.ageDemographic_count} yaxis={locationCode + "Reported Cases Age Distribution"} />
              }
              {
                (ageCountIsZero) ? "No Gender Demographic Data Available" : <PieAngleGraph coviddata={provData.gender_demographic_infections} datakey="Infection" nameKey="Gender" yaxis={locationCode + "Reported Cases Gender Distribution"} />
              }
            </div>
          </>
        }
      </div>
    </section>
  );
}


//provData.ageDemographic_count[6]["Case Count"] < 2 || 
//provData.gender_demographic_infections[0].Infection < 5 || provData.gender_demographic_infections[1].Infection < 5 ||
//(!provData.gender_demographic_infections) ? "No Gender Demographic Data Available" : 