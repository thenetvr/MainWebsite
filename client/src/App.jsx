import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";

// pages
import InfluencerProgram from "./pages/InfluencerProgram";
import Creators from "./pages/Creators";
import ContactUs from "./pages/ContactUs";
import NetVRTheater from "./pages/NetVRTheater";
import News from "./pages/News";
import TheTeam from "./pages/TheTeam";

function Routing() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<TheTeam />} />
      <Route path="/influencer-program" element={<InfluencerProgram />} />
      <Route path="/creators" element={<Creators />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/net-vr-theater" element={<NetVRTheater />} />
      <Route path="/news" element={<News />} />
      <Route path="/the-team" element={<TheTeam />} />
    </Routes>
  );
}

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routing />
      </Router>
    </>
  );
}

export default App;
