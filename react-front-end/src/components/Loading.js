import { Spinner } from "react-bootstrap";
export default function Status({ message }) {
  return (
    <div>
      <h2>Retreiving your data...</h2>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}