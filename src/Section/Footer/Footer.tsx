import { FaInstagram, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoGlobeOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="p-10">
          <hr />
          <div className="mt-5 mb-5">
            <div className="space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
              {/* Link 1 */}
              <div className="">
                <h6 className="font-semibold text-xl">About us</h6>
                <p className="mt-2 text-lg font-normal">
                  <a href="/">Features</a>
                </p>
                <p className="mt-2 text-lg font-normal">
                  <a href="/">Pricing</a>
                </p>
                <p className="mt-2 text-lg font-normal">
                  <a href="/">Blog</a>
                </p>
                <p className="mt-2 text-lg font-normal">
                  <a href="/">Communities</a>
                </p>
              </div>
              {/* Link 1 */}
              <div className="">
                <h6 className="font-semibold text-xl">Support</h6>
                <p className="mt-2 text-lg font-normal">
                  <a href="/">Contact</a>
                </p>
                <p className="mt-2 text-lg font-normal">
                  <a href="/">Privacy</a>
                </p>
                <p className="mt-2 text-lg font-normal">
                  <a href="/">Policy</a>
                </p>
                <p className="mt-2 text-lg font-normal">
                  <a href="/">Help</a>
                </p>
              </div>
              {/* Link 1 */}
              <div className="">
                <h6 className="font-semibold text-xl">Developer</h6>
                <p className="mt-2 text-lg font-normal">
                  <a href="/">Download</a>
                </p>
                <p className="mt-2 text-lg font-normal">
                  <a href="/">Github</a>
                </p>
                <p className="mt-2 text-lg font-normal">
                  <a href="/">Blog</a>
                </p>
                <p className="mt-2 text-lg font-normal">
                  <a href="/">X</a>
                </p>
              </div>
              {/* News */}
              <div className="">
                <h6 className="font-semibold text-xl">Our Newsletter</h6>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Odio, explicabo ducimus deserunt nobis iure quos?
                </p>
                <div className="mt-3">
                  <input
                    type="text"
                    className="p-1 outline rounded-2xl"
                    placeholder="Email Address"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="mb-5 flex justify-between">
            <div className="mt-5">
              <p className="text-black font-light text-sm">
                <span>Faq</span> | <span>Soon</span>
              </p>
            </div>
            <div className="">
              <p className="flex">
                {/* <span>Fellow me</span> */}
                <span
                  className="flex justify-around"
                  //style={{ marginLeft: "20px" }}
                >
                  <a
                    href="https://www.instagram.com/anass.developer/"
                    className="p-3 bg-white rounded-full m-2 icon"
                    target="_blank"
                  >
                    <FaInstagram className="text-black" />
                  </a>
                  <a
                    href="https://twitter.com/___anaaasss"
                    className="p-3 bg-white rounded-full m-2 icon"
                    target="_blank"
                  >
                    <BsTwitterX className="text-black" />
                  </a>
                  <a
                    href="https://github.com/anasyakubu"
                    className="p-3 bg-white rounded-full m-2 icon"
                    target="_blank"
                  >
                    <FaGithub className="text-black" />
                  </a>
                  <a
                    href="https://portfolio-beta-psi.vercel.app/"
                    className="p-3 bg-white rounded-full m-2 icon"
                    target="_blank"
                  >
                    <IoGlobeOutline className="text-black" />
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
