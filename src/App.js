import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import BenefitSection from "./sections/benefit/BenefitSection";

function App() {
  return (
    <div>
      <Header />
      <main>
        <BenefitSection />
      </main>
    </div>
  );
}

export default App;
