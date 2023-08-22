import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import InfluencerProgram from "./pages/InfluencerProgram";
import Home from "./pages/Home";
import Creators from "./pages/Creators";
import ContactUs from "./pages/ContactUs";
import NetVRTheater from "./pages/NetVRTheater";
import News from "./pages/News";
import TheTeam from "./pages/TheTeam";

function Routing() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/influencer-program" element={<InfluencerProgram />} />
      <Route path="/creators" element={<Creators />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/net-vr-theater" element={<NetVRTheater />} />
      <Route path="/news" element={<News />} />
      <Route path="/the-team" element={<TheTeam />} />
      <Route path="*" element={<Home />} />
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
