import Footer from "../components/Footer";
// framer motion
import { motion } from "framer-motion";
import { pageVariants } from "../utils/framerMotionVariants";

export default function NetVRTheater() {
  return (
    <div className="bg-slate-800 h-max">
      <div className="flex flex-col items-center h-screen">
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          Net VR Theater
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
