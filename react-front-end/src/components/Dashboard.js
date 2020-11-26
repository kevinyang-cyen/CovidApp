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
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import "../styles/Dashboard.scss"
import emptyBarGraph from "../docs/no-bar-graph-info.png"
import noGenderInfo from "../docs/no-gender-info.png"

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
    ageDemographic_count_cases: [
      { name: '', "Case Count": 0 }
    ],
    ageDemographic_count_deaths: [
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
    gender_demographic_infections: [
      { "Gender": "Male", "Infection": 0 },
      { "Gender": "Female", "Infection": 0 }
    ],
    gender_demographic_deaths: [
      { "Gender": "Male", "Deaths": 0 },
      { "Gender": "Female", "Deaths": 0 }
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
      console.log("should return response ----->", apiValue)
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

  const negativeOrPositiveArrow = (num) => {
    if (num >= 0) {
      return <span>&#8593;</span>
    } else {
      return <span>&#8595;</span>
    }
  }

  const dashboardInfoBar = () => {
    return (
      <>
        <div className="dashboard-topbar">
          <div className="filter-bar">
            <Select onClick={search} />
          </div>
          <div className="totals-count">
            {(provData.timeSpecific_data.map(date => {
              if (date.name === dateToday) return <p className="count-cases"><h6>Total Cases</h6>{date.totalCases}
                {(provData.timeSpecific_data.map(date => { if (date.name === dateToday) return <p className="count-change">{negativeOrPositiveArrow(date.todayCase)}{date.todayCase}</p> }))}
              </p>
            }))}

            {(provData.timeSpecific_data.map(date => {
              if (date.name === dateToday) return <p className="count-cases"><h6>Number of Active Cases</h6> {date.activeCase}
                {(provData.timeSpecific_data.map(date => { if (date.name === dateToday) return <p className="count-change">{negativeOrPositiveArrow(date.caseChange)}{date.caseChange}</p> }))}
              </p>
            }))}

            {(provData.recoveries_data.map(date => { if (date.name === dateToday) return <p className="count-test"><h6>Total Recoveries</h6> {date.recoveries}</p> }))}

            {(provData.testing_data.map(date => {
              if (date.name === dateToday) return <p className="count-tests"><h6>Total Tests</h6> {date.testing}

                {(provData.timeSpecific_data.map(date => { if (date.name === dateToday) return <p className="count-change"> {negativeOrPositiveArrow(date.testToday)}{date.testToday}</p> }))}
              </p>
            }))}

            {(provData.deaths_data.map(date => {
              if (date.name === dateToday) return <p className="count-number"><h6>Total Deaths</h6> {date.deaths}

                {(provData.timeSpecific_data.map(date => { if (date.name === dateToday) return <p className="count-change"> {negativeOrPositiveArrow(date.todayDeaths)}{date.todayDeaths}</p> }))}
              </p>
            }))}
          </div>
        </div>
      </>
    )
  }

  return (
    <section className="dashboard">
      <Tabs defaultActiveKey="general" id="uncontrolled-tab-example">
        <Tab eventKey="current-province" title={locationCode} disabled>
        </Tab>
        <Tab eventKey="general" title="General">
          {isLoading ?
            <Loading /> :
            <>
              {dashboardInfoBar()}
              <div className="graphs">
                <div className="recovery-testing">
                  <div className="testing">
                    <AreaGraph coviddata={provData.testing_data} keydata="testing" xaxis=" Time Frame" yaxis={locationCode + " Testing"} color="blue" />
                  </div>
                  <div className="recovery">
                    <AreaGraph coviddata={provData.recoveries_data} keydata="recoveries" xaxis="Time Frame" yaxis={locationCode + " Recoveries"} color="green" />
                  </div>
                </div>
                <div className="cases">
                  <AreaGraph coviddata={provData.confirmed_data} keydata="cases" xaxis=" Time Frame" yaxis={locationCode + " Confirmed Cases"} color="red" />
                </div>
                <div className="deaths">
                  <AreaGraph coviddata={provData.deaths_data} keydata="deaths" xaxis=" Time Frame" yaxis={locationCode + " Confirmed Deaths"} color="black" />
                </div>
              </div>
            </>
          }
        </Tab>
        <Tab eventKey="age-gender" title="Age and Gender">
          {isLoading ?
            <Loading /> :
            <>
              {dashboardInfoBar()}
              <div className="additional-graphs">
                <div className="age-gender-cases">
                  <h5>Reported Case Distribution</h5>
                  {(ageCountIsZero) ?
                    <div className="img-container">
                      <img className="graph-pic" src={emptyBarGraph} alt="Information unavailable at this time"></img>
                      <div className="center-text">Information for age demographic unavailable at this time</div>

                    </div> : <BarGraph className="age-distribution" coviddata={provData.ageDemographic_count_cases} yaxis={locationCode + "Reported Cases Age Distribution"} />
                  }
                  {(ageCountIsZero) ?
                    <div className="img-container">
                      <img className="graph-pic" src={noGenderInfo} alt="Information unavailable at this time"></img>
                      <div className="center-text">Information for gender demographic unavailable at this time</div>
                    </div> : <PieAngleGraph className="gender-distribution" coviddata={provData.gender_demographic_infections} datakey="Infection" nameKey="Gender" yaxis={locationCode + "Reported Cases Gender Distribution"} />
                  }
                </div>

                <div className="age-gender-mortality">
                  <h5>Reported Mortality Distribution</h5>
                  {(ageCountIsZero) ?
                    <div className="img-container">
                      <img className="graph-pic" src={emptyBarGraph} alt="Information unavailable at this time"></img>
                      <div className="center-text">Information for age demographic unavailable at this time</div>

                    </div> : <BarGraph coviddata={provData.ageDemographic_count_deaths} yaxis={locationCode + "Reported Deaths Age Distribution"} />
                  }
                  {(ageCountIsZero) ?
                    <div className="img-container">
                      <img className="graph-pic" src={noGenderInfo} alt="Information unavailable at this time"></img>
                      <div className="center-text">Information for gender demographic unavailable at this time</div>
                    </div> : <PieAngleGraph coviddata={provData.gender_demographic_deaths} datakey="Deaths" nameKey="Gender" yaxis={locationCode + "Reported Deaths Gender Distribution"} />
                  }
                </div>
              </div>
            </>
          }
        </Tab>
        <Tab eventKey="other-stuff" title="Other stuff">
        </Tab>
      </Tabs>

    </section>
  );
}


//provData.ageDemographic_count[6]["Case Count"] < 2 || 
//provData.gender_demographic_infections[0].Infection < 5 || provData.gender_demographic_infections[1].Infection < 5 ||
//(!provData.gender_demographic_infections) ? "No Gender Demographic Data Available" : 
// <AreaGraph coviddata={provData.testing_data} keydata="testing" xaxis=" Time Frame" yaxis={locationCode + " Testing"} color="blue" />
// <AreaGraph coviddata={provData.confirmed_data} keydata="cases" xaxis=" Time Frame" yaxis={locationCode + " Confirmed Cases"} color="purple" />
// <AreaGraph coviddata={provData.deaths_data} keydata="deaths" xaxis=" Time Frame" yaxis={locationCode + " Confirmed Deaths"} color="black" />
// <AreaGraph coviddata={provData.recoveries_data} keydata="recoveries" xaxis="Time Frame" yaxis={locationCode + " Recoveries"} color="red" />
// {/*(ageCountIsZero) ? 'No data available for age demographic' :*/} 