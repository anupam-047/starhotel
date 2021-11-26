import React from 'react';
import V_register_list from './V_register_list/V_register_list';
import AddService from './AddService/AddService'
import ManageService from './ManageService/ManageService';
const Admin = () => {
    const [volunteer, setVolunteer] = React.useState("Package Booking list");

    const handleVolunteerRegister = (e) => {
        // console.log(e.target.innerText);
        setVolunteer(e.target.innerText);
    }
    const handleAddService = (e) => {
        // console.log(e.target.innerText);
        setVolunteer(e.target.innerText);
    };
// console.log(volunteer);
    return (
      <div className="mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 ">
              <ul className="list-unstyled text-start fw-bold">
                <li
                  onClick={handleVolunteerRegister}
                  style={{ cursor: "pointer", padding: "10px" }}
                  className={
                    volunteer === "Package Booking list" && "selected"
                  }
                >
                  <i className="fas fa-users me-2 "></i>Package Booking list
                </li>
                <li
                  onClick={handleAddService}
                  style={{ cursor: "pointer", padding: "10px" }}
                  className={volunteer === "Manage Service" && "selected"}
                >
                  <i className="fas fa-minus me-2"></i>Manage Service
                </li>
                <li
                  onClick={handleAddService}
                  style={{ cursor: "pointer", padding: "10px" }}
                  className={volunteer === "Add Service" && "selected"}
                >
                  <i className="fas fa-plus me-2"></i>Add Service
                </li>
              </ul>
            </div>
            <div className="col-lg-9">
              {(volunteer === "Package Booking list" && (
                <V_register_list />
              )) ||
                (volunteer === "Add Service" && <AddService />) ||
                (volunteer === "Manage Service" && <ManageService />)}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Admin;