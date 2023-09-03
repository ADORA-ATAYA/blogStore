import React from "react";
import { useState } from "react";

const LoginSignup = ({ authType, setAuthType }) => {
  const [authdata, setAuthdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div className="bg-white text-black w-1/3 p-2 form-container text-center">
      <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800 w-fit my-0 mx-auto">
        {authType === "login" ? (
          <span>Welcome Back</span>
        ) : (
          <span>Lets Start a New Journey</span>
        )}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {authType === "signup" && (
          <input
            type="text"
            name="username"
            value={authdata.username}
            onChange={(e) => {
              setAuthdata({ ...authdata, [e.target.name]: e.target.value });
            }}
            placeholder="Username"
            className="block my-4 mx-auto p-2 w-2/3 outline outline-1"
          />
        )}
        <input
          type="text"
          name="email"
          value={authdata.email}
          onChange={(e) => {
            setAuthdata({ ...authdata, [e.target.name]: e.target.value });
          }}
          placeholder="Email or Phone"
          className="block my-4 mx-auto p-2 w-2/3 outline outline-1"
        />
        <input
          type="password"
          name="password"
          value={authdata.password}
          onChange={(e) => {
            setAuthdata({ ...authdata, [e.target.name]: e.target.value });
          }}
          placeholder="Password"
          className="block my-4 mx-auto p-2 w-2/3 outline outline-1"
        />
        {authType === "login" ? (
          <button className="block my-4 mx-auto bg-orange-500 p-2 w-2/5 outline outline-1 hover:bg-white hover:text-xl">
            Login
          </button>
        ) : (
          <button className="block my-4 mx-auto bg-orange-500 p-2 w-2/5 outline outline-1 hover:bg-white hover:text-xl">
            Sign Up
          </button>
        )}
      </form>
      {authType === "login" ? (
        <p>
          Dont have an account Sign up{" "}
          <button
            onClick={() => {
              setAuthType("signup");
            }}
            className="underline hover:text-blue-700"
            to="/"
          >
            Here
          </button>{" "}
        </p>
      ) : (
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
      )}
      <button className="block h-8 w-4/5 bg-white text-black outline outline-1 my-2 mx-auto hover:bg-white hover:text-xl">
        Login using Google
      </button>
      <button
        onClick={() => {
          setAuthType("phone");
        }}
        className="block h-8 w-4/5 bg-teal-400 text-black outline outline-1 my-2 mx-auto hover:bg-white hover:text-xl"
      >
        Login using Phone
      </button>
      <button className="block h-8 w-4/5 bg-blue-500 text-black outline outline-1 my-2 mx-auto hover:bg-white hover:text-xl">
        Login using Facebook
      </button>
    </div>
  );
};

export default LoginSignup;
