import Footer from "../components/Footer";
// framer motion
import { motion } from "framer-motion";
import { pageVariants } from "../utils/framerMotionVariants";
import { useEffect, useState } from "react";
import axios from "axios";
export default function ContactUs() {
  const fieldText = "w-64 text-xl bg-slate-50 text-black p-1 rounded";
  const areaText= "text-black bg-slate-50 w-full rounded";
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    console.log(scrollPosition);
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(window);

  const[email, setEmail] = useState("")
  const[fname, setFirstName] = useState("")
  const[lname, setLastName] = useState("")
  const[phoneNumber, setPhoneNumber] = useState("")
  const[message, setMessage] = useState("")
  function sendMail() {
    if (message) {
      axios.post("http://localhost:8080/contactUsMail", {
        firstName: fname,
        lastName: lname,
        email:email,
        phoneNumber: phoneNumber,
        message: message,
      })
    }
  }
  return (
    <div className="bg-slate-800 h-max">
      <div className="flex flex-col items-center h-screen">
        <div>
          <motion.div
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onScroll={handleScroll}
          >
            <h1 className={"text-[60px] text-custom-blue"}> Contact US </h1>
            <p className={"text-[20px]"}> Use the form below to contact us for any special requests, inquiries, questions, concerns or <br/> for support.
              Also feel free to join our community Discord.</p>
            <form className={"h-[300px] w-[485px] mt-10 m-auto"}>
              <div className={"flex h-20"}>
                <div className={" h-12 w-[220px] mr-10"}>
                  <label className={" text-[24px] block"}> First Name </label>
                  <input className={fieldText} type={"text"} name={"fname"} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div>
                  <div className={"h-12 w-80"}>
                    <label className={"text-[24px] block"}> Last Name </label>
                    <input className={fieldText} type={"text"} name={"lname"} onChange={(e) => setLastName(e.target.value)}/>
                  </div>
                </div>
              </div>

              <div className={"flex h-20 w-4/5"}>
                <div className={" h-14 w-[220px] mr-10"}>
                  <label className={"text-[24px] block"}> Email Address</label>
                  <input className={fieldText} type={"email"} name={"email"} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={" h-14 w-80"}>
                  <label className={"text-[24px] block"}> Phone Number</label>
                  <input className={fieldText} type={"tel"} name={"phoneNumber"} onChange={(e) => setPhoneNumber(e.target.value)}/>
                </div>
              </div>

              <div>
                <label className={"text-[24px] block"}>Send a message</label>
                <textarea rows={8} className={areaText} type={"text"} name={"userMessage"} onChange={(e) => setMessage(e.target.value)}/>
              </div>
              <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 " +
                  "float-right mt-5"} type={"submit"} onClick={() => sendMail()}>
                Submit</button>
            </form>

          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
