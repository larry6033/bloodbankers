import { useLocation, Link } from "react-router-dom";

function HeroPage() {
  const location = useLocation();
  const message = location.state?.message;

  return (
    <div className="container mx-[auto] my-[6em] flex justify-between">
      <div className="w-[50%]  my-[6em]">
        <h1 className="text-[3em] text-[red] ">Blood donation can be fun</h1>
        <p className="text-[1.5em] my-[3em] text-[blue] ">
          We want to walk this journey with you.
        </p>
        {message && (
          <p className="text-green-500 font-bold mb-4 text-[2em]">{message}</p>
        )}
        <div className="flex gap-[3em]">
          <Link to="/donorsignup">
            <button className="bg-blue-500 px-[3em] py-[1em] rounded-[10px] text-[red]">
              Donor
            </button>
          </Link>
          <Link to="/hospital">
            <button className="bg-blue-500 px-[3em] py-[1em] rounded-[10px] text-[red]">
              Hospital
            </button>
          </Link>
        </div>
      </div>
      <div>
        <img src="src/assets/images/slider-1.png" alt="Slider" />
      </div>
    </div>
  );
}

export default HeroPage;
