import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductMainPage from "./page/ProductMainPage";
import Navbar from "./Screens/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          {/* routes change */}
          <Route path="/" element={<ProductMainPage />}>
            
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
