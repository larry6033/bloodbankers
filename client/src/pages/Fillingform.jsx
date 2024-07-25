import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FillingForm() {
  
  const [bloodGroup, setBloodGroup] = useState("");
  const navigate = useNavigate();

  let token = localStorage.getItem("access_token");

  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    weight: "",
    Last_date_donating: "",
    occupation: "",
    birthday: "",
    address: "",
    bloodgroup: "",
  });
  const handleSubmit = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // "occupation","phonenumber","address","birthday" ,"weight","Last_date_donating","bloodgroup"
  const addData = (e) => {
    // setErrorMessage("");
    // const {
    //   weight,
    //   Last_date_donating,
    //   occupation,
    //   birthday,
    //   bloodgroup,
    //   address,
    // } = formData;

    // if (
    //   !weight ||
    //   !Last_date_donating ||
    //   !occupation ||
    //   !birthday ||
    //   !bloodgroup ||
    //   !address
    // ) {
    //   setErrorMessage("Kindly fill all the fields");
    //   return;
    // }
    //  else{
   
    e.preventDefault();
    console.log(formData);
    const url = "http://127.0.0.1:8000/api/donor/";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    };

    fetch(url, options)
      .then((res) => {
        // console.log(res)
        // if (!res.ok) {
        //   return res.json().then((tell) => {
        //     setErrorMessage(tell["occupation"][0]);
        //     console.log(tell);
        //   });
        return res.json();
        // }
      })
      .then((data) => {
        console.log(data);
        navigate("/", {
          state: { message: `${first_name}You have participated successfully in our mission to change lives for the better` },
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // }

  return (
    <div className="max-w-md mx-auto bg-blue-100 p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center text-[red]">
        Donor Form
      </h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-1 text-[red]"
            htmlFor="name"
          >
            address:
          </label>
          <input
            name="address"
            type="text"
            onChange={handleSubmit}
            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
            // required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-1 text-[red]"
            htmlFor="email"
          >
            Occupation:
          </label>
          <input
            // type="email"
            name="occupation"
            onChange={handleSubmit}
            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
            // required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-1 text-[red]"
            // htmlFor="bloodGroup"
          >
            Blood Group:
          </label>
          <input
            name="bloodgroup"
            onChange={handleSubmit}
            // type="tel"
            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
            // required
          />

          {/* <select
            name="bloodgroup"
            onChange={(e) => setBloodGroup(e.target.value)}
            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
            // required
          >
            <option value="">Select</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select> */}
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-1 text-[red]"
            htmlFor="phoneNumber"
          >
            weight:
          </label>
          <input
            name="weight"
            onChange={handleSubmit}
            type="tel"
            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
            // required
          />
          <label
            className="block text-sm font-bold mb-1 text-[red]"
            htmlFor="phoneNumber"
          >
            DOB:
          </label>
          <input
            name="birthday"
            onChange={handleSubmit}
            type="date"
            // required
            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
          />

          <label
            className="block text-sm font-bold mb-1 text-[red]"
            htmlFor="phoneNumber"
          >
            Last date donating:
          </label>
          <input
            name="Last_date_donating"
            onChange={handleSubmit}
            type="date"
            // required
            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          onClick={addData}
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FillingForm;
