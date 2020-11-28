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
