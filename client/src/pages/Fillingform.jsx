import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FillingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [lastDate, setLastdate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any validation or submit data to backend
    console.log("Form submitted:", { name, email, bloodGroup, phoneNumber });

    // Reset form fields
    setName("");
    setEmail("");
    setBloodGroup("");
    setPhoneNumber("");
    setLastdate("");

    // Navigate back to homepage with success message
    navigate("/", {
      state: { message: "You have participated successfully!" },
    });
  };

  return (
    <div className="max-w-md mx-auto bg-blue-100 p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center text-[red]">Donor Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1 text-[red]" htmlFor="name">
            Name:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1 text-[red]" htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1 text-[red]" htmlFor="bloodGroup">
            Blood Group:
          </label>
          <select
            id="bloodGroup"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
            required
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
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1 text-[red]" htmlFor="phoneNumber">
            Phone Number:
          </label>
          <input
            id="phoneNumber"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
            required
          />
           <label className="block text-sm font-bold mb-1 text-[red]" htmlFor="phoneNumber">
            Last date donating:
          </label>
          <input
            id="phoneNumber"
            type="date"
            value={lastDate}
            onChange={(e) => setLastdate(e.target.value)}
            required
            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FillingForm;
