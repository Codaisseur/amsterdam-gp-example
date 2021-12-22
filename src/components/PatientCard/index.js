import { useNavigate } from "react-router-dom";
import "./styles.css";

export const PatientCard = ({
  patient: { firstName, lastName, id, dateOfBirth },
}) => {
  const navigate = useNavigate();
  // Example of using navigate to link instead of Links or NavLinks

  return (
    <div className='card'>
      <p>Name: {firstName + " " + lastName}</p>
      <p>Id: {id}</p>
      <p>Date of Birth: {dateOfBirth}</p>
      <button
        className='details-button'
        onClick={() => navigate(`/patients/${id}`)}
      >
        Show Details
      </button>
    </div>
  );
};
