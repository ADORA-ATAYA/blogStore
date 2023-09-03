import React, { useState } from "react";
import InfoContainer from "../../components/Authpage/InfoContainer";
import PhoneLogin from "../../components/Authpage/OTPLogin";
import LoginSignup from "../../components/Authpage/LoginSignup";

const Authpage = () => {
  const [authType, setAuthType] = useState("login");

  return (
    <div className="bg-orange-500 h-full text-white pt-20 pb-20 mt-12 flex justify-center gap-4">
      <InfoContainer />
      {(authType === "login" || authType === "signup") && (
        <LoginSignup authType={authType} setAuthType={setAuthType} />
      )}
      {(authType === "phone" || authType === "otp") && (
        <PhoneLogin authType={authType} setAuthType={setAuthType} />
      )}
    </div>
  );
};

export default Authpage;
