import Alert from "react-bootstrap/Alert";
import "./AlertBar.css";

function TopAlert() {
  return (
    <>
      <Alert id="alert-bar" key={"warning"} variant={"warning"}>
        <a href="#">
          Find out your style TODAY! Click Here for your FREE Style Quiz!
        </a>
      </Alert>
    </>
  );
}

export default TopAlert;
