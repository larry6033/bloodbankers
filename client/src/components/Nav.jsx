import { Link } from "react-router-dom";

function Nav() {
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
                        <li className="hidden md:block">
                            <Link to="/" className="text-blue-500 hover:text-red-600">Home</Link>
                        </li>
                        <li className="hidden md:block">
                            <Link to="/about" className="text-blue-500  hover:text-red-600">About</Link>
                        </li>
                        <li className="hidden md:block">
                            <Link to="/services" className="text-blue-500 hover:text-red-600">Services</Link>
                        </li>
                        {/* <li className="hidden md:block">
                            <Link to="/blood drives" className="text-blue-500 hover:text-red-600">Blood Drives</Link>
                        </li> */}
                      
                    </ul>

      <div >
      <Link to="/signup"><button className='mx-[2em]'>Signup</button></Link>  
      <Link to="/signup"><button>Login</button></Link>    
      </div>
                </div>
            </nav>

            // {/* <div>
                // {/* Any additional content can go here */}
    //         {/* </div>
   
    //   <img src="src/assets/images/1.png" className='w-[100px]' />
    //   <div>
    //     <ul className='flex justify-between gap-[2em]'>
    //       <li>Home</li>
    //       <li>About</li>
    //       <li>Services</li>
    //     </ul>
    //   </div>
    // </div> */} 
        
    );
}

export default Nav;
