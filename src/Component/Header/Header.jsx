import "./Header.css";
import logo from "../../../public/logo.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  return (
    <div
      id="header"
      className="relative bg-cover bg-center h-[900px] "
      style={{
        backgroundImage: `url('../../../public/Background.jpeg')`,
      }}
    >
      <div className="absolute inset-0 bg-slate-500 bg-opacity-50"></div>
      <p className="text-white">.</p>
      {/* Navbar */}
      <div className="navbar flex items-center justify-between bg-white bg-opacity-30 backdrop-blur rounded-xl p-4 shadow-md mx-10">
        <img src={logo} alt="Logo" className="h-20 w-28" />
        <p className="font-bold text-xl text-blue-800 bg-white p-1 px-4 rounded-md">
          Log in
        </p>
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 p-8 pt-16 max-w-7xl mx-auto">
        {/* Left Text Section */}
        <div className="text-left lg:w-1/2">
          <h1 className="lg:text-6xl text-4xl font-bold text-white leading-tight">
            The Premier <br />
            Co-living Travel <br />
            Network for Women
          </h1>
          <div className="flex items-center mt-4 font-semibold">
            <hr className="border-t-2 border-white w-8 mr-4 -mt-6" />
            <p className="lg:text-lg text-white">
              Find your perfect housemate, <br /> move faster, stay longer, and
              travel with confidence.
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="flex flex-col backdrop-blur items-center justify-between bg-white bg-opacity-40 rounded-lg p-8 shadow-lg lg:max-w-4xl max-w-xl w-full lg:w-1/2">
          <h2 className="text-2xl text-white font-bold mb-4">
            Sign up with email
          </h2>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="bold text-white">First name</p>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="border rounded-lg px-4 py-2 w-full placeholder:text-[#f7f7f7] text-white bg-transparent focus:outline-none"
                />
              </div>
              <div>
                <p className="bold text-white">Last name</p>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="border rounded-lg px-4 py-2 w-full placeholder:text-[#f7f7f7] text-white bg-transparent focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-4">
              <p className="bold text-white">Email address</p>
              <input
                type="email"
                placeholder="Enter your email address"
                className="border rounded-lg px-4 py-2 w-full placeholder:text-[#f7f7f7] text-white bg-transparent focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <p className="bold text-white">Password</p>
              <input
                type="password"
                placeholder="Enter your password"
                className="border rounded-lg px-4 py-2 w-full placeholder:text-[#f7f7f7] text-white bg-transparent focus:outline-none"
              />
            </div>
            <p className="text-sm text-white mt-2 text-center font-semibold">
              You are already a member
              <a href="#" className="text-white underline font-semibold ml-2">
                log in
              </a>
            </p>
            <div className="flex">
              <button className="w-full mt-4 flex justify-center items-center bg-blue-600 text-white rounded-lg px-6 py-2 font-semibold hover:bg-blue-700">
                Sign up
                <span className="ml-2 mt-1">
                  <FaArrowRightLong />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
