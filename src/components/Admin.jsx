import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Halmet from "./Halmet";
import Loader from "./Loader";


export default function Admin() {
  const {loader : ld} = useSelector(store=> store.db)
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
  });
  const handelSubmit = async (e) => {
    e.preventDefault();

    setLoader(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        signUpData.email,
        signUpData.password
      );
      setLoader(false);
      console.log("loges");
      navigate("/AddSale");
    } catch (error) {
      console.error(error.message);
      setLoader(false);
    }
  };
  return (
    <Halmet title="login">
      {!ld ? (
        <Loader />
      ) : (
        <section className="flex justify-center items-center flex-col gap-1 my-6">
          <h1 className="text-3xl text-black font-bold text-center p-3">
            Login
          </h1>
          <p className="text-red-600 font-bold text-xl my-2">
            this page is only for admins{" "}
          </p>

          <div className="bg-sky_blue p-8 w-4/5 rounded-md shadow-md md:w-2/5 ">
            <form onSubmit={(e) => handelSubmit(e)}>
              <input
                onChange={(e) =>
                  setSignUpData({ ...signUpData, email: e.target.value })
                }
                value={signUpData.email}
                className="block w-full mb-6 focus:outline-none border rounded px-6 py-2"
                type="email"
                placeholder="email"
              />
              <input
                onChange={(e) =>
                  setSignUpData({ ...signUpData, password: e.target.value })
                }
                value={signUpData.password}
                className="block w-full mb-6 focus:outline-none border rounded px-6 py-2"
                type="password"
                placeholder="password"
              />

              <button
                onClick={(e) => handelSubmit(e)}
                className="bg-slate-200 m-auto block text-slate-800 text-lg my-6 font-bold rounded-md px-12 py-2  "
              >
                login
              </button>
            </form>
          </div>
        </section>
      )}
    </Halmet>
  );
}
