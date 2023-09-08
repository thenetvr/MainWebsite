import Footer from "../components/Footer";
import HomeLogo from "../assets/Home-logo.png";
// framer motion
import { motion } from "framer-motion";
import { pageVariants } from "../utils/framerMotionVariants";
// send email function
import sendEmail from "../utils/sendEmail";

export default function Home() {
  // replace for any other pathname
  if (window.location.pathname !== "/") return window.location.replace("/");

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
          <button className="bg-blue-800 p-3" onClick={sendEmail}>
            send email
          </button>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
