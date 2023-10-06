// components
import Footer from "../components/Footer";
// framer motion
import { motion } from "framer-motion";
import { pageVariants } from "../utils/framerMotionVariants";
// utils
import AllMembers from "../components/TheTeam/AllMembers";

export default function TheTeam() {
  return (
    <div className="bg-slate-800 h-max">
      <div className="flex flex-col items-center h-fit xl:px-60 lg:px-30 p-10">
        <motion.div
          className="flex flex-col items-center flex-grow"
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="p-8 d-flex">
            <div className=" sm:text-left text-center text-sky-500 text-6xl mb-8">
              THE NET VR TEAM
            </div>
            <div className="flex justify-center">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:w-full w-80 mb-10 d-flex flex-row">
                <div className="text-sky-500 text-3xl mb-10">About Us</div>
                <div className="col-span-2 text-lg">
                  Founded In 2019, We Are A Bootstrap Virtual Reality Developing
                  Company Headquartered In Hillsboro, Oregon. We Are Currently
                  Developing Our First Application, Net VR Theater, Where We
                  Bring Live Streaming And VR (With And Without A Headset)
                  Together. #NoVRVR
                </div>
              </div>
            </div>

            {/* main team container */}
            <AllMembers />
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
