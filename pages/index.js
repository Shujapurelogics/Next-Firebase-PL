import LoginForm from "../components/LoginForm";
import Slider from "../components/Slider";

const Home= () => {
  return (
      <div className="signup-page">
        <div className="signup-form col-md-6"> <LoginForm/></div>
        <div className="slider col-md-6"> <Slider/></div>
      </div>
  )
}
export default Home;
