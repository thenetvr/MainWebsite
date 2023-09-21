// framer motion
import { motion } from "framer-motion";
import { pageVariants } from "../utils/framerMotionVariants";
import Platforms from "../components/shared/Platforms";
// images
import View from "../assets/NetVRTheater/View.png";

import GDCWinner from "../assets/NetVRTheater/GDCWinner.png";
// constants
import { netVRTheaterPoints } from "../utils/Constants";
// components
import Footer from "../components/Footer";
import ListValues from "../components/NetVRTheater/listValues";
import SystemRequirements from "../components/NetVRTheater/SystemRequirements";
import Demos from "../components/NetVRTheater/Demos";
import FeaturesOfVirtualTheater from "../components/NetVRTheater/FeaturesOfVirtualTheater";
import AvailableFeatures from "../components/NetVRTheater/AvailableFeatures";

export default function NetVRTheater() {
  const {
    features,

    inShopPurchase,
    inShopPurchase2,
    commandDefinitions,
    chatCommand,
  } = netVRTheaterPoints;

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
            <div className="text-sky-500 text-6xl mb-8">THE NET VR THEATER</div>
            {/* features */}
            <FeaturesOfVirtualTheater
              listStyling={listStyling}
              features={features}
            />

            <div className="flex justify-center">
              <img className="py-3" src={View} alt="host Theater" />
            </div>

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
              <AvailableFeatures />
              <div className="flex justify-end">
                <div className="text-1xl">*Features coming soon!</div>
              </div>
            </div>

            {/* In-Shop Purchase */}
            <div className="py-3">
              <div className="text-sky-500 text-3xl">In-Shop Purchase</div>
              <div className="flex py-8">
                {[
                  { val: inShopPurchase, mar: "mr-2", pad: 5 },
                  { val: inShopPurchase2, mar: "ml-2", pad: 3 },
                ].map((obj, idx) => (
                  <div
                    className={`w-3/6 border-2 border-sky-500 ${obj.mar} p-4`}
                    key={idx}
                  >
                    <div className="p-3">
                      <ul
                        role="list"
                        className={listStyling}
                        style={{ listStyleType: "circle" }}
                      >
                        {obj.val.map((point, idx) => (
                          <ListValues
                            key={idx}
                            point={point}
                            paddingYSize={obj.pad}
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Command Definitions & Chat Command */}
            <div className="py-3">
              <div className="flex">
                <div className="text-sky-500 text-3xl w-1/2">
                  Command Definitions
                </div>
                <div className="text-sky-500 text-3xl w-1/2 pl-2">
                  Chat Command
                </div>
              </div>
              <div className="flex py-8">
                <div className="w-3/6 border-2 border-sky-500 mr-2 p-4">
                  <div className="p-3">
                    <ul
                      role="list"
                      className={listStyling}
                      style={{ listStyleType: "circle" }}
                    >
                      {commandDefinitions.map((point, idx) => (
                        <ListValues key={idx} point={point} paddingYSize={3} />
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-3/6 border-2 border-sky-500 ml-2 p-4">
                  <div className="p-3">
                    <ul
                      role="list"
                      className={listStyling}
                      style={{ listStyleType: "circle" }}
                    >
                      {chatCommand.map((point, idx) => (
                        <li className="w-full py-3" key={idx}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

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
