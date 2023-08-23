import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

// pages
import InfluencerProgram from "./pages/InfluencerProgram";
import Home from "./pages/Home";
import Creators from "./pages/Creators";
import ContactUs from "./pages/ContactUs";
import NetVRTheater from "./pages/NetVRTheater";
import News from "./pages/News";
import TheTeam from "./pages/TheTeam";
import { AnimatePresence } from "framer-motion";

function Routing() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route exact path="/" element={<Home />} />
        <Route path="/influencer-program" element={<InfluencerProgram />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/net-vr-theater" element={<NetVRTheater />} />
        <Route path="/news" element={<News />} />
        <Route path="/the-team" element={<TheTeam />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="h-screen z-0 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-firefox md:scrollbar">
      <Router>
        <Navbar />
        <Routing />
      </Router>
    </div>
  );
}

export default App;
