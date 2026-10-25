import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionFive from "./components/SectionFive";
import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SectionSix from "./components/SectionSix";
import SectionThree from "./components/SectionThree";
import  SectionTwo  from "./components/SectionTwo";

export default function App() {
  return (
    <div className="w-full h-dvh overflow-auto font-jsans" data-theme="light">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive/>
      <SectionSix />
      <Footer />
    </div>
  );
}
