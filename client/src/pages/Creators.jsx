import Footer from "../components/Footer";
// framer motion
import { motion } from "framer-motion";
import { pageVariants } from "../utils/framerMotionVariants";
import { useEffect } from "react";

export default function Creators() {
  useEffect(() => {
    // const element = document.getElementById("creators");
    // element.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="bg-slate-800 h-max">
      <div className="flex flex-col items-center h-screen">
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          id="creators"
          exit="exit"
        >
          Creators
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
