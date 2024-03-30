import "./Join.scss";
const Join = () => {
  return (
    <>
      <div className="Join">
        <div className="p-10 py-16">
          <div className="text-center">
            <h1
              className="mt-1 text-3xl font-semibold"
              style={{ fontSize: "3rem", lineHeight: "115%" }}
            >
              Let's end the struggle <br /> of eating healthy
            </h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur
              <br />
              temporibus nostrum magnam dolorem, natus expedita.
            </p>
            <div className="mt-5 text-center">
              <button className="text-sm font-semibold p-2 pr-5 pl-5 leading-6 text-white bg-[#11bd6b] rounded-3xl ">
                Sign up for Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;
