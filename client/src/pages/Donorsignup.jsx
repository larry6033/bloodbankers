import { useNavigate,Link } from "react-router-dom";
import { useState } from "react";

function DonorSignup() {
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleSignup(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // navigate("/login")
  }
  const getData = (e) => {
    setErrorMessage("");
    const { first_name, last_name, email, password } = formData;

    if (!first_name || !last_name || !email || !password) {
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
              setErrorMessage(tell["email"][0]);
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
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-6 text-red-600">
            Donors signup form
          </h2>
          <p>Fill in this form and we will be in touch immediately</p>
        </div>
        <div className="mb-4">
          <label className="block text-red-600">First Name</label>
          <input
            type="text"
            name="first_name"
            onChange={handleSignup}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-red-600">Last Name</label>
          <input
            type="text"
            name="last_name"
            onChange={handleSignup}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-red-600">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleSignup}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-red-600">Phone Number</label>
          <input
            type="tel"
            name="phonenumber"
            onChange={handleSignup}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-red-600">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleSignup}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* <div className="mb-6">
          <label className="block text-red-600">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleSignup}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> */}
        <div className="flex justify-center">
          {" "}
          <p className="text-red-600">{errorMessage}</p>
        </div>
        <Link to="/login">     <button
          onClick={getData}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign Up
        </button></Link>
      </div>
    </div>
  );
}
export default DonorSignup;
