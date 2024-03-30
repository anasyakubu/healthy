import FitDietCard from "../../components/shared/FitDietCard";
import "./FitDiet.scss";
const FitDiet = () => {
  return (
    <>
      <div className="FitDiet p-3 bg-white text-black">
        <div className="bg-[#e4e4e4] p-10 rounded-lg">
          <div className="pt-5">
            <h1 className="text-3xl font-semibold text-black">
              How FitDiet help others
            </h1>
          </div>
          <div className="mt-5">
            <div className="space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <FitDietCard />
              <FitDietCard />
              <FitDietCard />
              <FitDietCard />
              <FitDietCard />
              <FitDietCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FitDiet;
