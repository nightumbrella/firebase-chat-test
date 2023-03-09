import React from "react";
import { auth, provider } from "./fitebase-config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import "./auth.css"

const cookies = new Cookies();
const Auth = ({setIsAuth}) => {
  const signInWithGoggle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true)
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <p>Sign in With Google To Continue</p>
      <button onClick={signInWithGoggle}>Sign in With Google</button>
    </div>
  );
};

export default Auth;
