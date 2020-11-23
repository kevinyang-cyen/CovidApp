import AreaGraph from "./Graph/AreaGraph";
import PieGraph from "./Graph/PieGraph";
import PieAngleGraph from "./Graph/PieAngleGraph";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading.js";
import Select from "./Select";
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

  const baseURLOne = "https://api.opencovid.ca/summary";
  const baseURLTwo = "https://api.opencovid.ca/individual";
  const baseURLThree = "https://api.opencovid.ca/individual";

  const [provData, setProvData] = useState(provData_state);
  const [isLoading, setIsLoading] = useState(true);

  const [urlOne, setUrlOne] = useState("https://api.opencovid.ca/summary?loc=AB&after=01-01-2020")
  const [urlTwo, setUrlTwo] = useState("https://api.opencovid.ca/individual?stat=mortality&loc=AB")
  const [urlThree, setUrlThree] = useState("https://api.opencovid.ca/individual?stat=cases&loc=AB")

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
      console.log(urlOne)
      console.log(urlTwo)
      console.log(urlThree)

      try {
        const response = await Promise.all([
          axios.get('/dashboard/summary'),
          axios.get('/dashboard/mortality'),
          axios.get('/dashboard/cases')
        ])
        console.log("response: ", response);
        return response
      } catch (err) {
        console.log(err)
        return null;
      }
    }
    runCall();
  }, [urlOne, urlTwo, urlThree]);

  const search = function (url1, url2, url3) {
    setUrlOne(baseURLOne + url1);
    setUrlTwo(baseURLTwo + url2);
    setUrlThree(baseURLThree + url3);
  }

  console.log(provData.ageDemographic_count)
  console.log(provData.gender_demographic_infections)
  return (
    <>
      <div>
        <Select onClick={search} />
      </div>
      <div>
        {isLoading ?
          <Loading /> :
          <div>
            <AreaGraph coviddata={provData.confirmed_data} keydata="cases" xaxis=" Time Frame" yaxis="[Placeholder Province] Confirmed Cases" color="purple" />
            <AreaGraph coviddata={provData.deaths_data} keydata="deaths" xaxis=" Time Frame" yaxis="[Placeholder Province] Confirmed Deaths" color="black" />
            <AreaGraph coviddata={provData.recoveries_data} keydata="recoveries" xaxis="Time Frame" yaxis="[Placeholder Province] Recoveries" color="red" />
            {(provData.ageDemographic_count[6]["Case Count"] < 2) ? "No Data Available" : <PieGraph coviddata={provData.ageDemographic_count} />}
            {(provData.gender_demographic_infections[0].Infection < 5 || provData.gender_demographic_infections[1].Infection < 5) ? "No Data Available" : <PieAngleGraph coviddata={provData.gender_demographic_infections} datakey="Infection" nameKey="Gender" />}
          </div>
        }
      </div>
    </>
  );
}
