import Footer from "../components/Footer";
// framer motion
import { motion } from "framer-motion";
import { pageVariants } from "../utils/framerMotionVariants";
import { useEffect, useState } from "react";
import axios from "axios";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { urlAPI } from "../utils/urls";
export default function ContactUs() {
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    // console.log(scrollPosition);
  };
  useEffect(() => {
    // console.log(window);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const notify = () => {
    toast.success("Message Sent! We'll Get Back To You Soon!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const [email, setEmail] = useState("");
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  async function sendMail(e) {
    try {
      e.preventDefault();
      // check for an email
      if (!email) return;
      // do post request
      await axios.post(urlAPI+"/contactUsMail", {
        firstName: fname,
        lastName: lname,
        email: email,
        phoneNumber: phoneNumber,
        message: message,
      });

      setEmail("");
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setMessage("");
      notify();
    } catch (err) {
      console.error(err);
    }
  }

    return (
        <div className="bg-slate-800 h-max">
          <div className="flex flex-col items-center h-fit mb-5">
            <div>
              <motion.div
                  variants={pageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onScroll={handleScroll}
              >
                <h1 className={"flex text-[40px] text-custom-blue justify-center md:text-[60px]"}> Contact US </h1>
                <p className={"text-[20px] w-2/3 h-1/3 m-auto text-center md:text-[25px] md:text-start"}>
                  Use the form below to contact us for any special requests,
                  inquiries, questions, concerns or <br/> for support. Also feel
                  free to join our community Discord.
                </p>
                <form className={"h-fit w-[400px] mt-10 m-auto sm:w-[485px] mt-5"}>
                  <div className={"flex flex-col h-fit items-center sm:flex-row mb-2 "}>
                    <div className={"h-fit w-fit sm:mr-10"}>
                      <label className={"text-[24px] block"}> First Name </label>
                      <input
                          className={
                            "text-xl bg-slate-50 text-black p-1 rounded w-[220px]"
                          }
                          type={"text"}
                          name={"fname"}
                          onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>

                    <div>
                      <div className={"h-fit w-fit sm:mr-10"}>
                        <label className={"text-[24px] block"}> Last Name </label>
                        <input
                            className={
                              "text-xl bg-slate-50 text-black p-1 rounded w-[220px]"
                            }
                            type={"text"}
                            name={"lname"}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className={"flex flex-col h-fit items-center sm:flex-row mb-2"}>
                    <div className={"h-fit w-fit sm:mr-10"}>
                      <label className={"text-[25px] block"}> Email Address</label>
                      <input
                          className={
                            "text-xl bg-slate-50 text-black p-1 rounded w-[220px]"
                          }
                          type={"text"}
                          name={"email"}
                          onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className={"h-fit w-fit"}>
                      <label className={"text-[24px] block"}> Phone Number</label>
                      <input
                          className={
                            "text-xl bg-slate-50 text-black p-1 rounded w-[220px]"
                          }
                          type={"text"}
                          name={"phoneNumber"}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className={"flex flex-col h-fit w-[400px] items-center sm:inline w-full"}>
                    <label className={"text-[25px] block mt-4 m-auto sm:inline"}>Send a message</label>
                    <textarea
                        rows={8}
                        className={
                          "text-xl bg-slate-50 text-black p-1 rounded w-4/5 sm:w-full"
                        }
                        type={"text"}
                        name={"userMessage"}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <button
                      className={
                          "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 " +
                          "block m-auto mt-5 sm:float-right mt-5"
                      }
                      type={"submit"}
                      onClick={sendMail}
                  >
                    Submit
                  </button>
                </form>
                {/* toast container */}
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={true}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                />
              </motion.div>
            </div>
          </div>
          <Footer/>
        </div>
    );
}
