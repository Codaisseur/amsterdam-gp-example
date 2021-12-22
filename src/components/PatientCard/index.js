import "./styles.css";

export const PatientCard = ({
  patient: { firstName, lastName, id, dateOfBirth },
}) => {
  return (
    <div className='card'>
      <p>Name: {firstName + " " + lastName}</p>
      <p>Id: {id}</p>
      <p>Date of Birth: {dateOfBirth}</p>
      <button className='details-button'>Show Details</button>
    </div>
  );
};
