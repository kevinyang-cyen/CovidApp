export default function sortProvinceData(provDataArr) {
  const confirmed_data = []; 
  const deaths_data = [];
  const recoveries_data = [];
  const age_demographic_data = {
    aboveEighty: [],
    aboveSeventy: [],
    aboveSixty: [],
    aboveFifty: [],
    aboveForty: [],
    aboveThirty: [],
    aboveTwenty: [],
    aboveTens: [],
    lessTens: []
  }
  provDataArr[0].data.summary.forEach((dataSet) => {
    confirmed_data.push({name: dataSet.date, cases: dataSet.cumulative_cases})
    deaths_data.push({name: dataSet.date, deaths: dataSet.cumulative_deaths})
    recoveries_data.push({name: dataSet.date, recoveries: dataSet.cumulative_recovered})
  })
  provDataArr[2].data.cases.forEach((result) => {

    if (result.age !== "Not Reported") {
      if (result.age === "80-89") {
        age_demographic_data.aboveEighty.push(result.age)
      } else if (result.age === "70-79") {
        age_demographic_data.aboveSeventy.push(result.age)
      } else if (result.age === "60-69") {
        age_demographic_data.aboveSixty.push(result.age)
      } else if (result.age === "50-59") {
        age_demographic_data.aboveFifty.push(result.age)
      } else if (result.age === "40-49") {
        age_demographic_data.aboveForty.push(result.age)
      } else if (result.age === "30-39") {
        age_demographic_data.aboveThirty.push(result.age)
      } else if (result.age === "20-29") {
        age_demographic_data.aboveTwenty.push(result.age)
      } else if (result.age === "10-19") {
        age_demographic_data.aboveTens.push(result.age)
      } else {
        age_demographic_data.lessTens.push(result.age)
      }
    }
  })
  const ageDemographic_count = [
    { name: "80-89", "Case Count": age_demographic_data.aboveEighty.length, fill: '#8884d8', },
    { name: "70-79", "Case Count": age_demographic_data.aboveSeventy.length, fill: '#83a6ed' },
    { name: "60-69", "Case Count": age_demographic_data.aboveSixty.length, fill: '#8dd1e1' },
    { name: "50-59", "Case Count": age_demographic_data.aboveFifty.length, fill: '#82ca9d' },
    { name: "40-49", "Case Count": age_demographic_data.aboveForty.length, fill: '#a4de6c' },
    { name: "30-39", "Case Count": age_demographic_data.aboveThirty.length, fill: '#d0ed57' },
    { name: "20-29", "Case Count": age_demographic_data.aboveTwenty.length, fill: '#ffc658' },
    { name: "10-19", "Case Count": age_demographic_data.aboveTens.length, fill: "red" },
    { name: "<10", "Case Count": age_demographic_data.lessTens.length, fill: "blue" },
  ]

  const covidDataSortMale = provDataArr[2].data.cases.filter(result => {
    return result.sex === "Male"
  })

  const covidDataSortFemale = provDataArr[2].data.cases.filter(result => {
    return result.sex === "Female"
  })

  const gender_demographic_infections = [
    { "Gender": "Male", "Infection": covidDataSortMale.length },
    { "Gender": "Female", "Infection": covidDataSortFemale.length }
  ];
  return {confirmed_data, deaths_data, recoveries_data, ageDemographic_count, gender_demographic_infections};
}