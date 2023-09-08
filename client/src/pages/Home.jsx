import Footer from "../components/Footer";
import HomeLogo from "../assets/Home-logo.png";
// framer motion
import { motion } from "framer-motion";
import { pageVariants } from "../utils/framerMotionVariants";
// send email function
import sendEmail from "../utils/sendEmail";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // replace for any other pathname
  if (window.location.pathname !== "/") return window.location.replace("/");

  // attempt to send email
  const attemptEmail = () => {
    if (!email.includes("@")) {
      setError("INVALID EMAIL");
      return;
    }
    setError("");
    sendEmail(email);
    setEmail("");
  };

  return (
    <div className="bg-slate-800 h-max">
      <motion.div
        className="flex flex-col items-center h-screen"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex justify-center items-center h-3/6 bg-black w-full mt-1">
          <img src={HomeLogo} width={400} alt="Home Logo" />
        </div>
        <div>
          <div>test</div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-blue-800 p-3" onClick={attemptEmail}>
            send email
          </button>
          <div className="text-red-500">{error}</div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
