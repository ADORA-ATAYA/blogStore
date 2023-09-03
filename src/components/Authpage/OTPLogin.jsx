import React from "react";
import { useState } from "react";

const PhoneLogin = ({ authType, setAuthType }) => {
  const [authdata, setAuthdata] = useState({ phone: "", otp: "" });

  return (
    <div className="bg-white text-black w-1/3 p-2 form-container text-center">
      <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800 w-fit my-0 mx-auto">
        <span>Login using Phone</span>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="tel"
          name="phone"
          value={authdata.phone}
          onChange={(e) => {
            setAuthdata({ ...authdata, [e.target.value]: e.target.value });
          }}
          placeholder="Enter Phone number with country code"
          className="block my-4 mx-auto p-2 w-2/3 outline outline-1"
        />
        {authType !== "otp" && (
          <button
            onClick={() => {
              setAuthType("otp");
              console.log(authType);
            }}
            className="block my-4 mx-auto bg-orange-500 p-2 w-2/5 outline outline-1 hover:bg-white hover:text-xl"
          >
            Get OTP
          </button>
        )}
        {authType === "otp" && (
          <>
            <input
              type="number"
              name="otp"
              value={authdata.otp}
              onChange={(e) => {
                setAuthdata({
                  ...authdata,
                  [e.target.value]: e.target.value,
                });
              }}
              placeholder="Enter OTP received on your Phone number"
              className="block my-4 mx-auto p-2 w-2/3 outline outline-1"
            />
            <button className="block my-4 mx-auto bg-orange-500 p-2 w-2/5 outline outline-1 hover:bg-white hover:text-xl">
              Verify OTP
            </button>
          </>
        )}
      </form>
      <p>
        Already have an account Login{" "}
        <button
          onClick={() => {
            setAuthType("login");
          }}
          className="underline hover:text-blue-700"
          to="/"
        >
          Here
        </button>
      </p>
      <button className="block h-8 w-4/5 bg-white text-black outline outline-1 my-2 mx-auto hover:bg-white hover:text-xl">
        Login using Google
      </button>
      <button className="block h-8 w-4/5 bg-blue-500 text-black outline outline-1 my-2 mx-auto hover:bg-white hover:text-xl">
        Login using Facebook
      </button>
    </div>
  );
};

export default PhoneLogin;
