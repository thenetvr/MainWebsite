import Footer from "../components/Footer";
import creatorIcon from '../utils/creatorImages.jsx';
import NetVRTheater from '../assets/NetVRTheaterHostYourOwnContent.webp.png'
// framer motion
import { motion } from "framer-motion";
import { pageVariants } from "../utils/framerMotionVariants";
const contentCreators = {"Awra":["https://www.twitch.tv/awra_", creatorIcon.AwraIcon], "Cosmos910":["https://www.twitch.tv/cosmos910", creatorIcon.Cosmos910Icon],
    "Roberts_1911TV":["https://www.twitch.tv/roberts_1911tv", creatorIcon.Roberts_1011TVIcon], "ExpandingButter":["https://www.twitch.tv/expandingbutter", creatorIcon.ExpandingButterIcon],
    "PerfectzTV":["https://www.twitch.tv/perfectztv", creatorIcon.PerfectzTVIcon], "Apherix_TV":["https://www.twitch.tv/apherix_tv", creatorIcon.Apherix_TVIcon],
    "HarmonigTV":["https://www.twitch.tv/harmoniqtv", creatorIcon.HarmonfigTVIcon], "Turb0Sunshine":["https://www.twitch.tv/turb0sunshine",creatorIcon.Turb0SunshineIcon],
    "Daygon07":["https://www.twitch.tv/daygon07",creatorIcon.Daygon07Icon], "Mikifita":["https://www.twitch.tv/mikifita",creatorIcon.MikifitaIcon],
    "Ubershens":["https://www.twitch.tv/ubershens", creatorIcon.UbershensIcon],"TomyPhD":["https://www.twitch.tv/tomyphd", creatorIcon.TomyPhDIcon],
    "Steazey":["https://www.twitch.tv/steazey",creatorIcon.SteazeyIcon], "Catzawr":["https://www.twitch.tv/catzawr", creatorIcon.CatzawrIcon],
    "JonsyGG":["https://www.twitch.tv/jonsygg", creatorIcon.JonsyGGIcon],"RaiderRCLive":["https://www.twitch.tv/raiderrclive", creatorIcon.RaiderRCLiveIcon]}

const displayCreators = () => {
    const creators = [];
    for (let username in contentCreators) {
        creators.push(
            <div className={"underline text-center"}>
                <a href={contentCreators[username][0]}>
                    <img className={""} src={contentCreators[username][1]} alt="creator image"/>
                    {username}</a>
            </div>
        )
    }
    return creators;
}
export default function Creators() {
        return (
            <div className="bg-slate-800 h-max">
                <div className="flex flex-col items-center h-fit lg:px-60 p-10">
                    <motion.div
                        variants={pageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                    <div className={"flex flex-col w-2/3 items-center mx-auto mb-10"}>
                        <div>
                            <h1 className={"text-4xl text-custom-blue mb-4"}>Content Creators</h1>
                        </div>
                        <div className={"flex flex-col items-center md:flex-row items-normal"}>
                            <div>
                                <img src={NetVRTheater} alt="image"/>
                            </div>

                            <div className={"ml-4"}>
                            <p className={"text-xl leading-6 mt-4"}>Check out our featured creators that are currently using <br/>
                                    the auto-host through The Net VR Theater.<br/>
                                    If you want to be featured, then sign up for our<br/>
                                    Influencer Program!</p>
                            </div>
                        </div>

                    </div>
                    <div className={"flex flex-wrap w-3/5 mx-auto justify-center md:justify-normal"}>
                        {displayCreators()}
                    </div>
                    </motion.div>
                </div>
                <Footer/>
            </div>
        );
}
