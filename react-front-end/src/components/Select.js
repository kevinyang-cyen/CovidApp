import { useState } from 'react';

function Select(props) {

  const [locationCode, setLocationCode] = useState("");

  const onChange = function (event) {
    setLocationCode(event.target.value);
  };

  const search = function () {
    if (props.onClick) {
      if (locationCode === "Alberta") {
        let baseURL1 = "?loc=AB&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=AB"
        let baseURL3 = "?stat=cases&loc=AB"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "British Columbia") {
        let baseURL1 = "?loc=BC&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=BC"
        let baseURL3 = "?stat=cases&loc=BC"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "New Brunswick") {
        let baseURL1 = "?loc=NB&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=NB"
        let baseURL3 = "?stat=cases&loc=NB"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "Manitoba") {
        let baseURL1 = "?loc=MB&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=MB"
        let baseURL3 = "?stat=cases&loc=MB"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "Newfoundland and Labrador") {
        let baseURL1 = "?loc=NL&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=NL"
        let baseURL3 = "?stat=cases&loc=NL"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "Northwest Territories") {
        let baseURL1 = "?loc=NT&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=NT"
        let baseURL3 = "?stat=cases&loc=NT"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "Nova Scotia") {
        let baseURL1 = "?loc=NS&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=NS"
        let baseURL3 = "?stat=cases&loc=NS"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "Nunavut") {
        let baseURL1 = "?loc=NU&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=NU"
        let baseURL3 = "?stat=cases&loc=NU"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "Ontario") {
        let baseURL1 = "?loc=ON&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=ON"
        let baseURL3 = "?stat=cases&loc=ON"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "Prince Edward Island") {
        let baseURL1 = "?loc=PE&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=PE"
        let baseURL3 = "?stat=cases&loc=PE"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "Quebec") {
        let baseURL1 = "?loc=QC&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=QC"
        let baseURL3 = "?stat=cases&loc=QC"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "Saskatoon") {
        let baseURL1 = "?loc=SK&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=SK"
        let baseURL3 = "?stat=cases&loc=SK"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "Yukon") {
        let baseURL1 = "?loc=YT&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=YT"
        let baseURL3 = "?stat=cases&loc=YT"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else {
        let baseURL1 = "?loc=canada&after=01-01-2020"
        let baseURL2 = "?stat=mortality"
        let baseURL3 = ""
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      }
    }
  };

  return (
    <>
      <div className="input-group mb-3">
<<<<<<< HEAD
        <select className="custom-select" onChange={onChange} name="province" id="inputGroupSelect03">
          <option value={null} hidden>Select your province</option>
=======
        <select className="custom-select" defaultValue="Select your province" onChange={onChange} name="province" id="inputGroupSelect03">
          <option value="Select your province" hidden>Select your province</option>
>>>>>>> css/age-gender
          <option value="Canada">Canada</option>
          <option value="Alberta" >Alberta</option>
          <option value="British Columbia">British Columbia</option>
          <option value="Manitoba">Manitoba</option>
          <option value="New Brunswick">New Brunswick</option>
          <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
          <option value="Northwest Territories">Northwest Territories</option>
          <option value="Prince Edward Island">Prince Edward Island</option>
          <option value="Nova Scotia">Nova Scotia</option>
          <option value="Nunavut">Nunavut</option>
          <option value="Ontario">Ontario</option>
          <option value="Quebec">Quebec</option>
          <option value="Saskatoon">Saskatchewan</option>
          <option value="Yukon">Yukon</option>
        </select>
        <div className="input-group-prepend">
          <button className="filter-button" type="button" onClick={search}>Submit</button>
        </div>
      </div>
    </>
  );

}

export default Select;