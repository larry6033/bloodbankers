import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Welcome to our blood donation website! We are dedicated to saving lives by connecting donors with those in need. Our mission is to make blood donation convenient, safe, and accessible to everyone.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At our center, we prioritize the well-being of both donors and recipients. We adhere to strict safety and hygiene standards to ensure a smooth and risk-free donation process. Our team of trained professionals is committed to providing a comfortable and positive experience for every donor.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Whether you're a first-time donor or a regular contributor, your generosity makes a difference. Every donation counts and has the potential to save lives. Join us in our mission to make a meaningful impact on the health and well-being of our community.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Thank you for considering donating blood and for supporting our cause. Together, we can make a difference!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
