import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import BenefitSection from "./sections/benefit/BenefitSection";
import FeaturedSection from "./sections/featuread/FeaturedSection";

function App() {
  return (
    <div>
      <Header />
      <main>
        <BenefitSection />
        <FeaturedSection />
      </main>
    </div>
  );
}

export default App;
