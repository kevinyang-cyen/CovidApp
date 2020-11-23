import AreaGraph from "./Graph/AreaGraph";
import BarGraph from "./Graph/BarGraph";
import VerticalGraph from "./Graph/VerticalGraph";
import PieGraph from "./Graph/PieGraph";
import PieAngleGraph from "./Graph/PieAngleGraph";
import * as covidDataCanada from "./canada-covid-data.json";
import * as covidDataProvincial from "./province-covid-data.json";
import * as covidDataDemographics from "./BC-province-sample-casesdata.json";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading.js";
import sortProvinceData from "../helpers/sortProvinceData.js";

export default function Dashboard() {
  const [bCData, setBCData] = useState({name: '', cases: 0});
  const [isLoading,setIsLoading] = useState(true);
  let BC_Confirmed_Data = [];

  

  useEffect(() => {
    const runCall = async () => {
      let apiValue = await fetchData();
      BC_Confirmed_Data = sortProvinceData(apiValue).confirmed_data;
      setBCData(BC_Confirmed_Data);
      setIsLoading(false);
    }
    const fetchData = async () => {
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


  const confirmed_data = [];
  const deaths_data = [];
  const recovered_data = [];
  const province_data = [];
  const aboveEighty = [];
  const aboveSeventy = [];
  const aboveSixty = [];
  const aboveFifty = [];
  const aboveForty = [];
  const aboveThirty = [];
  const aboveTwenty = [];
  const aboveTens = [];
  const lessTens = [];

  const covidDataListCanada = covidDataCanada.result.forEach(result => {
    confirmed_data.push({ name: result.date, cases: result.confirmed })
    deaths_data.push({ name: result.date, deaths: result.deaths })
    recovered_data.push({ name: result.date, recoveries: result.recovered })
  });

  const covidDataListProvincial = covidDataProvincial.cases.forEach(result => {
    province_data.push({ "province": result.province, "total-cases": result.cumulative_cases })
  });

  const covidDataSortAge = covidDataDemographics.cases.forEach(result => {
    if (result.age !== "Not Reported") {
      if (result.age === "80-89") {
        aboveEighty.push(result.age)
      } else if (result.age === "70-79") {
        aboveSeventy.push(result.age)
      } else if (result.age === "60-69") {
        aboveSixty.push(result.age)
      } else if (result.age === "50-59") {
        aboveFifty.push(result.age)
      } else if (result.age === "40-49") {
        aboveForty.push(result.age)
      } else if (result.age === "30-39") {
        aboveThirty.push(result.age)
      } else if (result.age === "20-29") {
        aboveTwenty.push(result.age)
      } else if (result.age === "10-19") {
        aboveTens.push(result.age)
      } else {
        lessTens.push(result.age)
      }
    }
  });

  const ageDemographic_data = [
    { name: "80-89", "Case Count": aboveEighty.length, fill: '#8884d8', },
    { name: "70-79", "Case Count": aboveSeventy.length, fill: '#83a6ed' },
    { name: "60-69", "Case Count": aboveSixty.length, fill: '#8dd1e1' },
    { name: "50-59", "Case Count": aboveFifty.length, fill: '#82ca9d' },
    { name: "40-49", "Case Count": aboveForty.length, fill: '#a4de6c' },
    { name: "30-39", "Case Count": aboveThirty.length, fill: '#d0ed57' },
    { name: "20-29", "Case Count": aboveTwenty.length, fill: '#ffc658' },
    { name: "10-19", "Case Count": aboveTens.length, fill: "red" },
    { name: "<10", "Case Count": lessTens.length, fill: "blue" },
  ]

  const covidDataSortMale = covidDataDemographics.cases.filter(result => {
    return result.sex === "Male"
  })

  const covidDataSortFemale = covidDataDemographics.cases.filter(result => {
    return result.sex === "Female"
  })

  const genderDemographic = [
    { "Gender": "Male", "Infection": covidDataSortMale.length },
    { "Gender": "Female", "Infection": covidDataSortFemale.length }
  ];

  console.log(confirmed_data);


  return (
    <>
      <div>
        <AreaGraph coviddata={confirmed_data} keydata="cases" xaxis=" Time Frame" yaxis="Canada Confirmed Cases" color="purple" />
      </div>
      <div>
        <AreaGraph coviddata={deaths_data} keydata="deaths" xaxis="Time Frame" yaxis="Canada Deaths" color="black" />
      </div>
      <div>
        <AreaGraph coviddata={recovered_data} keydata="recoveries" xaxis="Time Frame" yaxis="Canada Recovered" color="red" />
      </div>
      <div>
        <BarGraph coviddata={province_data} keydataAxis="total-cases" keydata="province" xaxis="Provinces" yaxis="Cumulative Cases" />
      </div>
      <div>
        <PieGraph coviddata={ageDemographic_data} />
      </div>
      <div>
        <PieAngleGraph coviddata={genderDemographic} datakey="Infection" nameKey="Gender" />
      </div>
      <div>
      {isLoading? <Loading/>: <AreaGraph coviddata={bCData} keydata="cases" xaxis=" Time Frame" yaxis="BC Confirmed Cases" color="purple" />}
      </div>
    </>
  );
}
