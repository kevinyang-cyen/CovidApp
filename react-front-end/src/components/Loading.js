import { Spinner } from "react-bootstrap";
export default function Status({message}) {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}