// import { FaArrowRightLong } from "react-icons/fa6";
import { BsFastForwardFill } from "react-icons/bs";
import user from "../../public/user.png";
import { FaStar } from "react-icons/fa6";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

const Members = () => {
  return (
    <div className="py-10 mt-10">
      {/* Header Part */}
      <div className="flex items-center justify-center">
        <p className="text-center bg-slate-300 w-fit p-1 px-3 rounded-lg transform -rotate-12 mb-5">
          Testimonial
        </p>
      </div>
      <p className="text-4xl text-center font-bold text-gray-800 mb-2">
        What Our Members Say
      </p>
      <p className="text-gray-600 sm:text-sm mb-8 text-center font-semibold">
        Hear from women who share your passion for exploring new cultures,
        experience life abroad, and <br /> making the most of every opportunity.
      </p>

      {/* Main Flex Container */}
      <div className="lg:flex bg-white text-white lg:mx-40 mx-20 space-x-4">
        {/* Left Card */}
        <div className="bg-blue-600 rounded-xl -rotate-6 p-8 mb-4 flex-1 flex flex-col justify-between h-full">
          <div className="flex justify-between">
            <div>
              <img
                src={user}
                alt="User Image"
                className="w-16 h-16 rounded-full"
              />
            </div>
            <div className="text-lg font-semibold flex gap-1 items-center">
              <FaStar /> 5.0
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Sarah Thompson</h3>
            <p className="text-sm text-gray-200 mb-2 mt-2">
              Teacher · Non-Smoker · Married
            </p>
            <p className="text-sm text-gray-200">Silom, Bangkok</p>
            <p className="text-sm text-gray-200 mb-2 mt-2">Dec 3-8</p>
          </div>
        </div>

        {/* Right Card */}
        <div className="text-black rounded-xl p-8 flex-1 flex flex-col justify-between h-full text-2xl">
          <div className="flex justify-end gap-5">
            <HiArrowSmallLeft className="text-blue-600 border border-gray-300 rounded-lg px-2 py-0 text-4xl" />
            <HiArrowSmallRight className="text-blue-600 border border-gray-300 rounded-lg px-2 py-0 text-4xl" />
          </div>
          <div className="flex justify-start">
            <BsFastForwardFill />
          </div>
          <div className="text-gray-700 my-4">
            Our smart developers build innovative, efficient, <br /> and
            high-performance solutions. Efficient, and <br /> high-performance
            solutions. Efficient, and high- <br /> performance solutions.
          </div>
          <div className="flex justify-end">
            <BsFastForwardFill className="transform  rotate-180" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
