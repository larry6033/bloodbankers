import React, { useEffect, useState } from "react";


function Donorboard({id}) {
    const [donor, setDonor] = useState(null);
 
    useEffect((id) => {
        const fetchDonorProfile = async () => {
          try {
            const response = await fetch('http://127.0.0.1:8000/api/donorprofile/id/', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${
              },
            });
            if (response.ok) {
              const data = await response.json();
              setDonor(data);
            } else {
              console.error('Failed to fetch donor profile');
            }
          } catch (error) {
            console.error('Error fetching donor profile:', error);
          }
        };
    
        fetchDonorProfile();
      }, []);
    
    //   if (!donor) {
    //     return <div>Loading...</div>;
    //   }
    
  return (
    <div className="flex flex-col justify-center h-[70vh] items-center">
      {/* <li>{donor.firstname}</li> */}
        <div>
          <li>{donor.first_name}</li>
        <li>{donor.last_name}</li>
        <li>{donor.email}</li>
          {/* <li>{donor.firstname}</li>
 <li>{donor.firstname}</li>
 <li>{donor.firstname}</li>
 <li>{donor.firstname}</li> */}
        </div>;

      <button className=" px-[2em] bg-blue-500 text-white py-2  rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Donate Now
      </button>
    </div>
  );
}

export default Donorboard;
