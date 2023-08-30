import Footer from "../components/Footer";
// framer motion
import { motion } from "framer-motion";
import { pageVariants } from "../utils/framerMotionVariants";

// constants
import {
  socialMediaData,
  definitions,
  personalData,
  usageData,
  cookies,
} from "../utils/Constants";

export default function Policy() {
  const header = "text-sky-500 text-4xl font-normal pb-8";
  const listEl = "list-disc text-sm pl-10";

  return (
    <div className="bg-slate-800 h-max">
      <div className="flex flex-col h-fit lg:px-60 p-10">
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* prvacy policy */}
          <div className="py-7">
            <h1 className={header}>Privacy Policy</h1>
            <p className="text-sm">Last updated: December 14, 2022</p>
            <p className="text-sm">
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </p>
            <p className="text-sm">
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy.
            </p>
          </div>

          {/* interpretation and definitions */}
          <h1 className={header}>Interpretation And Definitions</h1>

          {/* Interpretation */}
          <div className="py-7">
            <h1 className={header}>Interpretation</h1>
            <p className="text-sm">
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>
          </div>

          {/* Definitions */}
          <div className="py-7">
            <h1 className={header}>Definitions</h1>
            <p className="text-sm">For the purposes of this Privacy Policy:</p>
            <ul className={listEl}>
              {definitions &&
                definitions.map((point, idx) => (
                  <li key={idx} className="text-sm">
                    {point}
                  </li>
                ))}
              <li>
                Website refers to The Net VR, accessible from{" "}
                <a href="https://www.thenetvr.com">https://www.thenetvr.com</a>
              </li>
            </ul>
          </div>

          {/* Collecting and Using Your Personal Data */}
          <h1 className={header}>Collecting and Using Your Personal Data</h1>

          {/* Types of Data Collected */}
          <h1 className={header}>Types of Data Collected</h1>

          {/* Personal Data */}
          <div className="py-7">
            <h1 className={header}>Personal Data</h1>
            <p className="text-sm">
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information that can be used to contact or
              identify You. Personally identifiable information may include, but
              is not limited to:
            </p>
            <ul className={listEl}>
              {personalData &&
                personalData.map((point, idx) => (
                  <li key={idx} className="text-sm">
                    {point}
                  </li>
                ))}
            </ul>
          </div>

          {/* Usage Data */}
          <div className="py-7">
            <h1 className={header}>Usage Data</h1>
            {usageData &&
              usageData.map((point, idx) => (
                <p key={idx} className="text-sm">
                  {point}
                </p>
              ))}
          </div>

          {/* Information from Third-Party Social Media Services */}
          <div className="py-7">
            <h1 className={header}>
              Information from Third-Party Social Media Services
            </h1>
            <p className="text-sm">
              The Company allows You to create an account and log in to use the
              Service through the following Third-party Social Media Services:
            </p>
            <ul className={listEl}>
              {["Google", "Facebook", "Twitter", "LinkedIn"].map(
                (point, idx) => (
                  <li key={idx} className="text-sm">
                    {point}
                  </li>
                )
              )}
            </ul>
            {socialMediaData &&
              socialMediaData.map((point, idx) => (
                <p key={idx} className="text-sm">
                  {point}
                </p>
              ))}
          </div>

          {/* Tracking Technology and Cookies */}
          <div className="py-7">
            <h1 className={header}>Tracking Technology and Cookies</h1>
            <p className="text-sm">
              We use Cookies and similar tracking technologies to track the
              activity on Our Service and store certain information. Tracking
              technologies used are beacons, tags, and scripts to collect and
              track information and to improve and analyze Our Service. The
              technologies We use may include:{" "}
            </p>
            <ul className={listEl}>
              {cookies &&
                cookies.points.map((point, idx) => (
                  <li key={idx} className="text-sm">
                    {point}
                  </li>
                ))}
            </ul>
            <p className="text-sm">
              Cookies can be "Persistent" or "Session" Cookies. Persistent
              Cookies remain on Your personal computer or mobile device when You
              go offline, while Session Cookies are deleted as soon as You close
              Your web browser.
            </p>
            <p className="text-sm">
              We use both Session and Persistent Cookies for the purposes set
              out below:
            </p>
            <ul className={listEl}>
              {cookies &&
                cookies.purposes.map((purpose, idx) => (
                  <li key={idx} className="text-sm">
                    <p>{purpose.name}</p>
                    <p>Type: {purpose.type}</p>
                    <p>Administered By: {purpose.administeredBy}</p>
                    <p>Purpose: {purpose.purpose}</p>
                  </li>
                ))}
            </ul>
            <p className="text-sm">
              For more information about the cookies we use and your choices
              regarding cookies, please visit our Cookies Policy or the Cookies
              section of our Privacy Policy.
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
