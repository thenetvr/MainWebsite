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
  useOfPersonalData,
  retentionOfPersonalData,
  transferOfYourPersonalData,
  deleteYourPersonalData,
  legalRequirements,
} from "../utils/constants";

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
          {/* privacy policy */}
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

          {/* Use of Your Personal Data */}
          <div className="py-7">
            <h1 className={header}>Use of Your Personal Data</h1>
            <p className="text-sm">
              The Company may use Personal Data for the following purposes:
            </p>
            <ul className={listEl}>
              {useOfPersonalData &&
                useOfPersonalData.section1.map((point, idx) => (
                  <li key={idx} className="text-sm">
                    {point}
                  </li>
                ))}
            </ul>
            <p className="text-sm">
              {" "}
              We may share Your personal information in the following
              situations:
            </p>
            <ul className={listEl}>
              {useOfPersonalData &&
                useOfPersonalData.section2.map((point, idx) => (
                  <li key={idx} className="text-sm">
                    {point}
                  </li>
                ))}
            </ul>
          </div>

          {/* Retention of Your Personal Data */}
          <div className="py-7">
            <h1 className={header}>Retention of Your Personal Data</h1>
            {retentionOfPersonalData &&
              retentionOfPersonalData.map((point, idx) => (
                <p key={idx} className="text-sm">
                  {point}
                </p>
              ))}
          </div>

          {/* Transfer of Your Personal Data */}
          <div className="py-7">
            <h1 className={header}>Transfer of Your Personal Data</h1>
            {transferOfYourPersonalData &&
              transferOfYourPersonalData.map((point, idx) => (
                <p key={idx} className="text-sm pt-3">
                  {point}
                </p>
              ))}
          </div>

          {/* Delete Your Personal Data */}
          <div className="py-7">
            <h1 className={header}>Delete Your Personal Data</h1>
            {deleteYourPersonalData &&
              deleteYourPersonalData.map((point, idx) => (
                <p key={idx} className="text-sm pt-3">
                  {point}
                </p>
              ))}
          </div>

          {/* Disclosure of Your Personal Data */}
          <div className="py-7">
            <h1 className={header}>Disclosure of Your Personal Data</h1>
            {/* Business Transactions */}
            <div>
              <h1 className={header}>Business Transactions</h1>
              <p className="text-sm pb-3">
                If the Company is involved in a merger, acquisition or asset
                sale, Your Personal Data may be transferred. We will provide
                notice before Your Personal Data is transferred and becomes
                subject to a different Privacy Policy.
              </p>
            </div>

            {/* Law Enforcement */}
            <div>
              <h1 className={header}>Law Enforcement</h1>
              <p className="text-sm pb-3">
                Under certain circumstances, the Company may be required to
                disclose Your Personal Data if required to do so by law or in
                response to valid requests by public authorities (e.g. a court
                or a government agency).
              </p>
            </div>

            {/* Other Legal Requirements */}
            <div>
              <h1 className={header}>Other Legal Requirements</h1>
              <p className="text-sm">
                The Company may disclose Your Personal Data in the good faith
                belief that such action is necessary to:
              </p>
              <ul className={listEl}>
                {legalRequirements &&
                  legalRequirements.map((point, idx) => (
                    <li key={idx} className="text-sm">
                      {point}
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Security of Your Personal Data */}
          <div className="py-7">
            <h1 className={header}>Security of Your Personal Data</h1>
            <p className="text-sm">
              The security of Your Personal Data is important to Us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While We strive to
              use commercially acceptable means to protect Your Personal Data,
              We cannot guarantee its absolute security.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="py-7">
            <h1 className={header}>Children's Privacy</h1>
            <p className="text-sm">
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 13. If You are a parent or guardian and You are
              aware that Your child has provided Us with Personal Data, please
              contact Us. If We become aware that We have collected Personal
              Data from anyone under the age of 13 without verification of
              parental consent, We take steps to remove that information from
              Our servers.
            </p>
            <p className="text-sm">
              If We need to rely on consent as a legal basis for processing Your
              information and Your country requires consent from a parent, We
              may require Your parent's consent before We collect and use that
              information.
            </p>
          </div>

          {/* Links to other websties */}
          <div className="py-7">
            <h1 className={header}>Links to Other Websties</h1>
            <p className="text-sm">
              Our Service may contain links to other websites that are not
              operated by Us. If You click on a third party link, You will be
              directed to that third party's site. We strongly advise You to
              review the Privacy Policy of every site You visit. We have no
              control over and assume no responsibility for the content, privacy
              policies or practices of any third party sites or services.
            </p>
          </div>

          {/* Changes to this Privacy Policy */}
          <div className="py-7">
            <h1 className={header}>Changes to this Privacy Policy</h1>
            <p className="text-sm">
              We may update Our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page.
              We will let You know via email and/or a prominent notice on Our
              Service, prior to the change becoming effective and update the
              "Last updated" date at the top of this Privacy Policy. You are
              advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </div>

          {/* Contact Us */}
          <div className="py-7">
            <h1 className={header}>Contact Us</h1>
            <p className="text-sm">
              If you have any questions about this Privacy Policy, You can
              contact us:
            </p>
            <ul className={listEl}>
              <li className="text-sm">By email: info@thenetvr.com</li>
              <li className="text-sm">
                By visiting this page on our website: https://www.thenetvr.com
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
