import './App.css';
import { Route, Routes } from "react-router-dom";

// import Home from './containers/home/Home';
// import Destination from './containers/destination/Destination';
// import Crew from './containers/crew/Crew';
// import Technology from './containers/technology/Technology';

import { Home, Destination, Crew, Technology } from './containers/index';

const App = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/Destination" element={<Destination />} />
    <Route exact path="/Crew" element={<Crew />} />
    <Route exact path="/Technology" element={<Technology />} />
    <Route path="*" element={<Home />} />
  </Routes>
);

export default App;
