import "./App.css";
import TopNav from "./Components/TopNav";
import CatNav from "./Components/CatNav";
import MainComponent from "./Components/MainComponent";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components";

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />
      <Routes>
        <Route path="/" Component={LandingPage} />
      </Routes>
    </div>
  );
}

export default App;
