import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Events from './Pages/Events';
import Home from './Pages/Home';
import Nav from './Pages/Nav';
import Societies from './Pages/Societies';
import ComputerSociety from './Pages/societies/ComputerSociety';
import CommunicationSociety from './Pages/societies/CommunicationSociety';
import CircuitsAndSystemsSociety from './Pages/societies/CircuitsAndSystemsSociety';
import FacltyAdv from './Pages/FacltyAdv';
import TopLeadership from './Pages/TopLeadership';
import AllEvents from './Pages/AllEvents.jsx';
import FutureEventTimeLine from './Pages/FutureEventTimeLine';
import Collaborators from './Pages/Collaborators';
import VirtualVista from './Pages/events/computersociety/VirtualVista';
import VirtualVista2 from './Pages/events/computersociety/VirtualVista2';
import AIMastery from './Pages/events/computersociety/AIMastery';
import TechIgnition from './Pages/events/main/TechIgnition';
import Team from './Pages/Team';

function App1() {
  return (
    <>
      <Nav />
      <Home />
      <AboutUs />
      <Societies />
      <Events />
      <FutureEventTimeLine />
      <TopLeadership />
      <FacltyAdv />
      <Team />
      <Collaborators />
      <Contact />
    </>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App1 />} />
        <Route path="/ComputerSociety" element={<ComputerSociety />} />
        <Route path="/CommunicationSociety" element={<CommunicationSociety />} />
        <Route path="/CircuitsAndSystemsSociety" element={<CircuitsAndSystemsSociety />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/events/VirtualVista" element={<VirtualVista2 />} />
        <Route path="/events/TechIgnition" element={<TechIgnition />} />
        <Route path="/events/AIMastery" element={<AIMastery />} />
      </Routes>
    </Router>
  );
};

export default App;
