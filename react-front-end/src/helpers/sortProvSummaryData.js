// let pop = [
//   {
//     "name": "Ontario",
//     "pop": 14446515
//   },
//   {
//     "name": "Quebec",
//     "pop": 8433301
//   },
//   {
//     "name": "British Columbia",
//     "pop": 5020302
//   },
//   {
//     "name": "Alberta",
//     "pop": 4345737
//   },
//   {
//     "name": "Manitoba",
//     "pop": 1360396
//   },
//   {
//     "name": "Saskatchewan",
//     "pop": 1168423
//   },
//   {
//     "name": "Nova Scotia",
//     "pop": 965382
//   },
//   {
//     "name": "New Brunswick",
//     "pop": 772094
//   },
//   {
//     "name": "Newfoundland",
//     "pop": 523790
//   },
//   {
//     "name": "Prince Edward Island",
//     "pop": 154748
//   },
//   {
//     "name": "Northwest Territory",
//     "pop": 44598
//   },
//   {
//     "name": "Yukon",
//     "pop": 40369
//   },
//   {
//     "name": "Nunavut",
//     "pop": 38787
//   }
// ]

// let data = {
//   summary: [
//     {
//       active_cases: 14052,
//       active_cases_change: 333,
//       cases: 1077,
//       cumulative_cases: 51878,
//       cumulative_deaths: 510,
//       cumulative_recovered: 37316,
//       cumulative_testing: 2173038,
//       date: "26-11-2020",
//       deaths: 10,
//       province: "Alberta",
//       recovered: 734,
//       testing: 15994,
//       testing_info: "NULL"
//     },
//     {
//       active_cases: 9591,
//       active_cases_change: 690,
//       cases: 887,
//       cumulative_cases: 29973,
//       cumulative_deaths: 384,
//       cumulative_recovered: 19998,
//       cumulative_testing: 1102307,
//       date: "26-11-2020",
//       deaths: 13,
//       province: "BC",
//       recovered: 184,
//       testing: 13082,
//       testing_info: "NULL"
//     },
//     {
//       active_cases: 8845,
//       active_cases_change: 89,
//       cases: 383,
//       cumulative_cases: 15288,
//       cumulative_deaths: 266,
//       cumulative_recovered: 6177,
//       cumulative_testing: 341973,
//       date: "26-11-2020",
//       deaths: 10,
//       province: "Manitoba",
//       recovered: 284,
//       testing: 1822,
//       testing_info: "NULL"
//     },
//     {
//       active_cases: 105,
//       active_cases_change: 11,
//       cases: 12,
//       cumulative_cases: 465,
//       cumulative_deaths: 7,
//       cumulative_recovered: 353,
//       cumulative_testing: 120145,
//       date: "26-11-2020",
//       deaths: 0,
//       province: "New Brunswick",
//       recovered: 1,
//       testing: 1497,
//       testing_info: "NULL"
//     },
//     {
//       active_cases: 28,
//       active_cases_change: 3,
//       cases: 3,
//       cumulative_cases: 327,
//       cumulative_deaths: 4,
//       cumulative_recovered: 295,
//       cumulative_testing: 60578,
//       date: "26-11-2020",
//       deaths: 0,
//       province: "NL",
//       recovered: 0,
//       testing: 379,
//       testing_info: "NULL"
//     },
//     {
//       active_cases: 114,
//       active_cases_change: 12,
//       cases: 14,
//       cumulative_cases: 1257,
//       cumulative_deaths: 65,
//       cumulative_recovered: 1078,
//       cumulative_testing: 134609,
//       date: "26-11-2020",
//       deaths: 0,
//       province: "Nova Scotia",
//       recovered: 2,
//       testing: 2061,
//       testing_info: "NULL"
//     },
//     {
//       active_cases: 150,
//       active_cases_change: -3,
//       cases: 0,
//       cumulative_cases: 155,
//       cumulative_deaths: 0,
//       cumulative_recovered: 5,
//       cumulative_testing: 4712,
//       date: "26-11-2020",
//       deaths: 0,
//       province: "Nunavut",
//       recovered: 3,
//       testing: 0,
//       testing_info: "NULL"
//     },
//     {
//       active_cases: 0,
//       active_cases_change: 0,
//       cases: 0,
//       cumulative_cases: 15,
//       cumulative_deaths: 0,
//       cumulative_recovered: 15,
//       cumulative_testing: 7489,
//       date: "26-11-2020",
//       deaths: 0,
//       province: "NWT",
//       recovered: 0,
//       testing: 69,
//       testing_info: "NULL"
//     },
//     {
//       active_cases: 16327,
//       active_cases_change: 188,
//       cases: 1573,
//       cumulative_cases: 112846,
//       cumulative_deaths: 3604,
//       cumulative_recovered: 92915,
//       cumulative_testing: 6068428,
//       date: "26-11-2020",
//       deaths: 20,
//       province: "Ontario",
//       recovered: 1365,
//       testing: 47576,
//       testing_info: "NULL"
//     },
//     {
//       active_cases: 2,
//       active_cases_change: 0,
//       cases: 0,
//       cumulative_cases: 70,
//       cumulative_deaths: 0,
//       cumulative_recovered: 68,
//       cumulative_testing: 53841,
//       date: "26-11-2020",
//       deaths: 0,
//       province: "PEI",
//       recovered: 0,
//       testing: 485,
//       testing_info: "NULL"
//     },
//     {
//       active_cases: 11456,
//       active_cases_change: 493,
//       cases: 1465,
//       cumulative_cases: 136894,
//       cumulative_deaths: 6947,
//       cumulative_recovered: 118491,
//       cumulative_testing: 2136210,
//       date: "26-11-2020",
//       deaths: 32,
//       province: "Quebec",
//       recovered: 940,
//       testing: 0,
//       testing_info: "NULL"
//     },
//     {
//       active_cases: 0,
//       active_cases_change: 0,
//       cases: 0,
//       cumulative_cases: 13,
//       cumulative_deaths: "NULL",
//       cumulative_recovered: 13,
//       cumulative_testing: "NULL",
//       date: "26-11-2020",
//       deaths: "NULL",
//       province: "Repatriated",
//       recovered: 0,
//       testing: "NULL",
//       testing_info: "NULL"
//     },
//     {
//       active_cases: 3146,
//       active_cases_change: 134,
//       cases: 315,
//       cumulative_cases: 7362,
//       cumulative_deaths: 40,
//       cumulative_recovered: 4176,
//       cumulative_testing: 252048,
//       date: "26-11-2020",
//       deaths: 3,
//       province: "Saskatchewan",
//       recovered: 178,
//       testing: 2055,
//       testing_info: "NULL"
//     },
//     {
//       active_cases: 15,
//       active_cases_change: 0,
//       cases: 0,
//       cumulative_cases: 39,
//       cumulative_deaths: 1,
//       cumulative_recovered: 23,
//       cumulative_testing: 4987,
//       date: "26-11-2020",
//       deaths: 0,
//       province: "Yukon",
//       recovered: 0,
//       testing: 0,
//       testing_info: "NULL"
//     }
//   ]
// }


export default function sortProvSummaryData(provDataSum, pop) {
  let provSummary = {
    "Alberta": {},
    "BC": {},
    "Manitoba": {},
    "New Brunswick": {},
    "NL": {},
    "Nova Scotia": {},
    "Nunavut": {},
    "NWT": {},
    "Ontario": {},
    "PEI": {},
    "Quebec": {},
    "Saskatchewan": {},
    "Yukon": {}
  }

  let provSummaryGraphData = {
    casesPerMil: [{
      name: 'Alberta', cases: 0
    },
    {
      name: 'BC', cases: 0
    },
    {
      name: 'Manitoba', cases: 0
    },
    {
      name: 'New Brunswick', cases: 0
    },
    {
      name: 'NL', cases: 0
    },
    {
      name: 'Nova Scotia', cases: 0
    },
    {
      name: 'Nunavut', cases: 0
    },
    {
      name: 'NWT', cases: 0
    },
    {
      name: 'Ontario', cases: 0
    },
    {
      name: 'PEI', cases: 0
    },
    {
      name: 'Quebec', cases: 0
    },
    {
      name: 'Saskatchewan', cases: 0
    },
    {
      name: 'Yukon', cases: 0
    }],
    testsPerMil: [{
      name: 'Alberta', tests: 0
    },
    {
      name: 'BC', tests: 0
    },
    {
      name: 'Manitoba', tests: 0
    },
    {
      name: 'New Brunswick', tests: 0
    },
    {
      name: 'NL', tests: 0
    },
    {
      name: 'Nova Scotia', tests: 0
    },
    {
      name: 'Nunavut', tests: 0
    },
    {
      name: 'NWT', tests: 0
    },
    {
      name: 'Ontario', tests: 0
    },
    {
      name: 'PEI', tests: 0
    },
    {
      name: 'Quebec', tests: 0
    },
    {
      name: 'Saskatchewan', tests: 0
    },
    {
      name: 'Yukon', tests: 0
    }],
  }
// grabs data from api + puts it into respective provinces 
  pop.forEach((provPop) => {
    provDataSum[0].data.summary.forEach((prov) => {
      if (prov.province === "Alberta" && provPop.name === "Alberta") {
        provSummary["Alberta"].cumulative_cases = Math.round((prov.cumulative_cases / provPop.pop) * 1000000);
        provSummary["Alberta"].cumulative_testing = Math.round((prov.cumulative_testing / provPop.pop) * 1000000);
      } else if (prov.province === "BC" && provPop.name === "British Columbia") {
        provSummary["BC"].cumulative_cases = Math.round((prov.cumulative_cases / provPop.pop) * 1000000);
        provSummary["BC"].cumulative_testing = Math.round((prov.cumulative_testing / provPop.pop) * 1000000);
      } else if (prov.province === "Manitoba" && provPop.name === "Manitoba") {
        provSummary["Manitoba"].cumulative_cases = Math.round((prov.cumulative_cases / provPop.pop) * 1000000);
        provSummary["Manitoba"].cumulative_testing = Math.round((prov.cumulative_testing / provPop.pop) * 1000000);
      } else if (prov.province === "New Brunswick" && provPop.name === "New Brunswick") {
        provSummary["New Brunswick"].cumulative_cases = Math.round((prov.cumulative_cases / provPop.pop) * 1000000);
        provSummary["New Brunswick"].cumulative_testing = Math.round((prov.cumulative_testing / provPop.pop) * 1000000);
      } else if (prov.province === "NL" && provPop.name === "Newfoundland") {
        provSummary["NL"].cumulative_cases = Math.round((prov.cumulative_cases / provPop.pop) * 1000000);
        provSummary["NL"].cumulative_testing = Math.round((prov.cumulative_testing / provPop.pop) * 1000000);
      } else if (prov.province === "Nova Scotia" && provPop.name === "Nova Scotia") {
        provSummary["Nova Scotia"].cumulative_cases = Math.round((prov.cumulative_cases / provPop.pop) * 1000000);
        provSummary["Nova Scotia"].cumulative_testing = Math.round((prov.cumulative_testing / provPop.pop) * 1000000);
      } else if (prov.province === "Nunavut" && provPop.name === "Nunavut") {
        provSummary["Nunavut"].cumulative_cases = Math.round((prov.cumulative_cases / provPop.pop) * 1000000);
        provSummary["Nunavut"].cumulative_testing = Math.round((prov.cumulative_testing / provPop.pop) * 1000000);
      } else if (prov.province === "NWT" && provPop.name === "Northwest Territory") {
        provSummary["NWT"].cumulative_cases = Math.round((prov.cumulative_cases / provPop.pop) * 1000000);
        provSummary["NWT"].cumulative_testing = Math.round((prov.cumulative_testing / provPop.pop) * 1000000);
      } else if (prov.province === "Ontario" && provPop.name === "Ontario") {
        provSummary["Ontario"].cumulative_cases = Math.round((prov.cumulative_cases / provPop.pop) * 1000000);
        provSummary["Ontario"].cumulative_testing = Math.round((prov.cumulative_testing / provPop.pop) * 1000000);
      } else if (prov.province === "PEI" && provPop.name === "Prince Edward Island") {
        provSummary["PEI"].cumulative_cases = Math.round((prov.cumulative_cases / provPop.pop) * 1000000);
        provSummary["PEI"].cumulative_testing = Math.round((prov.cumulative_testing / provPop.pop) * 1000000);
      } else if (prov.province === "Quebec" && provPop.name === "Quebec") {
        provSummary["Quebec"].cumulative_cases = Math.round((prov.cumulative_cases / provPop.pop) * 1000000);
        provSummary["Quebec"].cumulative_testing = Math.round((prov.cumulative_testing / provPop.pop) * 1000000);
      } else if (prov.province === "Saskatchewan" && provPop.name === "Saskatchewan") {
        provSummary["Saskatchewan"].cumulative_cases = Math.round((prov.cumulative_cases / provPop.pop) * 1000000);
        provSummary["Saskatchewan"].cumulative_testing = Math.round((prov.cumulative_testing / provPop.pop) * 1000000);
      } else if (prov.province === "Yukon" && provPop.name === "Yukon") {
        provSummary["Yukon"].cumulative_cases = Math.round((prov.cumulative_cases / provPop.pop) * 1000000);
        provSummary["Yukon"].cumulative_testing = Math.round((prov.cumulative_testing / provPop.pop) * 1000000);
      }
    })
  })
// functions below put data into readable info by rechart 
  provSummaryGraphData.casesPerMil.forEach((prov) => {
    if (prov.name === 'Alberta') {
      prov.cases = provSummary['Alberta']['cumulative_cases']
    } else if (prov.name === 'BC') {
      prov.cases = provSummary['BC']['cumulative_cases']
    } else if (prov.name === 'Manitoba') {
      prov.cases = provSummary['Manitoba']['cumulative_cases']
    } else if (prov.name === 'New Brunswick') {
      prov.cases = provSummary['New Brunswick']['cumulative_cases']
    } else if (prov.name === 'NL') {
      prov.cases = provSummary['NL']['cumulative_cases']
    } else if (prov.name === 'Nova Scotia') {
      prov.cases = provSummary['Nova Scotia']['cumulative_cases']
    } else if (prov.name === 'Nunavut') {
      prov.cases = provSummary['Nunavut']['cumulative_cases']
    } else if (prov.name === 'NWT') {
      prov.cases = provSummary['NWT']['cumulative_cases']
    } else if (prov.name === 'Ontario') {
      prov.cases = provSummary['Ontario']['cumulative_cases']
    } else if (prov.name === 'PEI') {
      prov.cases = provSummary['PEI']['cumulative_cases']
    } else if (prov.name === 'Quebec') {
      prov.cases = provSummary['Quebec']['cumulative_cases']
    } else if (prov.name === 'Saskatchewan') {
      prov.cases = provSummary['Saskatchewan']['cumulative_cases']
    } else if (prov.name === 'Yukon') {
      prov.cases = provSummary['Yukon']['cumulative_cases']
    }
  })

  provSummaryGraphData.testsPerMil.forEach((prov) => {
    if (prov.name === 'Alberta') {
      prov.tests = provSummary['Alberta']['cumulative_testing']
    } else if (prov.name === 'BC') {
      prov.tests = provSummary['BC']['cumulative_testing']
    } else if (prov.name === 'Manitoba') {
      prov.tests = provSummary['Manitoba']['cumulative_testing']
    } else if (prov.name === 'New Brunswick') {
      prov.tests = provSummary['New Brunswick']['cumulative_testing']
    } else if (prov.name === 'NL') {
      prov.tests = provSummary['NL']['cumulative_testing']
    } else if (prov.name === 'Nova Scotia') {
      prov.tests = provSummary['Nova Scotia']['cumulative_testing']
    } else if (prov.name === 'Nunavut') {
      prov.tests = provSummary['Nunavut']['cumulative_testing']
    } else if (prov.name === 'NWT') {
      prov.tests = provSummary['NWT']['cumulative_testing']
    } else if (prov.name === 'Ontario') {
      prov.tests = provSummary['Ontario']['cumulative_testing']
    } else if (prov.name === 'PEI') {
      prov.tests = provSummary['PEI']['cumulative_testing']
    } else if (prov.name === 'Quebec') {
      prov.tests = provSummary['Quebec']['cumulative_testing']
    } else if (prov.name === 'Saskatchewan') {
      prov.tests = provSummary['Saskatchewan']['cumulative_testing']
    } else if (prov.name === 'Yukon') {
      prov.tests = provSummary['Yukon']['cumulative_testing']
    }
  })

  return provSummaryGraphData;
}
