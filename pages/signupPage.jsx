import SignupForm from "../components/SignupForm";
import Slider from "../components/Slider";
import { Container, Row} from "reactstrap";
const SignupPage = () => {
  return (
      <Container fluid>
        <Row>
          <div className="col-md-6 signup-form"> <SignupForm/></div>
          <div className="col-md-6 slider"> <Slider/></div>
        </Row>
      </Container>
     
  )
}
export default SignupPage;
