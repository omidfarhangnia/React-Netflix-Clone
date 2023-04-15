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
                className="placeholder:text-white/60 p-4 my-3 rounded bg-white/30 border-none focus-within:outline-none focus-within:bg-white/70 focus-within:text-black focus-within:placeholder:text-black/75"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                type="password"
                className="placeholder:text-white/60 p-4 my-3 rounded bg-white/30 border-none focus-within:outline-none focus-within:bg-white/70 focus-within:text-black focus-within:placeholder:text-black/75"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button className="bg-red-600 py-3 my-6 font-bold rounded">
                Sign up
              </button>
              <div className="flex my-3 justify-between select-none">
                <div>
                  <input type="checkbox" id="checkBox__Id" />
                  <label for="checkBox__Id" className="cursor-pointer ml-1">
                    Remember me
                  </label>
                </div>
                <p className="text-sm text-gray-500">Need Help?</p>
              </div>
              <div className="flex justify-between items-center text-sm mt-3">
                <span className="text-gray-500">already subscribed to netflix</span>
                <Link to="../../login" className="font-bold bg-red-600 px-4 py-2 rounded">
                  Sign In
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
