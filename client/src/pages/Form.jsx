import React, { useEffect, useState } from "react";

function Form({ id }) {
  const [donor, setDonor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDonorDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/donors/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch donor details");
        }
        const data = await response.json();
        setDonor(data);
      } catch (error) {
        console.error("Error fetching donor details:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDonorDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Donor Details</h1>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Donor Details</h1>
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Donor Details</h1>
      {donor && (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {donor.first_name} {donor.last_name}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{donor.email}</p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{donor.phonenumber}</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Occupation</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{donor.occupation}</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{donor.address}</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Birthday</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{donor.birthday}</dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;





  