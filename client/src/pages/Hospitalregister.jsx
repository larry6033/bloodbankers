import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
function Hospitalsignup() {
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    hospital_name: "",
    contact_number: "",
    hospital_email: "",
    location: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleHospitalSignup(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // navigate("/login")
  }
  const getData = (e) => {
    setErrorMessage("");
    const {
      hospital_name,
      contact_number,
      hospital_email,
      location,
      password,
    } = formData;

    if (
      !hospital_name ||
      !contact_number ||
      !hospital_email ||
      !location ||
      !password
    ) {
      setErrorMessage("Kindly fill all the fields");
      return;
    } else {
      e.preventDefault();
      console.log(formData);
      const url = "http://127.0.0.1:8000/api/register/";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };

      fetch(url, options)
        .then((res) => {
          // console.log(res)
          if (!res.ok) {
            return res.json().then((tell) => {
              setErrorMessage(tell["hospital_email"][0]);
              console.log(tell);
            });
            // return res.json();
          }
          navigate("/login");
        })
        .then((data) => console.log(data))
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 space-y-8">
      <form className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-6 text-red-600">
            Hospital's signup form
          </h2>
          <p>Fill in this form and we will be in touch in a moment</p>
        </div>
        <div className="mb-4">
          <label className="block text-red-600">Hospital Name</label>
          <input
            type="text"
            name="hospital_name"
            onChange={handleHospitalSignup}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-red-600">Hospital Email</label>
          <input
            type="email"
            name="hospital_email"
            onChange={handleHospitalSignup}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-red-600">Contact Number</label>
          <input
            type="contact"
            name="contact_number"
            onChange={handleHospitalSignup}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-red-600">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleHospitalSignup}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-red-600">Location</label>
          <input
            type="password"
            name="location"
            onChange={handleHospitalSignup}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <p className="text-red-600">{errorMessage}</p>

      <Link to="/login">  <button
          onClick={getData}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign Up
        </button></Link>
      </form>
    </div>
  );
}
export default Hospitalsignup;
