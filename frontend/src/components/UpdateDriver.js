import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UpdateDriver() {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    age: "",
    gender: "",
    vehinumber: "",
    phone: ""




  });



  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8070/drivers/get/${id}`);
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        alert(error.message);
      }
    };
    loadUser();
  }, [id]);

  const { name, age, gender, NIC, vehinumber, phone } = user;


  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8070/drivers/update/${id}`, user);
      setUser(response.data);
      alert("Driver Details Updated")

      window.location = "/";
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="container">


      <p></p>
      <b><font size="4">Update Driver details</font></b>
      <p></p>
      <form onSubmit={onSubmit}>

        <label for="name">Driver's name </label>
        <input type="text" className="form-control" id="Drivername" required placeholder={name}
          onChange={(e) => {
            onInputChange(e);
          }} />


        <div className="form-group">
          <label for="name">Age </label>
          <input type="number" className="form-control" id="age" required placeholder={age}
            onChange={(e) => {
              onInputChange(e);
            }} />


        </div>

        <div className="form-group">
          <label for="name">Gender</label>
          <input type="text" className="form-control" id="gender" required placeholder={gender}
            onChange={(e) => {
              onInputChange(e);
            }} />
        </div>

        <div className="form-group">
          <label for="name">NIC</label>
          <input type="text" className="form-control" id="NIC" required placeholder={NIC}
            onChange={(e) => {
              onInputChange(e);
            }} />
        </div>


        <div className="form-group">
          <label for="name">Vehicle number</label>
          <input type="text" className="form-control" id="vehinumber" required placeholder={vehinumber}
            onChange={(e) => {
              onInputChange(e);
            }} />
        </div>
        <div className="form-group">
          <label for="name">Phone Number</label>
          <input type="number" className="form-control" id="phone" required placeholder={phone}
            onChange={(e) => {
              onInputChange(e);
            }} />
        </div>



        <button type="submit" className="btn btn-warning">
          <i className="fas fa-edit"></i>&nbsp;Update 
        </button><p></p>
      </form>

    </div>

  );
}

