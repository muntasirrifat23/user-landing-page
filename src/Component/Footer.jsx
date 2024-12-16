import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import logo from "../../public/logo.png";

const Footer = () => {
  return (
    <div className="bg-white text-black lg:px-28 px-4">
      <div>
        <div className="lg:flex lg:justify-between mt-20 px-20 ">
          {/* Footer Left */}
          <div>
            <img src={logo} alt="logo" className="w-64 h-64 -mx-10 sm:-m-12" />

            <p className="text-gray-600 text-lg">
              Scan a Turning Hearts Medallion to learn about and interact <br />
              with those who have passed on. You can also begin <br />
              documenting the legacy you wish to leave behind.
            </p>
            {/* social media */}
            <div>
              <p className="font-semibold mt-8 text-2xl">Social Media:</p>
              <div className="flex text-xl gap-2 mt-2">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-500 text-white p-2 rounded-full"
                >
                  <IoLogoTwitter />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white p-2 rounded-full"
                >
                  <IoLogoInstagram />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 text-white p-2 rounded-full"
                >
                  <IoLogoLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-full"
                >
                  <IoLogoFacebook />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Middle */}
          <div className="lg:mt-20">
            <p className="sm:mt-10 font-semibold text-2xl">Quick Link</p>
            <div className="flex flex-col gap-3 mt-2 text-gray-600">
              <a className="hover:text-blue-800 font-medium" href="#header">
                Home
              </a>
              <a className="hover:text-blue-800 font-medium" href="#faq">
                FAQ
              </a>
              <a className="hover:text-blue-800 font-medium" href="#search">
                Country Search
              </a>
              <a className="hover:text-blue-800 font-medium" href="#header">
                Register
              </a>
            </div>
          </div>

          {/* Footer Right */}
          <div className="flex lg:mt-48 text-gray-600">
            <div>
              <p>(316) 555-0116</p>
              <p>deanna.curtis@example.com</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="mx-40 sm:mx-20 text-gray-600 mt-5" />
      <div className="bg-white text-center mt-5 mb-12 sm:mr-20 mr-20">
        <p className="text-end"> © [2024] Ash and Fire. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
