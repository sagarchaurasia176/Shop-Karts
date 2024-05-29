import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductMainPage from "./page/ProductMainPage";

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <ProductMainPage/>
        <Routes>
          <Route path="/" element ={<ProductMainPage/>}>

          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
