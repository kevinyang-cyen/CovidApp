const data = [
  {
    "name": "Ontario",
    "population": 14446515
  },
  {
    "name": "Quebec",
    "population": 8433301
  },
  {
    "name": "British Columbia",
    "population": 5020302
  },
  {
    "name": "Alberta",
    "population": 4345737
  },
  {
    "name": "Manitoba",
    "population": 1360396
  },
  {
    "name": "Saskatchewan",
    "population": 1168423
  },
  {
    "name": "Nova Scotia",
    "population": 965382
  },
  {
    "name": "New Brunswick",
    "population": 772094
  },
  {
    "name": "Newfoundland",
    "population": 523790
  },
  {
    "name": "Prince Edward Island",
    "population": 154748
  },
  {
    "name": "Northwest Territory",
    "population": 44598
  },
  {
    "name": "Yukon",
    "population": 40369
  },
  {
    "name": "Nunavut",
    "population": 38787
  },
  {
    "name": "Canada",
    "population": 37314442
  }
]

export default function provPop(provPopData, province) {
  let popResult = "";

  provPopData.forEach((prov) => {
    if (prov.name === province) {
      popResult = prov.population;
    }
  })
  return popResult;
}