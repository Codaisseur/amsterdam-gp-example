import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { OnDuty, PatientData, Signup, Welcome } from "./pages";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/onduty' element={<OnDuty />} />
        <Route path='/database' element={<PatientData />} />
        <Route path='/' element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
