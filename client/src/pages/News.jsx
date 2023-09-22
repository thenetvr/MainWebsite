import Footer from "../components/Footer";
// framer motion
import { motion } from "framer-motion";
import { pageVariants } from "../utils/framerMotionVariants";
import GDC_Award from '../assets/GDC_Award.png'
import Best_Tech_Award from '../assets/Best_Tech_Award.png'
import Metaverse_Diagram from '../assets/Metaverse_Diagram.png'
import News_Logo from '../assets/News_Logo.png'
import newsImages from "../utils/newsImages.jsx";


const newsInfo = {
  "The Net VR Theater Game Review":[
    "https://freeappsforme.com/net-vr-theater-review/",
    newsImages.img1,
    "April 27, 2022",
    "Free Apps For Me"],

  "S3E4: What is VR With Kyle Doran CEO of The Net VR":[
    "https://podcast.agamingmoment.com/1145324/10054730-s3e4-what-is-vr-with-kyle-doran-ceo-of-thenetvr",
    newsImages.img2,
    "February 11, 2022",
    "A Gaming Moment (podcast)"],

  "2022 Best Tech Startups in HillsboroThe Tech Tribune":[
    "https://thetechtribune.com/best-tech-startup-in-hillsboro/",
    newsImages.img3,
    "February 2, 2022",
    "The Tech Tribune"],

  "Column: Hillsboro Startup Takes Aim At Next Gen VR":[
    "https://www.bizjournals.com/portland/inno/stories/profiles/2021/11/09/column-hillsboro-startup-takes-aim-at-next-gen-vr.html",
    newsImages.img4,
    "November 9, 2021",
    "The Business Journals"],

  "Techlandia Issue 5-2021/2022":[
    "https://techlandia.org/mag/0079474001631566163/p46",
    newsImages.img5,
    "October 18, 2021",
    "Techlandia Issue 5-2021/2022"],

  "TiE Oregon Entrepreneurship":[
    "https://www.linkedin.com/posts/tie-oregon_tieoregon-entrepreneur-activity-6842242847824064512-eA3y",
    newsImages.img6,
    "September 11, 2021",
    "TiE Oregon"],

  "Nvidia 3060 RTX GPU Giveaway":[
    "https://twitter.com/thenetvr/status/1422638847712768011?s=20",
    newsImages.img7,
    "August 3, 2021",
    "GPU Giveaway"],

  "GDC Best In Play Honorable Mentions":[
    "https://www.gdconf.com/gdc-best-in-play-winners",
    newsImages.img8,
    "July 26, 2021","GDC 2021 Best In Play WINNER!"],

  "TOP Steam Games To Tryout In July 2021":[
    "https://gameskeys.net/top-steam-games-to-tryout-in-july-2021/",
    newsImages.img9,
    "July 7, 2021",
    "TOP Steam Games"],

  "Net VR Theater On Steam":[
    "https://store.steampowered.com/app/1628510/Net_VR_Theater/",
    newsImages.img10,
    "July 3, 2021",
    "Launched On Steam"],

  "The Metaverse Ecosystem Infographic":[
    "https://newzoo.com/insights/infographics/metaverse-ecosystem-infographic/",
    newsImages.img11,
    "June 25, 2021",
    "Metaverse Ecosystem Infographic"]
}

const displayNews = () => {
  const newsEvents = [];
  const itemsPerRow = 3; // Number of items per row

  // Create rows of images
  let currentRow = [];
  let count = 0;

  const imageSize = {
    height: '300px',
    width: '300px',
  };

  for (let news in newsInfo) {
    if (count < 9) {
      currentRow.push(
        <div style={{maxWidth: '300px', wordWrap: 'break-word', marginLeft: "40px"}} key={news}>
          <div className="flex flex-col items-start">
            <img className="mt-10" src={newsInfo[news][1]} alt="news image" style={imageSize}/>
            <p className="mt-2">{newsInfo[news][3]}</p>
            <p className="mt-2">{newsInfo[news][2]}</p>
          </div>
          <div className="underline mt-2 text-custom-blue">
            <a href={newsInfo[news][0]}>
              {news}
            </a>
          </div>
        </div>
      );

      count++;

      if (currentRow.length === itemsPerRow) {
        newsEvents.push(
          <div className="flex justify-center space-x-4" key={`row-${news}`}>
            {currentRow}
          </div>
        );
        currentRow = [];
      }
    } else if (count === 9) {
      newsEvents.push(
        <div style={{maxWidth: '300px', wordWrap: 'break-word', marginRight: "180px", marginLeft: "-140px"}} key={news}>
          <div className="flex flex-col items-start">
            <img className="mt-10" src={newsInfo[news][1]} alt="news image" style={imageSize}/>
            <p className="mt-2">{newsInfo[news][3]}</p>
            <p className="mt-2">{newsInfo[news][2]}</p>
          </div>
          <div className="underline mt-2 text-custom-blue">
            <a href={newsInfo[news][0]}>
              {news}
            </a>
          </div>
        </div>
      );
    }
  }

  return newsEvents;
};


export default function News() {
  return (
    <div className="bg-slate-800 h-max ">
      <div className="flex bg-black w-full">
        <p className="text-custom-blue font-myFont-lemonada font-bold italic text-4xl ml-80">News</p>
      </div>

      <div className="border-t border-custom-blue"></div>

      <div className="flex flex-col items-center bg-black w-full mt-0">
        <div>
          <img src={News_Logo} width={700} height={200} alt="Net VR Logo" />
        </div>

        <div className="flex">
          <p style={{ marginRight: '200px' }}>
            <span>Disrupt Magazine (Tech + Startups)</span>
          </p>
          <p style={{ marginLeft: '200px' }}>
            May 16, 2022
          </p>
        </div>

        <p className="mt-2 text-custom-blue">
          <a href={"https://disruptmagazine.com/kyle-doran-and-the-net-vr-creates-a-unique-and-innovative-experience-for-livestreamers-and-viewers/"}>
            <u>DKyle Doran and The Net VR Creates a Unique and Innovative Experience for Livestreamers and Viewers</u>
          </a>
        </p>
      </div>

      <div className="border-t border-custom-blue"></div>

      <motion.div
        className="flex flex-col items-center flex-grow"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className={"flex flex-wrap w-4/5 justify-center"}>
          {displayNews()}
        </div>

      </motion.div>
      <div className="flex justify-center space-x-4 mt-20 mb-10">
        <a href={"https://www.youtube.com/watch?v=obaArLqH3-g&ab_channel=TheNetVR"}><img src={GDC_Award} width={220} height={200} alt="GDC Winner 2021" /></a>
        <a href={"https://www.youtube.com/watch?v=obaArLqH3-g&ab_channel=TheNetVR"}><img src={Best_Tech_Award} width={190} height={200} alt="Best Tech Startups 2022" /></a>
        <img src={Metaverse_Diagram} width={550} height={200} alt="Metaverse Ecosystem Diagram" />
      </div>
      <Footer />
    </div>
  );
}




