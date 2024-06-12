import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="text-center lg:text-left lg:w-2/3">
            <h1 className="text-4xl font-bold text-gray-900">Be a Hero: Join Our Journey of Saving Lives</h1>
            <p className="mt-4 text-xl text-gray-600">Blood donation can be fun! We want to walk this journey with you.</p>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:w-auto"
              >
                Upcoming Blood Drives
              </button>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900">Our Impact</h2>
              <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="flex-grow">
                  <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-center items-center">
                    <p className="text-3xl font-bold text-blue-600">2,000</p>
                    <p className="mt-2 text-lg text-gray-600">Lives Touched</p>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-center items-center">
                    <p className="text-3xl font-bold text-blue-600">1,500</p>
                    <p className="mt-2 text-lg text-gray-600">Registered Donors</p>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-center items-center">
                    <p className="text-3xl font-bold text-blue-600">30</p>
                    <p className="mt-2 text-lg text-gray-600">Hospitals Supported</p>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-center items-center">
                    <p className="text-3xl font-bold text-blue-600">10</p>
                    <p className="mt-2 text-lg text-gray-600">Counties</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-between gap-4">
              <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/2">
                <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
                <p className="mt-2 text-lg text-gray-600">
                  To deliver high-quality, reliable, and practical technology services in blood and related healthcare management. We aim to improve outcomes by utilizing management information systems that streamline workflows and enable real-time information sharing.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/2">
                <h2 className="text-2xl font-semibold text-gray-900">Our Vision</h2>
                <p className="mt-2 text-lg text-gray-600">
                  To create a more efficient and cleaner data recording process for donor details and hospital records, significantly reducing the workload associated with paper-based storage.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:w-1/3 lg:flex lg:justify-end">
            <img src="/src/assets/images/5.png" className="w-[500px] h-[400px] lg:w-full size-[400px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
