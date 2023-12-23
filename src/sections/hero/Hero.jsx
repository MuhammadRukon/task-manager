import React from "react";
import banner from "../../assets/taskmanagerBanner.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="hero min-h-[80vh]"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Your Task Manager</h1>
          <p className="mb-5">
            Keep us with your tasks. We prepared a task management website just
          </p>
          <Link
            to={"/task-manager"}
            className="btn bg-primary border-0 text-[#fff] hover:text-primary hover:border-primary hover:border-[2px] hover:bg-[white]"
          >
            Let's Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
