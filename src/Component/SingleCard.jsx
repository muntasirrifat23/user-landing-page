const SingleCard = () => {
  return (
    <div className="bg-white text-black mb-20 relative mt-[-30px] lg:mt-[-50px] mx-20 p-8 lg:mx-40 grid lg:grid-cols-3 rounded-xl lg:gap-40 gap-8">
      {/* Cards 1 */}
      <div>
        <img src="https://i.ibb.co.com/HXhg2YW/s1.png" alt="150+" className="h-20 w-20" />
        <h2 className="text-3xl font-semibold">150+ Countries</h2>
        <p className="text-sm text-slate-600">
          Empowering women to <br />
          explore destinations globally
        </p>
      </div>
      {/* Cards 2 */}
      <div>
        <img src="https://i.ibb.co.com/0Q1Cw4N/s2.png" alt="Travel" className="h-20 w-20" />
        <h2 className="text-3xl font-semibold">Connect & Travel</h2>
        <p className="text-sm text-slate-600">
          A trusted community of <br />
          verified members
        </p>
      </div>
      {/* Cards 3 */}
      <div>
        <img src="https://i.ibb.co.com/stggGGv/s3.png" alt="Tribe" className="h-20 w-20" />
        <h2 className="text-3xl font-semibold">Find Your Tribe</h2>
        <p className="text-sm text-slate-600">
          Find like-minded housemates <br />
          faster and easier
        </p>
      </div>
    </div>
  );
};

export default SingleCard;
