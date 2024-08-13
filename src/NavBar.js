import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavLink to='/'>Vending Machine</NavLink>
      <NavLink to='/PeanutMM'>Peanut M&M's</NavLink>
      <NavLink to='/FerreroRocher'>Ferrero Rocher</NavLink>
      <NavLink to='/NerdGummyCluster'>Nerd Gummy Cluster's</NavLink>
    </nav>
  );
};

export default NavBar;
