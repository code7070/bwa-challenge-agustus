import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import BenefitSection from "./sections/benefit/BenefitSection";
import FeaturedResto from "./sections/featured/FeaturedResto";
import NearRestoSection from "./sections/nearResto/NearRestoSection";

function App() {
  return (
    <div>
      <Header />
      <main>
        <BenefitSection />
        <FeaturedResto />
        <NearRestoSection />
      </main>
    </div>
  );
}

export default App;
