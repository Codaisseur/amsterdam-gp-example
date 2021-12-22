import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  OnDuty,
  PatientDatabase,
  Signup,
  Welcome,
  PatientDetails,
} from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/onduty' element={<OnDuty />} />
        <Route path='/database' element={<PatientDatabase />} />
        <Route path='/patients/:id' element={<PatientDetails />} />
        <Route path='/' element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
