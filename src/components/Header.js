import React, { useEffect, useState } from "react";

// material design
import { Button } from "@material-ui/core";

// icons
import {
  BsArrowsFullscreen,
  BsChatSquareDots,
  BsCheckBox,
  BsClock,
  BsMusicNoteList,
  BsFullscreenExit,
} from "react-icons/bs";

// components
import { Logo } from ".";

import { Link } from "react-router-dom"; // react router

// fullscreen api
import screenfull from "screenfull";

const Header = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <div className="flex w-full h-[12%] items-center justify-between">
      <div className="flex flex-col justify-center items-center h-full ml-5">
        <Link to="/" className="flex mt-2">
          <Logo />
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-2xl text-[#F0E9E2] poppins ml-1 font-medium">
              Lofi Club
            </h3>
            <h4 className="text-sm text-[#F0E9E2] poppins font-medium -mt-1 ml-1">
              13 listening
            </h4>
          </div>
        </Link>
      </div>
      <div className="flex items-center mr-5">
        <Link to="/chat" className="flex items-center">
          <div className="w-11 flex items-center overflow-hidden">
            <Button
              className="-mr-5 material-header-btn"
              style={{ marginLeft: "-20" }}
            >
              <BsChatSquareDots className=" text-2xl text-[#F0E9E2]" />
            </Button>
          </div>
        </Link>
        <Link to="/pomodoro" className="flex items-center">
          <div className="w-11 flex items-center overflow-hidden">
            <Button
              className="-mr-5 material-header-btn"
              style={{ marginLeft: "-20" }}
            >
              <BsClock className=" text-2xl text-[#F0E9E2]" />
            </Button>
          </div>
        </Link>
        <Link to="/tracks" className="flex items-center">
          <div className="w-11 flex items-center overflow-hidden">
            <Button
              className="-mr-5 material-header-btn"
              style={{ marginLeft: "-20" }}
            >
              <BsMusicNoteList className=" text-2xl text-[#F0E9E2]" />
            </Button>
          </div>
        </Link>
        <Link to="/todo" className="flex items-center">
          <div className="w-11 flex items-center overflow-hidden">
            <Button
              className="-mr-5 material-header-btn"
              style={{ marginLeft: "-20" }}
            >
              <BsCheckBox className=" text-2xl text-[#F0E9E2]" />
            </Button>
          </div>
        </Link>
        <div
          className="w-11 flex items-center overflow-hidden"
          onClick={() => {
            setIsFullScreen(!isFullScreen);
            screenfull.toggle();
          }}
        >
          <Button
            className="-mr-5 material-header-btn"
            style={{ marginLeft: "-20" }}
          >
            {isFullScreen ? (
              <BsFullscreenExit className=" text-2xl text-[#F0E9E2]" />
            ) : (
              <BsArrowsFullscreen className=" text-2xl text-[#F0E9E2]" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
