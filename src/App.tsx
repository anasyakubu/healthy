import Nav from "./components/shared/Nav";
import Hero from "./Section/Hero/Hero";
import LogoClouds from "./Section/LogoClouds/LogoClouds";
import HealthyReceipt from "./Section/HealthyReceipt/HealthyReceipt";
const App = () => {
  return (
    <>
      <div className="">
        <Nav />
        <Hero />
        <LogoClouds />
        <HealthyReceipt />
      </div>
    </>
  );
};

export default App;
