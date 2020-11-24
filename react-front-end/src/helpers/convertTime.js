export default function timeConverter(date) {
  let dateFormat = new Intl.DateTimeFormat('en-GB').format(date);
  let transformedDate = dateFormat.split("").map(element => {
    if (element === "/") {
      element = "-";
    }
    return element;
  }).join("");

  return transformedDate;
}