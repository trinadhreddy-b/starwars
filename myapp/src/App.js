import './App.css';
import {Route,Routes} from "react-router-dom";
import Home from './components/Home';

export const config={
  endpoint:"https://swapi.dev/api"
}

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
    
  );
}

export default App;
