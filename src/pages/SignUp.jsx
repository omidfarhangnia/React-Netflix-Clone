import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-screen object-cover top-0 left-0"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/61e79073-50cf-4f7b-9a23-73290e6f7dca/f6d329fb-4a43-48a4-8822-bd0a4706b2e1/NL-en-20230410-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/"
      />
      <div className="absolute w-full h-screen bg-black/75"></div>
      <div className="fixed w-full h-full px-4 py-24 z-20">
        <div className="max-w-[450px] h-[600px] bg-black mx-auto text-white">
          <div className="max-w-[320px] py-16 mx-auto">
            <h1 className="text-4xl font-bold">Sign UP</h1>
            <form className="flex flex-col py-4">
              <input
                type="email"
                className="placeholder:text-white/60 p-4 my-3 bg-white/30 border-none focus-within:outline-none focus-within:bg-white/70 focus-within:text-black focus-within:placeholder:text-black/75"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                type="password"
                className="placeholder:text-white/60 p-4 my-3 bg-white/30 border-none focus-within:outline-none focus-within:bg-white/70 focus-within:text-black focus-within:placeholder:text-black/75"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button className="bg-red-600 py-3 my-6 font-bold">
                Sign up
              </button>
              {/* <div>
            <label>Remember me</label>
            <input type="checkbox" />
            </div> */}
              <div className="flex justify-between text-sm">
                <span>you have already an account?</span>
                <Link to="../../login" className="font-bold">
                  Sign In Now
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
