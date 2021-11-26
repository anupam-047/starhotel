import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Spinner } from "react-bootstrap";
import { toast } from 'react-toastify';
import swal from "sweetalert";

const V_register_list = () => {
  const [members, setMembers] = React.useState([])
  const [isSpinner, setIsSpinner] = React.useState(true)
  useEffect(() => {
    setIsSpinner(true);
    setTimeout(() => {
      fetch("https://serene-tor-46581.herokuapp.com/members")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setMembers(data);
          setIsSpinner(false);
        });
    });
  }, [])
  const handleMemberDelete = (id) => {
    const singleMember = members.find((member) => member._id === id);
    // console.log(singleMember);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(
          `https://serene-tor-46581.herokuapp.com/volunteerDelete/${id}`,
          {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(singleMember),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount === 1) {
              const restItem = members.filter((member) => member._id !== id);
              setMembers(restItem);
              toast.success("Booking Deleted Successfully");
            }
          });
      }
      
    })
  }
    return (
      <div className="my-5">
        {isSpinner ? (
          <Spinner animation="grow" variant="danger" />
        ) : (
          <div>
            <h3 className="text-start pb-4">Package Booking list-</h3>

            <div className="text-start">
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Price</th>
                    <th>Booking Date</th>
                    <th>Package list</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {members.map((member) => (
                  <tbody key={member?._id}>
                    <tr>
                      <td>{member?.Full_Name}</td>
                      <td>{member?.Email}</td>
                      <td>{member?.Phone}</td>
                      <td>{member?.Price}</td>
                      <td>{member?.Date}</td>
                      <td>{member?.service_Name}</td>
                      <td>
                        <button
                          className="btn text-danger"
                          onClick={() => handleMemberDelete(member?._id)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </div>
          </div>
        )}
      </div>
    );
};

export default V_register_list;