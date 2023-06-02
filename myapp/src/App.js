import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Films from "./components/Films";
import Actors from "./components/Actors/Actors";
import ActorDetails from "./components/Actors/ActorDetails";
import StarShip from "./components/Starships/StarShipsPage";
import Header from "./components/Header";
import Planets from "./components/Planets/PlanetsPage";
import StarshipDetails from "./components/Starships/StarshipDetails";
import PlanetDetails from "./components/Planets/PlanetDetails";
import { useState, useEffect } from "react";
import SearchResults from "./components/SearchResults/SearchResults";

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
  const [searchQuery, setSearchQuery] = useState("");
  
  const location = useLocation();

  useEffect(() => {
    setSearchQuery("");
  }, [location.pathname]);

  const handleSearchInputChange = (value) => {
  
    setSearchQuery(value);
    
  };
  

  return (
    <>
      <Header handleSearchInputChange={handleSearchInputChange} />

      {searchQuery.length > 0 ? (
        <SearchResults searchQuery={searchQuery} />
      ) : (
        <Routes>
          <Route exact path="/films/:id" element={<Films />} />
          <Route exact path="/actors" element={<Actors />} />
          <Route exact path="/actors/:id" element={<ActorDetails />} />
          <Route exact path="/starships" element={<StarShip />} />
          <Route exact path="/starships/:id" element={<StarshipDetails />} />
          <Route exact path="/planets" element={<Planets />} />
          <Route exact path="/planets/:id" element={<PlanetDetails />} />
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </>
  );
}

export default App;
