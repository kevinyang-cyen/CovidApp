import sortProvSummaryData from "../helpers/sortProvSummaryData.js";

export default function PerMillion() {

  useEffect(() => {
    let date = new Date() - 84000000
  
    date = (new Date(date).toISOString().replace(/T.*/, '').split('-').reverse().join('-'));
    const runCall = async () => {
      let apiValue = await fetchData();
      let resultData = sortProvSummaryData(apiValue)

      setProvDataSummary(resultData)
    }

    const fetchData = async () => {
      try {
        const response = await Promise(
          axios.post('/dashboard/allProvincesSummary', date),
        )
        return response
      } catch (err) {
        console.log(err)
        return null
      }
    }
    runCall();
  }, [date])
}

// set state to set data, store data as name + value so that the chart can use it... la di da, go from there.