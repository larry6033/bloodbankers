import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Loginregister() {
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleLogin(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  }
  const getData = (e) => {
    setErrorMessage("");
    const { email, password } = formData;

    if (!email || !password) {
      setErrorMessage("Kindly fill all the fields");
      return;
    } else {
      e.preventDefault();
      console.log(formData);

      const url = "http://127.0.0.1:8000/api/login/";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };

      fetch(url, options)
        .then((res) => {
          //  console.log(res)
          if (!res.ok) {
            return res.json().then((tell) => {
              setErrorMessage(tell.message);
              console.log(tell);
            });
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          if (data !== undefined) {
            navigate("/form");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // if email==!
  };
  // console.log(formData);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md ">
        <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
        <form className="mt-8 space-y-6 gap-4">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="">
              <label className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="relative block w-full px-3 py-2 border border-gray-300 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={handleLogin}
              />
            </div>
            <div>
              <label className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="relative block w-full px-3 py-2 border border-gray-300 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={handleLogin}
              />
            </div>
            <p className="text-red-600">{errorMessage}</p>

          </div>
          <div>
            <button
              onClick={getData}
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md group hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Loginregister;
