import { Link } from "react-router-dom";

function Nav() {
    return (
        <>
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
                        <li className="hidden md:block">
                            <Link to="/" className="text-blue-500 hover:text-red-600">Home</Link>
                        </li>
                        <li className="hidden md:block">
                            <Link to="/about" className="text-blue-500  hover:text-red-600">About</Link>
                        </li>
                        <li className="hidden md:block">
                            <Link to="/products" className="text-blue-500 hover:text-red-600">Products</Link>
                        </li>
                        <li className="hidden md:block">
                            <Link to="/services" className="text-blue-500 hover:text-red-600">Services</Link>
                        </li>
                        <li className="hidden md:block">
                            <Link to="/blood drives" className="text-blue-500 hover:text-red-600">Blood Drives</Link>
                        </li>
                        <li className="hidden md:block">
                            <Link to="/signup" className="text-blue-500 hover:text-red-600">Signup</Link>
                        </li>
                        <li className="hidden md:block">
                            <Link to="/login" className="text-blue-500 hover:text-red-600">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div>
                {/* Any additional content can go here */}
            </div>
        </>
    );
}

export default Nav;
