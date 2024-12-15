import travelImg from "../../public/travelType.png";
const Traveler = () => {
  return (
    <div className="mb-20 mt-10 text-center bg-white mx-40 rounded-lg">
      <hr className="border-t-4 rounded-lg items-center mb-2 border-blue-600 w-12 mx-auto" />

      <p className="text-3xl font-bold">Perfect for every type of traveler</p>

      <img src={travelImg} className="w-full h-full" alt="Travel Type" />
    </div>
  );
};

export default Traveler;
