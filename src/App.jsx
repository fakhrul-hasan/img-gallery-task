import DropDown from "./components/Dropdown/Dropdown";
import ImgSection from "./components/ImgSection/ImgSection";
import Navbar from "./components/Shared/Navbar/Navbar";


function App() {
  return (
    <section className="container mx-auto">
      <div className="rounded-lg m-5 border">
        <Navbar/>
        <ImgSection/>
      </div>
        <DropDown/>
    </section>
  );
}

export default App;
