import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./styles.css";

export const PatientDetails = () => {
  const [details, setDetails] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(
          `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/${id}`
        );
        setDetails(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchDetails();
  }, [id]);

  console.log("details", details);

  if (!details) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  // if patient data got fetched already, render
  const { firstName, lastName, dateOfBirth, gender, email, phoneNumber } =
    details;
  return (
    <div className='page'>
      <h2>{firstName + " " + lastName}</h2>
      <div className='details-form'>
        <span>Id: {id}</span>
        <span>Date of Birth: {dateOfBirth}</span>
        <span>Gender: {gender}</span>
        <span>Contact Details:</span>
        <ul>
          <li>email: {email}</li>
          <li>Phone: {phoneNumber}</li>
        </ul>
        <span>Prescriptions:</span>
        <ul>
          {details.prescriptions.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
