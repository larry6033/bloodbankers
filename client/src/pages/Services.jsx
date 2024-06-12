import React from 'react';

const services = [
  {
    title: 'Blood Donation Drives',
    description: 'We organize regular blood donation drives at various locations to make it convenient for donors to contribute. Our team sets up camps at community centers, workplaces, schools, and other public spaces.',
    services: [
      'Mobile donation units',
      'Trained medical staff on-site',
      'Refreshments for donors',
      'Health check-ups prior to donation',
    ],
  },
  {
    title: 'Blood Bank Facilities',
    description: 'Our state-of-the-art blood bank facilities ensure that donated blood is safely stored and ready for those in need. We adhere to the highest standards of safety and hygiene.',
    services: [
      'Blood collection and storage',
      'Component separation (plasma, platelets, red cells)',
      'Blood typing and cross-matching',
      'Quality control and testing',
    ],
  },
  {
    title: 'Emergency Blood Donation',
    description: 'In emergency situations, quick access to blood can be life-saving. We provide a rapid response service to deliver blood to hospitals and patients in urgent need.',
    services: [
      '24/7 emergency hotline',
      'Rapid blood delivery',
      'Coordination with local hospitals and clinics',
      'Priority processing for urgent cases',
    ],
  },
  {
    title: 'Voluntary Donation Programs',
    description: 'We encourage voluntary, non-remunerated blood donations to maintain a safe and reliable blood supply. Our programs aim to educate and engage communities about the importance of regular blood donation.',
    services: [
      'Educational workshops and seminars',
      'Community outreach initiatives',
      'Recognition programs for regular donors',
      'Partnerships with local organizations and businesses',
    ],
  },
  {
    title: 'Donor Support and Counseling',
    description: 'We value our donors and provide support services to ensure a positive donation experience. Our counselors are available to address any concerns and provide necessary information.',
    services: [
      'Pre-donation counseling',
      'Post-donation follow-up',
      'Health and wellness advice',
      'Information on eligibility and donation frequency',
    ],
  },
  {
    title: 'Patient Assistance Programs',
    description: 'We assist patients in need of blood transfusions by connecting them with the necessary resources and support.',
    services: [
      'Patient advocacy',
      'Assistance in locating blood donors',
      'Coordination with healthcare providers',
      'Financial aid for blood-related treatments',
    ],
  },
  {
    title: 'Research and Development',
    description: 'We are committed to advancing the science of transfusion medicine through research and innovation. Our R&D department works on improving blood storage techniques, developing new donation methods, and enhancing blood safety.',
    services: [
      'Clinical research studies',
      'Collaboration with medical institutions',
      'Publication of findings in scientific journals',
      'Development of new technologies',
    ],
  },
  {
    title: 'Corporate and Community Partnerships',
    description: 'We collaborate with businesses, community groups, and other organizations to promote blood donation and support our initiatives.',
    services: [
      'Corporate blood donation programs',
      'Sponsorship and fundraising events',
      'Community engagement activities',
      'Volunteer opportunities',
    ],
  },
];

const Services = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      {services.map((service, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
          <p className="text-lg mb-4">{service.description}</p>
          <ul className="list-disc list-inside">
            {service.services.map((item, idx) => (
              <li key={idx} className="text-lg">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Services;
