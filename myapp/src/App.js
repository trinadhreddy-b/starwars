import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Films from "./components/Films";
import Actors from "./components/Actors";
import ActorDetails from "./components/ActorDetails";
import StarShip from "./components/StarShips";


export const config = {
  endpoint: "https://swapi.dev/api",
};

export const roman = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
};

function App() {
  return (
    <Routes>
     
      <Route exact path="/films/:id" element={<Films />} />
      <Route exact path="/actors" element={<Actors />} />
      <Route exact path="/actors/:id" element={<ActorDetails />} />
      <Route exact path="/starships" element={<StarShip />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
