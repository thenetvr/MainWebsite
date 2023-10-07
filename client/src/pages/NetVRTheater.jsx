// framer motion
import { motion } from "framer-motion";
import { pageVariants } from "../utils/framerMotionVariants";
// images
import View from "../assets/NetVRTheater/View.png";
import GDCWinner from "../assets/NetVRTheater/GDCWinner.png";
// components
import Footer from "../components/Footer";
import Platforms from "../components/shared/Platforms";
import SystemRequirements from "../components/NetVRTheater/SystemRequirements";
import Demos from "../components/NetVRTheater/Demos";
import FeaturesOfVirtualTheater from "../components/NetVRTheater/FeaturesOfVirtualTheater";
import AvailableFeatures from "../components/NetVRTheater/AvailableFeatures";
import InShopPurchase from "../components/NetVRTheater/InShopPurchase";
import ComDefChatCom from "../components/NetVRTheater/ComDefChatCom";
import VideoContainer from "../components/NetVRTheater/VideoContainer";

export default function NetVRTheater() {
  const listStyling =
    "flex flex-row flex-wrap items-start justify-center items-center pl-5 space-y-3 text-slate-400 text-2xl";

  return (
    <div className="bg-slate-800 h-max">
      <div className="flex flex-col items-center h-fit lg:px-60 p-10">
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="p-8 d-flex">
            <div className="sm:text-left text-center text-sky-500 text-6xl mb-8">
              THE NET VR THEATER
            </div>
            {/* features */}
            <FeaturesOfVirtualTheater listStyling={listStyling} />
            {/* video container */}
            <VideoContainer />
            {/* demo images */}
            <Demos />
            {/* host streams / platforms */}
            <div className="py-8">
              <div className="text-sky-500 text-3xl italic">Multi-Platform</div>
              <Platforms padding="10" />
            </div>
            {/* Available Features */}
            <div className="py-3">
              <div className="text-sky-500 text-3xl">Available Features</div>
              <AvailableFeatures listStyling={listStyling} />
              <div className="flex justify-end">
                <div className="text-1xl">*Features coming soon!</div>
              </div>
            </div>
            {/* In-Shop Purchase */}
            <InShopPurchase listStyling={listStyling} />
            {/* Command Definitions & Chat Command */}
            <ComDefChatCom listStyling={listStyling} />
            {/* System Requirements */}
            <SystemRequirements />
            <div className="flex justify-center align-center">
              <img
                className="py-9 pr-3"
                src={GDCWinner}
                width="60"
                alt="host Theater"
              />
              <div className="flex items-center pr-3">
                <div>
                  *Our application is free and features are unlocked with time,
                  however if you do not want to wait the designated time, you
                  can purchase features. DOWNLOAD
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
