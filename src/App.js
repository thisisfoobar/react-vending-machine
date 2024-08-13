import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import PeanutMM from "./PeanutMM";
import FerreroRocher from "./FerreroRocher";
import NerdGummyCluster from "./NerdGummyCluster";
import NavBar from "./NavBar";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<VendingMachine />} />
          <Route path='/PeanutMM' element={<PeanutMM />} />
          <Route path='/FerreroRocher' element={<FerreroRocher />} />
          <Route path='/NerdGummyCluster' element={<NerdGummyCluster />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
