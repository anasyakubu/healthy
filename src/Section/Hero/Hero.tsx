import Banner from "../../assets/banner-1.jpg";

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
                  <div className="mt-5">
                    <button className="text-sm font-semibold p-2 pr-5 pl-5 leading-6 text-white bg-[#11bd6b] rounded-3xl">
                      Sign up for Free
                    </button>
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
