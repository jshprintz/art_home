import Alert from "react-bootstrap/Alert";
import "./AlertBar.css";

function TopAlert() {
  return (
    <>
      <Alert id="alert-bar" key={"warning"} variant={"warning"}>
        
          Find out your style TODAY!<button href="#" id="alert-btn"> Click Here for your FREE Style Quiz!
        </button>
      </Alert>
    </>
  );
}

export default TopAlert;
