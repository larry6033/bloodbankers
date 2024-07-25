import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Alldonors() {
  const [donors, setDonors] = useState([]);
  const [update, setUpdate] = useState([]);

  const navigate = useNavigate();
  let token = localStorage.getItem("access_token");
  useEffect(() => {
    fetchDonors();

  }, []);
  const fetchDonors = () => {
    const url = "http://127.0.0.1:8000/api/donors/";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDonors(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
      // setUpdate(token.donor)
  };
  

  const handleDonorClick = (id) => {
    // navigate('/singledonor')
    navigate(`/singledonor/${id}/`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Donors</h1>
      <ul className="divide-y divide-gray-200">
        {donors.map((donor) => (
          <li
            key={donor.id}
            className="py-2"
            onClick={() => handleDonorClick(donor.id)}
          >
            <div className="flex items-center justify-between cursor-pointer">
              <div>
                <h2 className="text-lg font-semibold">
                  FullName: {donor.first_name} {donor.last_name}
                </h2>

                <p className="text-gray-500">Email: <span className="text-black">{donor.email}</span> </p>
                
                <p className="text-gray-500">Birthday: <span className="text-black">{donor.birthday}</span></p>
                <p className="text-gray-500">
                  Last Donation Date:
                   {donor.last_date_donating}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Weight: <span className="text-black">{donor.weight}</span></p>

                <p className="text-gray-500">Blood Group: <span className="text-black">{donor.bloodgroup}</span> </p>
                <p className="text-gray-500">Occupation: <span className="text-black">{donor.occupation}</span></p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Alldonors;
