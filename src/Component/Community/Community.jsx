import { FaArrowRightLong } from "react-icons/fa6";
import logo from "../../../public/logo.png";

const Community = () => {
  return (
    <div className="lg:flex lg:gap-12 sm:ml-32 sm:items-center items-center mt-5 lg:mx-40 sm:mx-10">
      {/* Image Section */}
      <div className="bg-white rounded-lg h-[600px] w-[500px] sm:h-[400px] sm:w-[500px] flex items-center justify-center">
        <img
          src={logo}
          alt="Logo"
          className="h-full w-full object-cover rounded-xl"
        />
      </div>

      {/* Text Section */}
      <div className="sm:ml-2 py-15 mb-5 h-[500px] w-[500px] sm:h-[400px] sm:w-[500px] flex flex-col justify-center">
        <h2 className="text-xl font-semibold sm:text-5xl">
          Your Community for <br />
          Women Ready to Go <br />
          Abroad
        </h2>
        <p className="mt-4 sm:text-lg">
          We’re thrilled you found us! At Expat Global Girls, we <br /> empower
          women to pursue their dreams abroad. Our <br />
          platform connects women seeking housemates for <br /> international
          moves and trips, offering a safe, supportive <br /> community and a
          searchable directory to help you find the <br />
          perfect living companion. Join us to make your move abroad <br />
          affordable, achievable, and filled with support!
        </p>

        <button className="w-4/12 text-sm mt-4 flex justify-center items-center bg-blue-800 text-white rounded-lg py-3 font-semibold hover:bg-blue-700">
          Become a Member
          <span className="ml-2 mt-1">
            <FaArrowRightLong />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Community;
