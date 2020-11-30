import { Spinner } from "react-bootstrap";
export default function Status({ message }) {
  return (
    <div className="spinner-load">
      <Spinner animation="border" role="status">
      </Spinner>
      <h2>&nbsp; Retrieving your data...</h2>
    </div>
  );
}