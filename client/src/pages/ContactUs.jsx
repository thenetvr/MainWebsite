import Footer from "../components/Footer";
// framer motion
import { motion } from "framer-motion";
import { pageVariants } from "../utils/framerMotionVariants";
import { useEffect } from "react";

export default function ContactUs() {
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    console.log(scrollPosition);
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(window);

  return (
    <div className="bg-slate-800 h-max">
      <div className="flex flex-col items-center h-screen">
        <div>
          <motion.div
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onScroll={handleScroll}
          >
            Contact Us
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
