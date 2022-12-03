import React, { useState } from "react";
const Form = () => {
  var ddetail = {
    Name: "",
    Brand: "",
    Date: "",
    Event_des: "",
  };

  const [details, setDetails] = useState(ddetail);

  // const name = document.getElementById('txtName');
  // const age = document.getElementById('txtAge');
  // const email = document.getElementById('txtEmail');
  // const msg = document.getElementById('msg');

  function submitted(e) {
    const name = document.getElementById("floating_event_name");
    const brand = document.getElementById("floating_brand_name");
    const date = document.getElementById("txtEmail");
    const msg = document.getElementById("msg");
    ddetail = {
      Name: name.value,
      Brand: brand,
      Date: date,
      Event_des: msg,
    };
    setDetails(ddetail);
    console.log(details.Name); //ye nahi ho raha
  }
  return (
    <form className="bg-gray-400 my-12 mx-auto p-8 lg:w-8/12 rounded-lg border-2 border-gray-800 z-50">
		
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="floating_event_name"
            id="floating_event_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_event_name"
            className="peer-focus:font-medium absolute text-sm text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Event name</label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="floating_brand_name"
            id="floating_brand_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_brand_name"
            className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Brand name
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group date datepicker">
          <input
            type="date"
            name="floating_date"
            datepicker
            id="floating_date"
            className="block py-2.5 px-0 w-full  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer form-control rounded"
            placeholder="dd/mm/yyyy"
            required
          />
          <label
            htmlFor="floating_date"
            className=" peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Date of the event{" "}
          </label>
        </div>
      </div>

      <div className="relative z-0 mb-6 w-full group">
        Event Description
		<div className="relative bg-gray-500 mt-4 rounded-lg py-4 px-8 border-solid border-gray-500 border-2">
        <div className="relative z-0 mb-6 w-8/12 group">
          <input
            type="number"
            name="floating_duration"
            id="floating_duration"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label htmlFor="floating_duration"
            className="absolute peer-focus:font-medium text-sm text-gray-100 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          > Duration
          </label>
        </div>
		<div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="floating_brand_name"
            id="floating_brand_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_brand_name"
            className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Brand name
          </label>
        </div>
		</div>
		</div>
      </div>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={submitted}
        onSubmit={(e) => e.preventDefault()}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
