import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import logo from '../../../logos/logo.png'
import { useParams } from "react-router-dom";
import './VolunteerRegister.css'
import useAuth from '../../../Hooks/useAuth';
import { toast } from 'react-toastify';
import { Form, FormGroup } from 'react-bootstrap';


const VolunteerRegister = () => {
  const { ServiceId } = useParams()
  const [singleService, setSingleService] = useState({})
  const { user } = useAuth();

  useEffect(() => {
    fetch(
      `https://serene-tor-46581.herokuapp.com/services/${ServiceId}`
    ).then(res => res.json()).then(data => {
      console.log(data);
      setSingleService(data)
    })
  }, [])


  console.log(ServiceId);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data["Full_Name"] = user?.displayName;
    data["Email"] = user?.email;
    data["service_Name"] = singleService?.serviceName;
    data["Price"] = singleService?.Price;
    data["img"] = singleService?.img;
    console.log(data);

    fetch("https://serene-tor-46581.herokuapp.com/v_register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Your Booking Registration Successfull!");
          reset();
        }
      });
  }
  return (
    <div className="py-5 my-5">
      <div>
        <img src={logo} alt="" className="img-fluid w-25" />
      </div>
      <div className=" v_width border border-3 mx-auto mt-5">
        <h4 className="fw-bold pt-4">Book A Package</h4>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-column w-75 mx-auto my-4 pb-4 v_register"
        >

          <Form.Label>Full name: <input {...register("Full_Name")} value={user.displayName || ""} /></Form.Label>

          <Form.Label>Email Address: <input {...register("Email")} value={user.email || ""} /></Form.Label>

          <Form.Label>Package Name: <input
            {...register("service_Name")}
            value={singleService.serviceName || ""}
          /></Form.Label>

          <Form.Label>Price:  <input
            {...register("Price")}
            value={singleService.Price || ""}
          /></Form.Label>

          <Form.Label>Phone:  <input
            {...register("Phone")}
            placeholder="0171000000"
          /></Form.Label>

          <Form.Label>Booking Date: <input {...register("Date")} type="date" required /></Form.Label>

          <Form.Label>Full Address:<input
            {...register("Description")}
            placeholder="Address"
          /></Form.Label>


          <button className="btn btn-danger my-4">Confirm Book</button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerRegister;