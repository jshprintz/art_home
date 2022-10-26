import Alert from 'react-bootstrap/Alert';
import "./AlertBar.css"

function TopAlert() {
  return (
    <>
        <Alert id='alert-bar' key={'warning'} variant={'warning'}>
          Big Sale Going On Right Now!
        </Alert>
    </>
  );
}

export default TopAlert;