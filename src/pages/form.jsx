import React from "react";

function Form() {
  return (
    <>
      <div className="form_main">
       
        <form action="#">
        <h1>contact us</h1>

         <div className="input">
         <label htmlFor="">Name : </label>
         <input type="text" placeholder="enter name " />
         </div>
        

          <div className="input">
          <label htmlFor="">Email : </label>
          <input type="email" placeholder="enter email " />
          </div>
        

          <div className="input">
          <label htmlFor="">password : </label>
          <input type="number " placeholder="enter password " />
          </div>

         <div className="button_form">
          <button type="submit">Submit</button>
         </div>




        </form>
      </div>
    </>
  );
}

export default Form;
