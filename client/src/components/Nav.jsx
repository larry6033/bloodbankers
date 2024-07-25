import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
5
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex items-center gap-8">
          <li>
            <Link to="/">
              <img
                src="/src/assets/images/1.png"
                className="h-14 w-auto relative z-10"
                alt="Logo"
              />
            </Link>
          </li>
          {!isLoggedIn && (
            <>
              <li className="hidden md:block">
                <Link to="/" className="text-blue-500 hover:text-red-600">
                  Home
                </Link>
              </li>
              <li className="hidden md:block">
                <Link to="/about" className="text-blue-500 hover:text-red-600">
                  About
                </Link>
              </li>
              <li className="hidden md:block">
                <Link to="/services" className="text-blue-500 hover:text-red-600">
                  Services
                </Link>
              </li>
            </>
          )}
        </ul>

        <div>
          {!isLoggedIn ? (
            <>
              <Link to="/donorsignup">
                <button className="mx-[2em]">Signup</button>
              </Link>
              <Link to="/login">
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
              </Link>
            </>
          ) : (
            <button onClick={handleLogout}>Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
