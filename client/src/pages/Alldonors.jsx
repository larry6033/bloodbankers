import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Alldonors() {
  const [donors, setDonors] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   async function fetchDonors() {
  //     try {
  //       const response = await fetch("http://127.0.0.1:8000/api/donors/");
  //       // method: "POST",
  //       // headers: {
  //       //   "Content-Type": "application/json",
  //       // },
  //       // body: JSON.stringify(formData),
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch donors");
  //       }
  //       const data = await response.json();
  //       setDonors(data);
  //     } catch (error) {
  //       console.error("Error fetching donors:", error.message);
  //     }
  //   }
  //   fetchDonors();
  // }, []);


  const url = "http://127.0.0.1:8000/api/donors/";
  // const hospitalurl = "http://127.0.0.1:8000/api/hospitallogin/";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  fetch(url, options)
    .then((res) => {
      //  console.log(res)
      if (!res.ok) {
        return res.json().then((tell) => {
          setErrorMessage(tell.message);
          console.log(tell);
        });
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      if (data !== undefined) {
        navigate("/alldonors");
      }
      
    })
    .catch((err) => {
      console.log(err);
    });


  const handleDonorClick = (id) => {
    navigate(`/donor/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Donors</h1>
      <ul className="divide-y divide-gray-200">
        {donors.map((donor) => (
          <li key={donor.id} className="py-2" onClick={() => handleDonorClick(donor.id)}>
            <div className="flex items-center justify-between cursor-pointer">
              <div>
                <h2 className="text-lg font-semibold">{donor.first_name} {donor.last_name}</h2>
                <p className="text-gray-500">{donor.email}</p>
              </div>
              <div>
                <p className="text-gray-500">Phone: {donor.phonenumber}</p>
                <p className="text-gray-500">Occupation: {donor.occupation}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Alldonors;
