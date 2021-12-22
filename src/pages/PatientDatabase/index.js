import { useEffect, useState } from "react";
import axios from "axios";

import { PatientCard } from "../../components";
import "./styles.css";

export const PatientDatabase = () => {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(0);

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

    const fetchPatients = async () => {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
        );
        setPatients(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchDoctors();
    fetchPatients();
  }, []);

  return (
    <div className='page'>
      <h1>Patient Database</h1>

      <div>
        <label style={{ marginRight: 20 }}>Doctor</label>
        <select
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(parseInt(e.target.value))}
        >
          <option value={0}>All</option>
          {doctors.map((d) => (
            <option value={d.id} key={d.id}>
              {d.doctor}
            </option>
          ))}
        </select>
      </div>
      <div>
        {
          [...patients] // we make a copy since we have to .sort
            .filter((p) => !selectedDoctor || p.doctorId === selectedDoctor) // filter by doctorId
            .sort((p1, p2) => p1.lastName.localeCompare(p2.lastName)) // we sort the result
            .map((p) => (
              <PatientCard patient={p} key={p.id} />
            )) // map the sorted patients into Cards
        }
      </div>
    </div>
  );
};
