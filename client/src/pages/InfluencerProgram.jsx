import Footer from "../components/Footer";
// framer motion
import { motion } from "framer-motion";
import { pageVariants } from "../utils/framerMotionVariants";
// utils
import { platforms } from "../utils/Constants";
// extra images
import hostTheater from "../assets/influencerProgram/hostTheater.png";
import streamExample from "../assets/influencerProgram/netVRstreamExample.png";
import InfluencerForm from "../components/InfluencerProgram/InfluencerForm";

export default function InfluencerProgram() {
  return (
    <div className="bg-slate-800 h-max">
      <div className="flex flex-col items-center h-fit lg:px-60 p-10">
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full"
        >
          <div className="p-8 d-flex">
            <div className="text-sky-500 text-6xl mb-6">INFLUENCER PROGRAM</div>
            <div className="mb-10">
              Calling all celebrities, influencers, streamers, content creators
              and performers broadcasting LIVE! We're here to provide access to
              the 3D community creating more engagement in real time. Broadcast
              and jump into your own theater where you can chat directly with
              your community and friends during or after your live session.
            </div>
            <div className="text-sky-500 mb-3">(VR headset NOT required!)</div>

            {/* host streams */}
            <div className="py-32">
              <div className="flex justify-around">
                {platforms.map((platform, idx) => (
                  <div key={idx} className="p-4">
                    <div className="lg:h-400 lg:p-100 h-240">
                      <img src={platform.image} alt={platform.description} />
                    </div>
                    <div className="text-center">{platform.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* images */}
            <img className="py-3" src={hostTheater} alt="host Theater" />
            <img className="py-3" src={streamExample} alt="host Theater" />

            <div className="py-3">
              <div className="text-sky-500 text-3xl italic">
                Influencer Program
              </div>
              <div className="py-6">
                Net VR Theater can be broadcasted directly to or be hosted with
                Net VR Stream, Twitch, YouTubeLive and FacebookLive. Sign up for
                more information!
                <br />
                <br />
                Net VR Theater in compliance with all platforms mentioned
                above.*
                <br />
                <br />
                *Terms of Service are continually changing and The Net VR
                monitors these terms of services closely to verify compliance.
                User may not hold The Net VR responsible for any negative
                actions from their chosen platform. For further information
                please see our terms of service and your platform's terms of
                service.
              </div>

              {/* form */}
              <InfluencerForm />
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
