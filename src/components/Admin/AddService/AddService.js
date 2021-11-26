import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        fetch("https://serene-tor-46581.herokuapp.com/addservice", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (result.insertedId) {
              toast("Service Add Successfully!!");
              reset();
            }
          });
        
        // console.log(data)
    };
    return (
      <div>
        <div className="container mb-5 pb-5">
          <h3 className="text-start pb-4">Add Service-</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="eventaddForm shadow-lg p-4">
            <div className="row text-start">
              <div className="col-md-6">
                <h6>Service Title</h6>
                <input {...register("serviceName")} placeholder="Title" />
                <h6>Service Description</h6>
                <textarea
                  {...register("Description")}
                  placeholder="Description"
                />
                 <h6>Service Price</h6>
                <input {...register("Price")} placeholder="Price" />
              </div>
              <div className="col-md-6">
                <h6>ServiceDate</h6>
                <input {...register("Date")} type="date" />

                <h6>Service Banner</h6>
                <input {...register("img")} placeholder="Image Link" />
              </div>
                    </div>
                    <button className='btn btn-danger text-end mb-4 fw-bold'>Add Service</button>
          </form>
        </div>
      </div>
    );
};

export default AddService;