import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    try {
      logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  
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
          <div className="max-w-[320px] py-16 mx-auto px-5">
            <h1 className="text-4xl font-bold">Sign In</h1>
            {error ? (
              <p className="text-red-600 mt-4 capitalize">
                your email or password is wrong
              </p>
            ) : null}
            <form className="flex flex-col py-4" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="placeholder:text-white/60 p-4 my-3 rounded bg-white/30 border-none focus-within:outline-none focus-within:bg-white/70 focus-within:text-black focus-within:placeholder:text-black/75"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassowrd(e.target.value);
                }}
                className="placeholder:text-white/60 p-4 my-3 rounded bg-white/30 border-none focus-within:outline-none focus-within:bg-white/70 focus-within:text-black focus-within:placeholder:text-black/75"
                placeholder="Password"
                autoComplete="current-password"
              />
              <input
                type="submit"
                className="bg-red-600 py-3 my-6 font-bold rounded"
                value={"Sign In"}
              />
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
                <span className="text-gray-500 capitalize">new to netflix</span>
                <Link
                  to="/signup"
                  className="font-bold bg-red-600 px-4 py-2 rounded"
                >
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
