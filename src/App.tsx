import "./App.scss";
import Nav from "./components/shared/Nav";
import Hero from "./Section/Hero/Hero";
import LogoClouds from "./Section/LogoClouds/LogoClouds";
import HealthyReceipt from "./Section/HealthyReceipt/HealthyReceipt";
import Stats from "./Section/Stats/Stats";
import FitDiet from "./Section/FitDiet/FitDiet";
import Join from "./Section/Join/Join";
import Footer from "./Section/Footer/Footer";
const App = () => {
  return (
    <>
      <div className="App">
        <Nav />
        <Hero />
        <LogoClouds />
        <HealthyReceipt />
        <Stats />
        <LogoClouds />
        <FitDiet />
        <Join />
        <Footer />
      </div>
    </>
  );
};

export default App;
