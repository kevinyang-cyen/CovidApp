export default function sortProvinceData(provDataArr) {
  let confirmed_data = []; 
  provDataArr[0].data.summary.forEach((dataSet) => {
    confirmed_data.push({name: dataSet.date, cases: dataSet.cumulative_cases})
  })
  return {confirmed_data: confirmed_data};
}