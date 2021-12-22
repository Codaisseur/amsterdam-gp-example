import { Link } from "react-router-dom";
import { OpenClose } from "../../components";
import "./styles.css";

export const Welcome = () => {
  return (
    <div>
      <h1>Welcome to AMS GP</h1>
      <OpenClose />
      <div className='button-container'>
        <Link to='/onduty' className='link'>
          <button className='button'>Who is on duty?</button>
        </Link>
        <Link to='/signup' className='link'>
          <button className='button'>I am a new patient</button>
        </Link>
      </div>
    </div>
  );
};
