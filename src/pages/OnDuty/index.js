import { useEffect, useState } from "react";
import axios from "axios";
import { OpenClose } from "../../components";
import "./styles.css";

export const OnDuty = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
        );
        console.log(response);
        setDoctors(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchDoctors();
  }, []);

  console.log(doctors);
  return (
    <div>
      <h1>Who is on duty?</h1>
      {!doctors.length ? (
        <b>Loading...</b>
      ) : (
        <div className='table-container'>
          <table>
            <tr>
              <th>Doctor</th>
              <th>Availability</th>
            </tr>
            {doctors.map((d) => (
              <tr>
                <td>{d.doctor}</td>
                <td>{d.onDuty ? "on duty" : "off duty"}</td>
              </tr>
            ))}
          </table>
        </div>
      )}
      <OpenClose />
    </div>
  );
};
