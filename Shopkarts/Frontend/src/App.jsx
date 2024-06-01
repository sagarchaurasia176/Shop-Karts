import "./App.css";
import CategoryNav from "./Screens/CategoryNav";
import Navbar from "./Screens/Navbar";
import MainProductPage from "./page/MainProductPage";
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();

function App() {
  return (
    <>
      <div>
        <div className="h-screen">
          <div className="">
            <Navbar />
            <CategoryNav />
          </div>
          <MainProductPage/>
        </div>
      </div>
    </>
  );
}

export default App;
