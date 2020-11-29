export default function sortHeatmapData(casesDataArr) {
  let sortObj = {}
  let returnArr = [];

  // sorts longitude and latitude for cities in Canada along with their cumulative cases
  casesDataArr.data.forEach((result) => {
    if (sortObj[`${result.Lat},${result.Lon}`]) {
      sortObj[`${result.Lat},${result.Lon}`] += result.Cases;
    } else {
      sortObj[`${result.Lat},${result.Lon}`] = result.Cases;
    }
  })

  Object.keys(sortObj).forEach((key) => {
    let coords = key.split(",")
    for (let n = 0; n < Math.log2(sortObj[key]) * 200; n++) {
      returnArr.push([parseFloat(coords[0]), parseFloat(coords[1])]);
    }

  })

  return returnArr;
}