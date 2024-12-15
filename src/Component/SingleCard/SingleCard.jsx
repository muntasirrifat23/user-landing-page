const SingleCard = () => {
  return (
    <div className="bg-white text-black items-center justify-center relative mt-[-50px] mx-40  grid grid-cols-3 p-4 rounded-xl gap-16">
      {/* Cards 1 */}
      <div>
        <h2 className="text-3xl font-semibold">150+ Countries</h2>
        <p className="text-sm text-slate-600">
          Empowering women to <br />
          explore destinations globally
        </p>
      </div>
      {/* Cards 2 */}
      <div>
        <h2 className="text-3xl font-semibold">Connect & Travel</h2>
        <p className=" text-slate-600">
          A trusted community of <br />
          verified members
        </p>
      </div>
      {/* Cards 3 */}
      <div>
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
