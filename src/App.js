import './App.css';
import Header from './components/Header';
import AddDriver from "./components/AddDriver"
import AllDrivers from './components/AllDrivers';
import UpdateDriver from './components/UpdateDriver';
import Cod from './components/ComfirmOrder';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// import UpdateEmployee from './components/UpdateEmployee';



function App() {
  return (

    <div className="container">
      <h2><center>Delivery & Tracking</center></h2>

      <Header />

      <Routes>

        <Route path="/addDriver" exact element={<AddDriver />}></Route>
        <Route path="/" exact element={<AllDrivers />}></Route>
        <Route path="/update/:id" element={<UpdateDriver />}></Route>
        <Route path="/comfirmOrder" element={<Cod />}></Route>


      </Routes>

    </div>


  );
}

export default App;