import React, { useState, useEffect } from 'react';

function Singledonor({ id, donors, setDonors }) {
  // let {id} =  
  const [donor, setDonor] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDonor();

  }, []);
  const fetchDonor = () => {
    const url = "http://127.0.0.1:8000/api/donors/<id>/";
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
      setUpdate(token.donors)
  };



//   useEffect(() => {
//     const fetchDonor = async () => {
//       try {
//         const response = await fetch("http://127.0.0.1:8000/api/singledonor/", {
            
//         });
//         const options = {
//             method: "get",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify(formData),
//           };
//         if (!response.ok) {
//           throw new Error('Failed to fetch donor details');
//         }
//         const data = await response.json();
//         setDonor(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchDonor();
//   }, [donorId]);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!donor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{donors.owner.first_name}'s Profile</div>
        <p className="text-gray-700 text-base mb-4">
          <span className="font-semibold">Occupation:</span> {donors.occupation}
        </p>
        <p className="text-gray-700 text-base mb-4">
          <span className="font-semibold">Address:</span> {donors.address}
        </p>
        <p className="text-gray-700 text-base mb-4">
          <span className="font-semibold">Birthday:</span> {donors.birthday}
        </p>
        <p className="text-gray-700 text-base mb-4">
          <span className="font-semibold">Weight:</span> {donors.weight} kg
        </p>
        <p className="text-gray-700 text-base mb-4">
          <span className="font-semibold">Last Date Donated:</span> {donors.Last_date_donating}
        </p>
        <p className="text-gray-700 text-base mb-4">
          <span className="font-semibold">Blood Group:</span> {donors.bloodgroup}
        </p>
      </div>
    </div>
  );
}

export default Singledonor;
