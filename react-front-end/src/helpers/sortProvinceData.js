export default function sortProvinceData(provDataArr) {
  const confirmed_data = [];
  const deaths_data = [];
  const recoveries_data = [];
  const testing_data = [];
  const timeSpecific_data = [];
  const cases_age_demographic_data = {
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

  const deaths_age_demographic_data = {
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
    confirmed_data.push({ name: dataSet.date, cases: dataSet.cumulative_cases })
    deaths_data.push({ name: dataSet.date, deaths: dataSet.cumulative_deaths })
    recoveries_data.push({ name: dataSet.date, recoveries: dataSet.cumulative_recovered })
    testing_data.push({ name: dataSet.date, testing: dataSet.cumulative_testing })
    timeSpecific_data.push({ name: dataSet.date, totalCases: dataSet.cumulative_cases, todayCase: dataSet.cases, caseChange: dataSet.active_cases_change, testToday: dataSet.testing, activeCase: dataSet.active_cases, todayDeaths: dataSet.deaths })
  })

  if (provDataArr[1].data.mortality) {
    provDataArr[1].data.mortality.forEach((result) => {
      if (result.age !== "Not Reported") {
        if (result.age === "80-89") {
          deaths_age_demographic_data.aboveEighty.push(result.age)
        } else if (result.age === "70-79") {
          deaths_age_demographic_data.aboveSeventy.push(result.age)
        } else if (result.age === "60-69") {
          deaths_age_demographic_data.aboveSixty.push(result.age)
        } else if (result.age === "50-59") {
          deaths_age_demographic_data.aboveFifty.push(result.age)
        } else if (result.age === "40-49") {
          deaths_age_demographic_data.aboveForty.push(result.age)
        } else if (result.age === "30-39") {
          deaths_age_demographic_data.aboveThirty.push(result.age)
        } else if (result.age === "20-29") {
          deaths_age_demographic_data.aboveTwenty.push(result.age)
        } else if (result.age === "10-19") {
          deaths_age_demographic_data.aboveTens.push(result.age)
        } else {
          deaths_age_demographic_data.lessTens.push(result.age)
        }
      }
    })
  }

  if (provDataArr[2].data.cases) {
    provDataArr[2].data.cases.forEach((result) => {

      if (result.age !== "Not Reported") {
        if (result.age === "80-89") {
          cases_age_demographic_data.aboveEighty.push(result.age)
        } else if (result.age === "70-79") {
          cases_age_demographic_data.aboveSeventy.push(result.age)
        } else if (result.age === "60-69") {
          cases_age_demographic_data.aboveSixty.push(result.age)
        } else if (result.age === "50-59") {
          cases_age_demographic_data.aboveFifty.push(result.age)
        } else if (result.age === "40-49") {
          cases_age_demographic_data.aboveForty.push(result.age)
        } else if (result.age === "30-39") {
          cases_age_demographic_data.aboveThirty.push(result.age)
        } else if (result.age === "20-29") {
          cases_age_demographic_data.aboveTwenty.push(result.age)
        } else if (result.age === "10-19") {
          cases_age_demographic_data.aboveTens.push(result.age)
        } else {
          cases_age_demographic_data.lessTens.push(result.age)
        }
      }
    })
  }

  const ageDemographic_count_cases = [
    { name: "80-89", "Case Count": cases_age_demographic_data.aboveEighty.length },
    { name: "70-79", "Case Count": cases_age_demographic_data.aboveSeventy.length },
    { name: "60-69", "Case Count": cases_age_demographic_data.aboveSixty.length },
    { name: "50-59", "Case Count": cases_age_demographic_data.aboveFifty.length },
    { name: "40-49", "Case Count": cases_age_demographic_data.aboveForty.length },
    { name: "30-39", "Case Count": cases_age_demographic_data.aboveThirty.length },
    { name: "20-29", "Case Count": cases_age_demographic_data.aboveTwenty.length },
    { name: "10-19", "Case Count": cases_age_demographic_data.aboveTens.length },
    { name: "<10", "Case Count": cases_age_demographic_data.lessTens.length },
  ]

  const ageDemographic_count_deaths = [
    { name: "80-89", "Case Count": deaths_age_demographic_data.aboveEighty.length },
    { name: "70-79", "Case Count": deaths_age_demographic_data.aboveSeventy.length },
    { name: "60-69", "Case Count": deaths_age_demographic_data.aboveSixty.length },
    { name: "50-59", "Case Count": deaths_age_demographic_data.aboveFifty.length },
    { name: "40-49", "Case Count": deaths_age_demographic_data.aboveForty.length },
    { name: "30-39", "Case Count": deaths_age_demographic_data.aboveThirty.length },
    { name: "20-29", "Case Count": deaths_age_demographic_data.aboveTwenty.length },
    { name: "10-19", "Case Count": deaths_age_demographic_data.aboveTens.length },
    { name: "<10", "Case Count": deaths_age_demographic_data.lessTens.length },
  ]

  let covidDataSortMaleCases = [];
  let covidDataSortFemaleCases = [];
  let covidDataSortMaleDeaths = [];
  let covidDataSortFemaleDeaths = [];


  if (provDataArr[1].data.mortality) {
    covidDataSortMaleDeaths = provDataArr[1].data.mortality.filter(result => {
      return result.sex === "Male"
    })

    covidDataSortFemaleDeaths = provDataArr[1].data.mortality.filter(result => {
      return result.sex === "Female"
    })
  }

  if (provDataArr[2].data.cases) {
    covidDataSortMaleCases = provDataArr[2].data.cases.filter(result => {
      return result.sex === "Male"
    })

    covidDataSortFemaleCases = provDataArr[2].data.cases.filter(result => {
      return result.sex === "Female"
    })
  }

  const gender_demographic_infections = [
    { "Gender": "Male", "Infection": covidDataSortMaleCases.length },
    { "Gender": "Female", "Infection": covidDataSortFemaleCases.length }
  ];

  const gender_demographic_deaths = [
    { "Gender": "Male", "Deaths": covidDataSortMaleDeaths.length },
    { "Gender": "Female", "Deaths": covidDataSortFemaleDeaths.length }
  ];

  return {
    confirmed_data, deaths_data, timeSpecific_data, recoveries_data, testing_data, ageDemographic_count_cases, gender_demographic_infections, ageDemographic_count_deaths,
    gender_demographic_deaths
  };
}