import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

export default function AllDrivers() {

  const [search, setSearch] = useState('');
  console.log(search)

  const PDF = useRef();


  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    function getDrivers() {
      axios.get("http://localhost:8070/drivers/")
        .then((res) => {
          console.log(res);
          setDrivers(res.data);

        }).catch((err) => {
          alert(err.message);
        })
    }
    getDrivers();


  }, [])

  const generatePDF = useReactToPrint({
    content: () => PDF.current,
    documentTitle: "Driverdata",
    onAfterPrint: () => alert("Data save in PDF")

  })


  function deleteDriver(id) {
    axios.delete(`http://localhost:8070/drivers/delete/${id}`)
      .then((res) => {
        alert('Driver deleted successfully');
        setDrivers(drivers.filter(driver => driver._id !== id));
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <div>

      <br/><h5>All Drivers</h5><br />
      <div className="text-right">
      <Link to="/addDriver" className="btn btn-success">Add New Drivers</Link><br />
      </div>


      <div className="navbar navbar-light bg-light justify-content-between">
      <button className="btn btn-outline-secondary" onClick={generatePDF}>Download Report</button>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>



      <div ref={PDF} style={{ width: '100%' }} >
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>NIC</th>
              <th>Vehicle Number</th>
              <th>Phone Number</th>

            </tr>
          </thead>
          <tbody className="table table-striped">
            {drivers.filter((driver) => {
              return search.toLowerCase() === '' ?
                driver : driver.NIC.toLowerCase().includes(search);
            }).map((driver) => (
              <tr key={driver._id}>
                <td>{driver.name}</td>
                <td>{driver.age}</td>
                <td>{driver.gender}</td>
                <td>{driver.NIC}</td>
                <td>{driver.vehinumber}</td>
                <td>{driver.phone}</td>
                <td> <Link to={`/update/${driver._id}`} className="btn btn-primary"><i className="fas fa-edit"></i>&nbsp;Edit</Link><a href="#" className="btn btn-danger" onClick={() => deleteDriver(driver._id)}>Delete</a></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <button type="submit" className="btn btn-success">Add New Driver</button> */}

    </div>
  );

}

