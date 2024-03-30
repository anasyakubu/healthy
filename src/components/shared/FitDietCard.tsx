import { FaQuoteLeft } from "react-icons/fa";

const FitDietCard = () => {
  return (
    <>
      <div className="FitDietCard">
        <div className="bg-white text-black p-3 m-2 rounded-xl shadow-lg">
          <div className="pt-3 icon">
            <h1
              className="text-3xl font-extrabold text-[#11bd6b]"
              style={{ fontSize: "3rem" }}
            >
              <FaQuoteLeft />
            </h1>
          </div>
          <div className="mt-5">
            <p className="text-black text-sm font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              rerum praesentium, ea inventore hic ad, consequatur quam saepe
              cumque voluptate, at dolorum? Numquam quo laborum nam, blanditiis
              voluptatum mollitia maiores.
            </p>
            <p className="mt-5">
              <figure>
                <cite>~ Anas Yakubu</cite>
              </figure>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FitDietCard;
