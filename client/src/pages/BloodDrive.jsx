import React from 'react';

const BloodDrive = () => {
  const bloodDrives = [
    {
      date: 'June 20, 2024',
      location: 'Community Center, 123 Main St, Cityville',
      time: '10:00 AM - 2:00 PM',
    },
    {
      date: 'July 15, 2024',
      location: 'High School Gym, 456 School St, Townsville',
      time: '9:00 AM - 1:00 PM',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Upcoming Blood Drives</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bloodDrives.map((drive, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900">{drive.date}</h2>
              <p className="mt-2 text-lg text-gray-600">{drive.location}</p>
              <p className="mt-1 text-lg text-gray-600">{drive.time}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sign Up for a Blood Drive</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="date" className="block text-lg font-medium text-gray-700">
                Preferred Date
              </label>
              <select
                id="date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              >
                {bloodDrives.map((drive, index) => (
                  <option key={index} value={drive.date}>
                    {drive.date}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:w-auto"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BloodDrive;
