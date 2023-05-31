import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";

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
      <Route exact path="/" element={<Home />} />
      <Route exact path="/MovieDetails" element={<MovieDetails />} />
    </Routes>
  );
}

export default App;
