import React, { useState } from "react";
import axios from "axios";

export default function AddDriver() {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [NIC, setNIC] = useState("");
  const [vehinumber, setvehinumber] = useState("");
  const [phone, setphone] = useState("");

  const phoneRegex = /^[0-9]{10}$/; //regex for 10 digit phone number

  function setData(e) {
    e.preventDefault();

    // Validate phone number
    if (!phoneRegex.test(phone)) {
      alert("Invalid phone number!");
      return;
    }

    const newDriver = {
      name,
      age,
      gender,
      NIC,
      vehinumber,
      phone
    }

    axios.post("http://localhost:8070/drivers/add", newDriver)
      .then(() => {
        alert("Driver added!")
        setName("");
        setAge("");
        setGender("");
        setNIC("");
        setvehinumber("");
        setphone("");
        window.location = "/";
      }).catch((err) => {
        alert(err)
      })

    console.log(newDriver);

  }


  return (
    <div className="container">
      <form onSubmit={setData}>
        <div className="form-group">
          <label htmlFor="Drivername">Driver's name </label>
          <input type="text" className="form-control" id="Drivername" required placeholder="Enter name "
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }} />

        </div>

        <div className="form-group">
          <label htmlFor="age">Age </label>
          <input type="number" className="form-control" id="age" required placeholder="Enter Age "
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }} />

        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender </label>
          <input type="text" className="form-control" id="gender" required placeholder="Enter Gender "
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }} />
        </div>

        <div className="form-group">
          <label htmlFor="NIC">NIC Number </label>
          <input type="text" className="form-control" id="NIC" required placeholder="Enter NIC Number "
            value={NIC}
            onChange={(e) => {
              setNIC(e.target.value);
            }} />
        </div>

        <div className="form-group">
          <label htmlFor="vehinumber">Vehicle Number </label>
          <input type="text" className="form-control" id="vehinumber" required placeholder="Enter Vehicle Number "
            value={vehinumber}
            onChange={(e) => {
              setvehinumber(e.target.value);
            }} />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number </label>
          <input type="tel" className="form-control" id="phone" required placeholder="Enter Phone Number "
            value={phone}
            onChange={(e) => {
              setphone(e.target.value);
            }}
            pattern="[0-9]{10}" // set pattern attribute to validate input with regex
          />
        </div>






        <button type="submit" className="btn btn-success" to="/">Submit</button>

      </form>
    </div>
  )
} 