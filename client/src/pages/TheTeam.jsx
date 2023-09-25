import Footer from "../components/Footer";
// framer motion
import { motion } from "framer-motion";
import { pageVariants } from "../utils/framerMotionVariants";
import KyleImage from "../assets/KyleImage.png"
import BruinImage from "../assets/BruinImage.png"
import SusanImage from "../assets/SusanImage.png"
import DavidImage from "../assets/DavidImage.png"
import MikeImage  from "../assets/MikeXieImage.png"
import NoProfile from "../assets/NoProfilePic.png"
import LinkedinIcon from "../assets/linkedin.png"
import TwitterIcon from "../assets/twitter.png"
import TwitchIcon from "../assets/twitch.png"
import DiscordIcon from "../assets/discord.png"
import TIkTokIcon from "../assets/tik-tok.png"

export default function TheTeam() {
  return (
    <div className="bg-slate-800 h-max">
      <div className="flex flex-col items-center h-screen">
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
        <h1 className={"text-2xl text-custom-blue"}>THE NET VR TEAM</h1>
            <div className={"flex mt-[10px]"}>
              <div className={"text-xl text-custom-blue"}>About Us</div>
              <div className={"ml-[70px]"}>Founded In 2019, We Are A Bootstrap Virtual Reality Developing <br/> Company Headquartered In Hillsboro,
                  Oregon. We Are Currently <br/> Developing Our First Application, Net VR Theater, Where We Bring <br/> Live
                  Streaming And VR (With And Without A Headset) Together. <br/> #NoVRVR</div>
            </div>
            <div className={"text-2xl mt-[20px]"}>Meet The Team</div>
            <div className={"flex mt-3"}>
                <img className={"h-[100px] w-[100px]"} src={KyleImage}/>
                <div className={"ml-[20px]"}>
                    <h2 className={"text-2xl uppercase"}>Kyle Doran</h2>
                    <p className={"text-lg"}>Chief executive Officer (CEO)</p>
                    <p className={"flex"}> <img className={"h-[40px] w-[40px]"} src={LinkedinIcon}/> <img className={"h-[40px] w-[40px] ml-2"} src={TwitterIcon}/> <img className={"h-[40px] w-[40px] ml-2"} src={TwitchIcon}/></p>
                    <p>Kyle Is Currently The Co-Founder And CEO Of The Net VR. He Has A <br/>
                        Bachelor Of Science Degree From Oregon State University With A Focus <br/>
                        In Engineering And Business. Kyle's First Stint Of VR Dates Back To The <br/>
                        Launch Of The Nintendo Virtual Boy In 1995. He Has Been Passionate <br/>
                        About Gaming Ever Since. Another Passion Of His Is Continually <br/> Striving To Be A Positive Leader So It Is Only Fitting He Has Become As<br/>
                        Such Of A Growing Gaming Company.</p>
                </div>
            </div>
            <div className={"flex mt-4"}>
                <div>
                    <h2 className={"text-2xl uppercase"}>Bruin Peyton</h2>
                    <p className={"text-lg"}>Chief Technology Officer (CTO)</p>
                    <p className={"flex"}> <img className={"h-[40px] w-[40px]"} src={LinkedinIcon} /> <img className={"h-[40px] w-[40px]"} src={DiscordIcon}/> <img className={"h-[40px] w-[40px]"} src={TIkTokIcon}/> </p>
                    <p>Bruin Is Currently The Co-Founder And CTO Of The Net VR. Bruin Is A <br />
                        Self-Taught Developer With Over 20 Years Of Experience. He Has Lead <br />
                        Several Teams Within Corporate IT Before Co-Founding The Company. <br/>
                        His Primary Expertise Include C#, Databases, Networking And Unity</p>
                </div>
                <img className={"h-[100px] w-[100px]"} src={BruinImage}/>
            </div>
            <div className={"flex mt-4"}>
                <img className={"h-[100px] w-[100px]"} src={SusanImage}/>
                <div>
                    <h2 className={"text-2xl uppercase"}>Susan Sunwoo</h2>
                    <p className={"text-lg"}>Chief Operations Officer (COO)</p>
                    <p className={"flex"}> <img className={"h-[40px] w-[40px]"} src={LinkedinIcon}/> <img className={"h-[40px] w-[40px]"} src={TwitchIcon}/> </p>
                    <p>Susan Is Currently The COO Of The Net VR And An E-Commerce <br/>
                        Entrepreneur With A Successful Stationary Company. She Is A Graduate <br/>
                        Of The University Of Houston With A Bachelor Of Business <br/>
                        Administration Degree In Finance And Marketing. In Her Personal Life <br/>
                        She Co-Founded An Event And Movement For Self Growth, Mental <br/>
                        Health And Community Called Define And Flourish. D&F's Motto Was <br/>
                        "Define Your Passion And Flourish In Life". She Discovered Gaming At <br/>
                        The Age Of 6 Playing Nintendo Then Moved Onto PC Gaming And <br/>
                        Hasn't Stopped Since</p>
                </div>
            <div className={"flex mt-4"}>
                <div>
                    <h2 className={"text-2xl uppercase"}>David Griffin</h2>
                    <p className={"text-lg"}>Chief Financial Officer (CFO)</p>
                    <p className={"flex"}> <img className={"h-[40px] w-[40px]"} src={DiscordIcon}/> </p>
                    <p>David Is Currently The CFO Of The Net VR. He Has A Bachelor Of <br/>
                        Science Degree From The University Of Oregon, With Majors In <br/>
                        Mathematics And Economics And Minors In Business, Chemistry, And <br/>
                        Political Science. He Has Over 15 Years Of Self-Employment And <br/>
                        Consulting Experience, And Has Spent The Last 7 Years As A Digital <br/>
                        Nomad</p>
                </div>
                <img className={"h-[100px] w-[100px]"} src={DavidImage}/>
            </div>

             <div className={"flex mt-4"}>
                <img className={"h-[100px] w-[100px]"} src={MikeImage}/>
                <div className={"ml-[20px]"}>
                    <h2 className={"text-2xl uppercase"}>Mike Xie</h2>
                    <p className={"text-lg"}>Chief Technology Officer (CTO)</p>
                    <p className={"flex"}> <img className={"h-[40px] w-[40px]"} src={LinkedinIcon}/></p>
                    <p>Mike is Currently The CTO of The NetVR. He is helping Develop Software.</p>
                </div>
            </div>

            <div className={"flex mt-4"}>
                <div>
                    <h2 className={"text-2xl uppercase"}>Yupeng Zheng</h2>
                    <p className={"text-lg"}>Software Developer</p>
                    <p className={"flex"}> <img className={"h-[40px] w-[40px]"} src={LinkedinIcon}/> </p>
                    <p>Yupeng Zheng is Currently A Software DEveloper at The NetVR</p>
                </div>
                <img className={"h-[100px] w-[100px]"} src={NoProfile}/>
            </div>

            <div className={"flex mt-4"}>
                <img className={"h-[100px] w-[100px]"} src={NoProfile}/>
                <div className={"ml-[20px]"}>
                    <h2 className={"text-2xl uppercase"}>Sarah Kugelmas</h2>
                    <p className={"text-lg"}>Software Developer</p>
                    <p className={"flex"}> <img className={"h-[40px] w-[40px]"} src={LinkedinIcon}/></p>
                    <p>Sarah Kugelmas is Currently a Software Developer at The NetVR</p>
                </div>
            </div>

            <div className={"flex mt-4"}>
                <div>
                    <h2 className={"text-2xl uppercase"}>Noah Fajarda</h2>
                    <p className={"text-lg"}>Software Developer</p>
                    <p className={"flex"}> <img className={"h-[40px] w-[40px]"} src={LinkedinIcon}/> </p>
                    <p>Noah Fajarda is Currently A Software Developer at The NetVR</p>
                </div>
                <img className={"h-[100px] w-[100px]"} src={NoProfile}/>
            </div>

            <div className={"flex mt-4"}>
                <img className={"h-[100px] w-[100px]"} src={NoProfile}/>
                <div className={"ml-[20px]"}>
                    <h2 className={"text-2xl uppercase"}>Samuel Oyeneyin</h2>
                    <p className={"text-lg"}>Software Developer</p>
                    <p className={"flex"}> <img className={"h-[40px] w-[40px]"} src={LinkedinIcon}/></p>
                    <p>Samuel Oyeneyin is Currently a Software Developer at The NetVR</p>
                </div>
            </div>

            <div className={"flex mt-4"}>
                <div>
                    <h2 className={"text-2xl uppercase"}>Abdul Hannan</h2>
                    <p className={"text-lg"}>Software Developer</p>
                    <p className={"flex"}> <img className={"h-[40px] w-[40px]"} src={LinkedinIcon}/> </p>
                    <p>Abdul Hannan is Currently A Software Developer at The NetVR</p>
                </div>
                <img className={"h-[100px] w-[100px]"} src={NoProfile}/>
            </div>

            <div className={"flex mt-4"}>
                <img className={"h-[100px] w-[100px]"} src={NoProfile}/>
                <div className={"ml-[20px]"}>
                    <h2 className={"text-2xl uppercase"}>Samuel Gbenga</h2>
                    <p className={"text-lg"}>UI/UX Designer</p>
                    <p className={"flex"}> <img className={"h-[40px] w-[40px]"} src={LinkedinIcon}/></p>
                    <p>Samuel Gbenga is Currently a Ui/UX Designer at The NetVR</p>
                </div>
            </div>

            </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
