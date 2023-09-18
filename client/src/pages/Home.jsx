import Footer from "../components/Footer";
import HomeLogo from "../assets/Home-logo.png";
import HomeTheaterEmpty from "../assets/Home-Theater1.png"
import HomeTheaterFull from "../assets/Home-Theater2.png"
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
    <div className="bg-slate-800 min-h-screen flex flex-col">
      <motion.div
        className="flex flex-col items-center flex-grow"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >

        <div className="flex justify-center items-center h-80 bg-black w-full mt-0">
          <div className='items-center'>
            <img src={HomeLogo} width={700} height={200} alt="Home Logo" />
            <p className="text-4xl text-center">
              The Net VR is reinventing Virtual Reality <br />
              in the wake of <span className="text-custom-blue"> MetaVerse </span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <img src={HomeTheaterEmpty} width={584} height={450} alt="Home Theater" className="mt-12 mr-40" />
          <div className="z-10">
            <div className="flex flex-col">
              <p className="mb-16 self-start text-custom-blue text-4xl font-semibold">
                Welcome To The Net VR
              </p>
              <p className="self-start whitespace-pre-wrap text-xl">
                Experience Twitch like never before with The Net VR. We <br />
                provide streamers with stunning 3D environments that will <br />
                captivate and engage their audience. Elevate your streams <br />
                to the next level and stand out from the crowd.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <div className="z-10">
            <div className="flex flex-col">
              <p className="mb-16 self-start text-custom-blue text-4xl font-semibold">
                Immersive 3D Environments
              </p>
              <p className="self-start whitespace-pre-wrap text-xl">
                Experience the next level of entertainment with our <br />
                cutting-edge 3D environments designed specifically for <br />
                Twitch streamers. Engage your audience like never before <br />
                and create a truly immersive streaming experience.
              </p>
            </div>
          </div>
          <img src={HomeTheaterFull} width={584} height={450} alt="Home Theater" className="mt-16 ml-40 mb-10" />
        </div>

        {/*<div>*/}
        {/*  <div>test</div>*/}
        {/*  <input*/}
        {/*    type="text"*/}
        {/*    value={email}*/}
        {/*    onChange={(e) => setEmail(e.target.value)}*/}
        {/*  />*/}
        {/*  <button className="bg-blue-800 p-3" onClick={attemptEmail}>*/}
        {/*    send email*/}
        {/*  </button>*/}
        {/*  <div className="text-red-500">{error}</div>*/}
        {/*</div>*/}
      </motion.div>
      <Footer />
    </div>
  );
}
