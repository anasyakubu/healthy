import Banner from "../../assets/banner-1.jpg";
import { IoStarSharp } from "react-icons/io5";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <div className="Hero">
        <div className="bg-white text-black">
          <div className="p-10">
            <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              {/* Text */}
              <div className="p-5">
                <div className="">
                  <h6 className="text-[#11bd6b] font-semibold">
                    #HeathyFoodLiving
                  </h6>
                  <h1
                    className="mt-1 text-3xl font-semibold"
                    style={{ fontSize: "3rem", lineHeight: "115%" }}
                  >
                    Change your diet and start eating healthy
                  </h1>
                  <p className="mt-3 text-sm text-black font-light">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam quis officiis consectetur dolores excepturi tenetur
                    laborum corrupti repellendus, atque doloremque?
                  </p>
                  <div className="mt-5 flex">
                    <button className="text-sm font-semibold p-2 pr-5 pl-5 leading-6 text-white bg-[#11bd6b] rounded-3xl mr-10">
                      Sign up for Free
                    </button>
                    <div className="flex text-yellow-600 py-2">
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                      <span className="ml-5 text-black font-bold">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Image */}
              <div className="flex justify-center">
                <img
                  className="rounded-2xl"
                  src={Banner}
                  alt="Banner"
                  style={{ width: "450px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
