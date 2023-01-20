import SignupForm from "../components/SignupForm";
import Slider from "../components/Slider";

const SignupPage = () => {
  return (
      <div className="signup-page">
        <div className="signup-form"> <SignupForm/></div>
        <div className="slider"> <Slider/></div>
      </div>
  )
}
export default SignupPage;
