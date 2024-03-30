import Nav from "./components/shared/Nav";
import Hero from "./Section/Hero/Hero";
import LogoClouds from "./Section/LogoClouds/LogoClouds";
import HealthyReceipt from "./Section/HealthyReceipt/HealthyReceipt";
import Stats from "./Section/Stats/Stats";
const App = () => {
  return (
    <>
      <div className="">
        <Nav />
        <Hero />
        <LogoClouds />
        <HealthyReceipt />
        <Stats />
      </div>
    </>
  );
};

export default App;
