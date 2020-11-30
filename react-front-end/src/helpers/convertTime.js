export default function timeConverter(date) {
  // convets time notation MM/DD/YEAR to MM-DD-YEAER
  let dateFormat = new Intl.DateTimeFormat('en-GB').format(date);
  let transformedDate = dateFormat.split("").map(element => {
    if (element === "/") {
      element = "-";
    }
    return element;
  }).join("");

  return transformedDate;
}