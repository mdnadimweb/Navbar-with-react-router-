import React, { useState } from "react";
import { useForm } from "react-hook-form";

function FormHook() {
  const { register, handleSubmit } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onsubmit = (data) => {
    setSubmittedData(data);
    console.log(data);
  };

  return (
    <>
      <div className="form_main">
        <form onSubmit={handleSubmit(onsubmit)} action="#">
          <h1>Contact Us</h1>

          <div className="input">
            <label>Name:</label>
            <input {...register("name")} type="text" placeholder="Enter name" />
          </div>

          <div className="input">
            <label>Email:</label>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter email"
            />
          </div>

          <div className="input">
            <label>Password:</label>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter password"
            />
          </div>

          <div className="button_form">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      {submittedData && (
        <div className="submitted-data mt-4">
          <h2>Submitted Data:</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </>
  );
}

export default FormHook;
