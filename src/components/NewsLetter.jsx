import { AiFillAlert } from "react-icons/ai";
import { Link } from "react-router-dom";
import { db, storage } from "../firebase/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import instegram from "../assets/instagram.png";
import tikTokBlack from "../assets/tik-tok-black.png";
import tikTokWhite from "../assets/tik-tok-white.png";
import facebook from "../assets/icons8-facebook-48.png";
import email from "../assets/gmail.png";
import twitter from "../assets/1690643591twitter-x-logo-png.png";
import Halmet from "./Halmet";
import { useState } from "react";
export default function NewsLetter({ show }) {
  const [emailAdrs, setEmailAdrs] = useState("");
  const handelChange = (e) => {
    setEmailAdrs(e.target.value);

    console.log(validateEmail(emailAdrs));
  };
  const validateEmail = (email) => {
    // Validation logic for email format
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const uploadProductDataToFirebase = async (e) => {
    e.preventDefault();

    try {
      if (validateEmail(emailAdrs)) {
        const docRef = await addDoc(collection(db, "emails"), {
          email: emailAdrs,
        });
        console.log("Email uploaded successfully!");
      } else {
        console.log("Invalid email format!");
      }
    } catch (error) {
      console.error("Error uploading product data: ", error);
    }
  };
  return (
    <Halmet title="Subscribe">
      <div id="#Subscribe" className="relative bg-black/95">
        <div className="absolute inset-x-0 bottom-0">
          {show ? (
            <svg
              viewBox="0 0 224 12"
              fill="currentColor"
              className="w-full -mb-1 text-white"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
            </svg>
          ) : null}
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Subscribe to our newsletter
            </h2>
            <p className="mb-6 text-base text-indigo-200 md:text-lg">
              Stay in the loop with our newsletter and be the first to discover
              exciting updates, exclusive offers, and valuable insights
              delivered directly to your inbox
            </p>
            <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
              <input
                onChange={(e) => handelChange(e)}
                placeholder="Email"
                required=""
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3  transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
              />
              <button
                onClick={(e)=> uploadProductDataToFirebase(e)}
                className="flex items-center gap-2 justify-center w-full h-12 px-6 tracking-wide text-slate-400 font-bold transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-white hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
              >
                <AiFillAlert className="text-2xl mb-1" />
                <p>Subscribe</p>
              </button>
            </form>
            <ul
              className={`
             flex  items-center w-full   justify-center mt-5 space-x-4`}
            >
              <a href="">
                <img className="w-8" src={instegram} alt="" />
              </a>
              <a href="">
                <img className="w-8" src={tikTokBlack} alt="" />
              </a>
              <a href="#">
                <img className="w-8" src={email} alt="" />
              </a>
              <a href="#">
                <img className="w-10" src={facebook} alt="" />
              </a>
              <a href="#">
                <img className="w-8" src={twitter} alt="" />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </Halmet>
  );
}
