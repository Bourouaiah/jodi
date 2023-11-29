import React from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader";

export default function Emails() {
  const { loader, Emails } = useSelector((store) => store.db);
  console.log(Emails);
  return (
    <div className="bg-sky_blue p-12">
      {!loader ? (
        <Loader />
      ) : (
        <div>
          {Emails.length > 0 ? (
            Emails.map((item) => (
              <p key={item.id} className="text-xl font-medium my-2 text-white">
                {item.email}
              </p>
            ))
          ) : (
            <h1 className="text-center text-white text-2xl ">no emails</h1>
          )}
        </div>
      )}
    </div>
  );
}
