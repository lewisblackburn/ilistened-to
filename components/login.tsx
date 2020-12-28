import React from "react";
import { REDIRECT_URI } from "../lib/spotify";

interface LoginProps {}

const loginWithSpotify = (e: any) => {
  e.preventDefault();
  window.location.href = REDIRECT_URI;
};

export const Login: React.FC<LoginProps> = ({}) => {
  return (
    <div className="flex flex-col gap-10 w-full h-full justify-center items-center">
      <h1 className="flex flex-col items-center text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">Find the music</span>
        <span className={`block text-green-400 xl:inline`}>
          you've been listening to.
        </span>
      </h1>
      <div className="rounded-md shadow">
        <button
          onClick={(e) => loginWithSpotify(e)}
          className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500 md:py-4 md:text-lg md:px-10`}
        >
          Sign in with Spotify Premium
        </button>
      </div>
    </div>
  );
};
