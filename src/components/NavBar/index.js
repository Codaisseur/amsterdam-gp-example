import { NavLink } from "react-router-dom";
import "./styles.css";

export const NavBar = () => {
  return (
    <div className='bar'>
      <div className='line-right'>
        <NavLink
          to='/'
          className='links'
          exact
          style={({ isActive }) => ({ fontWeight: isActive && "bold" })}
        >
          Home
        </NavLink>
      </div>
      <div className='line-right'>
        <NavLink
          to='/onduty'
          exact
          className='links'
          style={({ isActive }) => ({
            fontWeight: isActive && "bold",
          })}
        >
          Doctor Schedule
        </NavLink>
      </div>
      <div className='line-right'>
        <NavLink
          to='/signup'
          className='links'
          style={({ isActive }) => ({ fontWeight: isActive && "bold" })}
        >
          Patient Signup
        </NavLink>
      </div>
      <div style={{ width: "100%" }}>
        <NavLink
          to='/database'
          className='links'
          style={({ isActive }) => ({ fontWeight: isActive && "bold" })}
        >
          Patient Database
        </NavLink>
      </div>
    </div>
  );
};
