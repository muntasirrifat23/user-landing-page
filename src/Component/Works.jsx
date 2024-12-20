import work1 from "../../public/w1.png";
import work2 from "../../public/w2.png";
import work3 from "../../public/w3.png";
import work4 from "../../public/w4.png";

const Works = () => {
  return (
    <div className="bg-white py-20 mt-10 px-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
        <p className="text-gray-600 mb-8">
          Search and find other travelers heading to the same destination.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between gap-20 lg:mt-20 lg:mx-40 mx-20">
        {/* Left Section */}
        <div className="flex flex-col justify-between md:items-start h-full lg:w-1/2">
          {/* Step 1 */}
          <div className="flex items-start mb-12 h-full">
            <div className="flex flex-col md:items-start md:text-left">
              <h3 className="text-xl font-semibold text-gray-800">
                Plan Your Trip
              </h3>
              <p className="text-gray-600 mt-2">
                Start by setting your travel dates, destinations, and <br />
                preferences. This helps you tailor your search for <br />
                housemates who align with your journey.
              </p>
              <img
                src={work1}
                alt="Plan Your Trip"
                className="w-40 h-40 mt-4 mx-auto"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start h-full">
            <div className="flex flex-col md:items-start md:text-left">
              <h3 className="text-xl font-semibold text-gray-800">
                Connect and Build Relationships
              </h3>
              <p className="text-gray-600 mt-2">
                Send messages, ask questions, and get to know potential <br />
                housemates before committing. Building rapport ensures <br />
                a comfortable and trusted connection for your shared <br />
                journey.
              </p>
              <img
                src={work3}
                alt="Connect"
                className="w-40 h-40 mt-4 mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col lg:mt-10 items-center">
          {/* Step 1 */}
          <div className="relative flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center font-bold text-lg">
              1
            </div>
            <div className="h-16 lg:h-28 border-l-4 border-dashed border-blue-500"></div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center font-bold text-lg">
              2
            </div>
            <div className="h-16 lg:h-28 border-l-4 border-dashed border-blue-500"></div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center font-bold text-lg">
              3
            </div>
            <div className="h-16 lg:h-28 border-l-4 border-dashed border-blue-500"></div>
          </div>

          {/* Step 4 */}
          <div className="relative flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-2 border-blue-500  flex items-center justify-center font-bold text-lg">
              4
            </div>
          </div>
        </div>

        {/* Right Section*/}
        <div className="flex flex-col justify-between items-center md:items-start h-full lg:w-1/2">
          {/* Step 2 */}
          <div className="flex items-start mb-12 h-full">
            <div className="flex flex-col md:items-start md:text-left">
              <img
                src={work2}
                alt="Matching Profiles"
                className="w-40 h-40 mt-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Explore Matching Profiles
              </h3>
              <p className="text-gray-600 mt-2">
                Browse through profiles of like-minded women who <br />
                are traveling to similar locations. You can filter results{" "}
                <br />
                based on your travel dates, needs, and values.
              </p>
            </div>
          </div>

          <div className="flex items-start h-full">
            <div className="flex flex-col md:items-start  md:text-left">
              <img
                src={work4}
                alt="Secure Plans"
                className="w-40 h-40 mt-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Secure Your Plans & Enjoy the Journey
              </h3>
              <p className="text-gray-600 mt-2">
                Once you’ve found the right housemate, finalize your <br />
                arrangements with confidence. With a trusted <br />
                companion, you can travel with peace of mind and <br />
                enjoy every moment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
