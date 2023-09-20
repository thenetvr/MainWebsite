import Footer from "../components/Footer";
// framer motion
import { motion } from "framer-motion";
import { pageVariants } from "../utils/framerMotionVariants";
import Platforms from "../components/shared/Platforms";
// images
import View from "../assets/NetVRTheater/View.png";
import demo1 from "../assets/NetVRTheater/demo1.png";
import demo2 from "../assets/NetVRTheater/demo2.png";
import demo3 from "../assets/NetVRTheater/demo3.png";
import shop from "../assets/NetVRTheater/shop.png";
import viewers from "../assets/NetVRTheater/viewers.png";
import GDCWinner from "../assets/NetVRTheater/GDCWinner.png";
import contentCreators from "../assets/NetVRTheater/contentCreators.png";

export default function NetVRTheater() {
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
            <div className="mb-10">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-sky-500 text-3xl">
                  Features Of Virtual Theater
                </div>
                <div className="col-span-2">
                  <ul
                    role="list"
                    className="flex flex-row flex-wrap items-start justify-center items-center pl-5 space-y-3 text-slate-400 text-2xl"
                    style={{ listStyleType: "circle" }}
                  >
                    <li className="w-3/6">Direct Stream</li>
                    <li className="w-3/6">Twitch Add-On</li>
                    <li className="w-3/6">Voting Podium</li>
                    <li className="w-3/6">Voice Chat</li>
                    <li className="w-3/6">Donation Podium</li>
                    <li className="w-3/6">Chat Wall</li>
                    <li className="w-3/6">Customized Avatar</li>
                    <li className="w-3/6">Admin Panel</li>
                  </ul>
                </div>
              </div>
            </div>

            <img className="py-3" src={View} alt="host Theater" />

            <div>
              <div className="flex">
                <div className="w-3/6 p-4">
                  <img className="py-3" src={demo1} alt="host Theater" />
                  <div>
                    Viewers can hang out with friends and other viewers while
                    watching their favorite content creator!
                  </div>
                </div>
                <div className="w-3/6 p-4">
                  <img className="py-3" src={demo2} alt="host Theater" />
                  <div>
                    Content creators can stream directly to a theater or use our
                    application as an add-on for Twitch, FacebookLive with other
                    live streaming platforms to come
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="w-3/6 p-4">
                  <img className="py-3" src={demo3} alt="host Theater" />
                  <div>A feature to come!</div>
                </div>
                <div className="w-3/6 p-4">
                  <img className="py-3" src={shop} alt="host Theater" />
                  <div>
                    Content creators can choose their theater design within our
                    marketplace!
                  </div>
                </div>
              </div>
            </div>

            {/* host streams / platforms */}
            <div className="py-8">
              <div className="text-sky-500 text-3xl italic">Multi-Platform</div>
              <Platforms padding="10" />
            </div>

            {/* Available Features */}
            <div className="py-3">
              <div className="text-sky-500 text-3xl">Available Features</div>
              <div className="flex py-8">
                <div className="w-3/6 border-2 border-sky-500 mr-2 p-4">
                  <h1 className="font-bold text-2xl text-sky-500">
                    User/Viewers
                  </h1>
                  <img className="py-9" src={viewers} alt="host Theater" />
                  <div className="p-3">
                    <ul
                      role="list"
                      className="flex flex-row flex-wrap items-start justify-center items-center pl-5 space-y-3 text-slate-400 text-2xl"
                      style={{ listStyleType: "circle" }}
                    >
                      <li className="w-full py-5">Voice Chat</li>
                      <li className="w-full py-5">Integrated Chat Wall</li>
                      <li className="w-full py-5">Customizable Avatar</li>
                      <li className="w-full py-5">Voting Podium</li>
                      <li className="w-full py-5">Award Podium</li>
                      <li className="w-full py-5">Seating</li>
                      <li className="w-full py-5">Emotes</li>
                    </ul>
                  </div>
                </div>
                <div className="w-3/6 border-2 border-sky-500 ml-2 p-4">
                  <h1 className="font-bold text-2xl text-sky-500">
                    Content Creators
                  </h1>
                  <img
                    className="py-9"
                    src={contentCreators}
                    alt="host Theater"
                  />
                  <div className="p-3">
                    <ul
                      role="list"
                      className="flex flex-row flex-wrap items-start justify-center items-center pl-5 space-y-3 text-slate-400 text-2xl"
                      style={{ listStyleType: "circle" }}
                    >
                      <li className="w-full py-2">Host Your Own Stream</li>
                      <li className="w-full py-2">
                        Host Your Favorite Creator, But Be Sure to Get Their
                        Permission
                      </li>
                      <li className="w-full py-2">
                        <div>Admins</div>
                        <div>- Highlight</div>
                        <div>- Kick</div>
                        <div>- Silence</div>
                        <div>- Doorway to Other Theater</div>
                      </li>
                      <li className="w-full py-2">
                        Choose Your Own Theater Skin
                      </li>
                      <li className="w-full py-2">Upload Your Logo*</li>
                      <li className="w-full py-2">
                        Create Your Own Digital Assets
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="text-1xl">*Features coming soon!</div>
              </div>
            </div>

            {/* In-Shop Purchase */}
            <div className="py-3">
              <div className="text-sky-500 text-3xl">In-Shop Purchase</div>
              <div className="flex py-8">
                <div className="w-3/6 border-2 border-sky-500 mr-2 p-4">
                  <div className="p-3">
                    <ul
                      role="list"
                      className="flex flex-row flex-wrap items-start justify-center items-center pl-5 space-y-3 text-slate-400 text-2xl"
                      style={{ listStyleType: "circle" }}
                    >
                      <li className="w-full py-5">
                        <div>Immediate Unlock*</div>
                        <div>- Text Chat</div>
                        <div>- Voice Chat</div>
                        <div>- Avatar</div>
                      </li>
                      <li className="w-full py-5">Lux</li>
                      <li className="w-full py-5">Lux Ray</li>
                      <li className="w-full py-5">Avatar Skin</li>
                      <li className="w-full py-5">Awards</li>
                    </ul>
                  </div>
                </div>
                <div className="w-3/6 border-2 border-sky-500 ml-2 p-4">
                  <div className="p-3">
                    <ul
                      role="list"
                      className="flex flex-row flex-wrap items-start justify-center items-center pl-5 space-y-3 text-slate-400 text-2xl"
                      style={{ listStyleType: "circle" }}
                    >
                      {" "}
                      <li className="w-full py-3">
                        <div>Immediate Unlock</div>
                        <div>- Host</div>
                      </li>
                      <li className="w-full py-3">Extra Seats</li>
                      <li className="w-full py-3">Theater Skins</li>
                      <li className="w-full py-3">In-theater Items</li>
                      <li className="w-full py-3">Award Podium</li>
                      <li className="w-full py-3">Seating</li>
                      <li className="w-full py-3">Emotes</li>
                    </ul>
                  </div>
                </div>
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
                      className="flex flex-row flex-wrap items-start justify-center items-center pl-5 space-y-3 text-slate-400 text-2xl"
                      style={{ listStyleType: "circle" }}
                    >
                      <li className="w-full py-3">
                        General Theater Information
                      </li>
                      <li className="w-full py-3">
                        Alerts When Users Enter/Leave, Vote, Award
                      </li>
                      <li className="w-full py-3">Highlights User</li>
                      <li className="w-full py-3">Removes User</li>
                      <li className="w-full py-3">Mutes User (Voice Chat)</li>
                    </ul>
                  </div>
                </div>
                <div className="w-3/6 border-2 border-sky-500 ml-2 p-4">
                  <div className="p-3">
                    <ul
                      role="list"
                      className="flex flex-row flex-wrap items-start justify-center items-center pl-5 space-y-3 text-slate-400 text-2xl"
                      style={{ listStyleType: "circle" }}
                    >
                      <li className="w-full py-3">!Theater Info</li>
                      <li className="w-full py-3">!Theater alerts (on/off)</li>
                      <li className="w-full py-3">
                        !Theater highlight (username)
                      </li>
                      <li className="w-full py-3">!Theater kick (username)</li>
                      <li className="w-full py-3">
                        !Theater silence (username)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* System Requirements */}
            <div className="py-3">
              <div className="text-sky-500 text-3xl font-bold">
                System Requirements
              </div>
              <div className="p-3">
                <div className="text-sky-500 text-2xl">Windows 10</div>
                <ul
                  role="list"
                  className="flex flex-row flex-wrap items-start justify-center items-center pl-5 py-4 space-y-3 text-slate-400 text-2xl"
                  style={{ listStyleType: "circle" }}
                >
                  <li className="w-full">
                    Processor: Intel Core 2 Duo 2.5 GHz (Or Greater)
                  </li>
                  <li className="w-full">DirectX: Version 11</li>
                  <li className="w-full">Storage: 2 GB Available Space</li>
                  <li className="w-full">Memory: 1 GB RAM</li>
                  <li className="w-full">
                    Graphics: NVIDIA 9xxx / ATI 2xxx (Or Greater
                  </li>
                  <li className="w-full">Sound Card: DirectX9 Compatible</li>
                </ul>
              </div>
              <div className="p-3">
                <div className="text-sky-500 text-2xl">MacOS 10</div>
                <ul
                  role="list"
                  className="flex flex-row flex-wrap items-start justify-center items-center pl-5 py-4 space-y-3 text-slate-400 text-2xl"
                  style={{ listStyleType: "circle" }}
                >
                  <li className="w-full">
                    Processor: 1.6 GHz Core I5 (I5-8210Y (Or Greater)
                  </li>
                  <li className="w-full">Memory: 8 MB</li>
                  <li className="w-full">Storage: 2GB Available Space</li>
                </ul>
              </div>
            </div>

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
