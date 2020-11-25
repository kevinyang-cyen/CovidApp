export default function checkForZeroData (sortedData) {
  if (!sortedData.gender_demographic_infections[0].Infection && !sortedData.gender_demographic_infections[1].Infection) {
    return true;
  } else {
    return false;
  }
}