import { Link } from "react-router-dom";
import PeanutMM from "./PeanutMM";
import FerreroRocher from "./FerreroRocher";
import NerdGummyCluster from "./NerdGummyCluster";
import "./VendingMachine.css"

const VendingMachine = () => {
  return (
    <div className='vending-machine'>
      <div className='vending-machine-text'>
      <h1>Hello, I am a vending machine. What would you like to eat?</h1>

      </div>
      <div className='vending-items'>
        <Link to='/PeanutMM'>Peanut M&M's</Link>
        <Link to='/FerreroRocher'>Ferrero Rocher</Link>
        <Link to='/NerdGummyCluster'>Nerd Gummy Cluster's</Link>
      </div>
    </div>
  );
};

export default VendingMachine;
