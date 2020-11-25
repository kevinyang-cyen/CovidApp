
import { useState } from 'react';

function Select(props) {

  const [locationCode, setLocationCode] = useState("");

  const onChange = function (event) {
    setLocationCode(event.target.value);
  };

  const search = function () {
    if (props.onClick) {
      if (locationCode === "AB") {
        let baseURL1 = "?loc=AB&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=AB"
        let baseURL3 = "?stat=cases&loc=AB"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "BC") {
        let baseURL1 = "?loc=BC&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=BC"
        let baseURL3 = "?stat=cases&loc=BC"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "NB") {
        let baseURL1 = "?loc=NB&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=NB"
        let baseURL3 = "?stat=cases&loc=NB"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "MB") {
        let baseURL1 = "?loc=MB&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=MB"
        let baseURL3 = "?stat=cases&loc=MB"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "NL") {
        let baseURL1 = "?loc=NL&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=NL"
        let baseURL3 = "?stat=cases&loc=NL"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "NT") {
        let baseURL1 = "?loc=NT&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=NT"
        let baseURL3 = "?stat=cases&loc=NT"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "NS") {
        let baseURL1 = "?loc=NS&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=NS"
        let baseURL3 = "?stat=cases&loc=NS"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "NU") {
        let baseURL1 = "?loc=NU&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=NU"
        let baseURL3 = "?stat=cases&loc=NU"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "ON") {
        let baseURL1 = "?loc=ON&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=ON"
        let baseURL3 = "?stat=cases&loc=ON"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "PE") {
        let baseURL1 = "?loc=PE&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=PE"
        let baseURL3 = "?stat=cases&loc=PE"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "QC") {
        let baseURL1 = "?loc=QC&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=QC"
        let baseURL3 = "?stat=cases&loc=QC"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "SK") {
        let baseURL1 = "?loc=SK&after=01-01-2020"
        let baseURL2 = "?stat=mortality&loc=SK"
        let baseURL3 = "?stat=cases&loc=SK"
        props.onClick(baseURL1, baseURL2, baseURL3, locationCode);
      } else if (locationCode === "YT") {
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
        <select className="custom-select" value={locationCode} onChange={onChange} name="province" id="inputGroupSelect03">
          <option value={null}>Select your region</option>
          <option value="CA">Canada</option>
          <option value="AB" >Alberta</option>
          <option value="BC">British Columbia</option>
          <option value="MB">Manitoba</option>
          <option value="NB">New Brunswick</option>
          <option value="NL">Newfoundland and Labrador</option>
          <option value="NT">Northwest Territories</option>
          <option value="PE">Prince Edward Island</option>
          <option value="NS">Nova Scotia</option>
          <option value="NU">Nunavut</option>
          <option value="ON">Ontario</option>
          <option value="QC">Quebec</option>
          <option value="SK">Saskatchewan</option>
          <option value="YT">Yukon</option>
        </select>
        <div className="input-group-prepend">
          <button className="filter-button" type="button" onClick={search}>Submit</button>
        </div>
      </div>
    </>
  );

}

export default Select;
