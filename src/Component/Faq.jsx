import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

const Faq = () => {
  return (
    <div className="lg:mx-40 mx-20">
      <p className="text-4xl text-center font-bold mb-2 mt-10">FAQs</p>
      <p className="text-gray-600 mb-8 text-center font-semibold">
        If you have any questions that aren’t listed below, please send your
        question to:{" "}
        <span className="underline">info@ExpatGlobalGirls.com</span>
      </p>
      {/* Faq */}
      <div className="flex p-4 bg-white text-black mb-5 rounded-lg">
        <div>
          <p className="font-semibold lg:text-xl">
            What cars do you have in your inventory?
          </p>
          <p className="text-gray-600 sm:text-sm">
            Lorem ipsum dolor sit amet consectetur. Integer facilisi sit tortor
            lobortis amet. Risus vestibulum <br /> nec fringilla sed in
            tincidunt tempus porta. Vulputate ornare vitae turpis mauris.
          </p>
        </div>
        <div>
        <IoRemoveCircleOutline />
        </div>
      </div>

      <div className="flex justify-between items-center p-4 bg-white text-black mb-5 rounded-lg">
        <div>
          <p className="font-semibold lg:text-xl">
            What cars do you have in your inventory?{" "}
          </p>
        </div>
        <IoAddCircleOutline />
      </div>

      <div className="flex justify-between items-center p-4 bg-white text-black mb-5 rounded-lg">
        <div>
          <p className="font-semibold lg:text-xl">
            What cars do you have in your inventory?{" "}
          </p>
        </div>
        <IoAddCircleOutline />
      </div>

      <div className="flex justify-between items-center p-4 bg-white text-black mb-5 rounded-lg">
        <div>
          <p className="font-semibold lg:text-xl">
            What cars do you have in your inventory?{" "}
          </p>
        </div>
        <IoAddCircleOutline />
      </div>

      <div className="flex justify-between items-center p-4 bg-white text-black mb-5 rounded-lg">
        <div>
          <p className="font-semibold lg:text-xl">
            What cars do you have in your inventory?{" "}
          </p>
        </div>
        <IoAddCircleOutline />
      </div>
    </div>
  );
};

export default Faq;
