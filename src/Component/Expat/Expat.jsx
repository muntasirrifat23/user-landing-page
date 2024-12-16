const Expat = () => {
  return (
      <div className=" lg:mx-36 px-6 mx-20">
        {/* Heading Part */}
        <div className="flex items-center justify-center ">
          <p className="text-center bg-slate-400 w-fit p-1 px-3 font-semibold rounded-lg transform -rotate-12 mb-5">
            Why Choose Us?
          </p>
        </div>
        <h2 className="text-4xl text-center font-bold text-gray-800 mb-2">
          Why Choose Expat Global Girls
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Empowering women to travel with confidence and ease worldwide
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Top Card */}
          <div
            className="p-8 shadow border border-blue-400 rounded-xl"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%)",
            }}
          >
            <div className="text-4xl text-blue-500 mb-3">🔑</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Affordable Housing
            </h3>
            <p className="text-gray-600">
              Save money and travel smarter by sharing <br /> accommodations
              with fellow members.
            </p>
          </div>

          {/* Right Top Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="border border-blue-400 rounded-xl p-8 shadow md:col-span-2 lg:w-full"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 75%)",
              }}
            >
              <div className="text-4xl text-blue-500 mb-3">🌍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Flexible Options
              </h3>
              <p className="text-gray-600">
                From memberships to travel & lifestyle <br /> preferences - you
                have the power to choose.
              </p>
            </div>
          </div>

          {/* Left Bottom Card  */}
          <div
            className="p-8 border border-blue-400 rounded-xl shadow"
            style={{
              clipPath: "polygon(0 0, 90% 0, 100% 25%, 100% 100%, 0 100%)",
            }}
          >
            <div className="text-4xl text-blue-500 mb-3">✅</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Verified Profiles
            </h3>
            <p className="text-gray-600">
              A reliable community with verified profiles <br /> for added
              safety and peace of mind.
            </p>
          </div>

          {/* Right Bottom Card  */}
          <div
            className="p-8 border border-blue-400 rounded-xl shadow"
            style={{
              clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 25%)",
            }}
          >
            <div className="text-4xl text-blue-500 mb-3">🚺</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Women-Only Spaces
            </h3>
            <p className="text-gray-600">
              Safe, supportive spaces for women to <br /> connect and thrive
              period.
            </p>
          </div>
        </div>
      </div>
  );
};

export default Expat;
