"use client";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const percentage1 = 90;
const percentage2 = 85;
const percentage3 = 80;
const percentage4 = 75;

const CircularBar = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 md:max-xl:grid-cols-2 md:justify-around justify-items-center items-center gap-20 mt-12">
      <div className="w-[200px] h-[200px]">
        <CircularProgressbar
          value={percentage1}
          text={`${percentage1}%`}
          strokeWidth={3}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "round",

            // Text size
            textSize: "8px",
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(207,31,31, ${percentage1 / 100})`,
            textColor: "#fff",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
        />
        <p className="pt-4 font-bold">REACT JS</p>
      </div>

      <div className="w-[200px] h-[200px]">
        <CircularProgressbar
          value={percentage2}
          text={`${percentage2}%`}
          strokeWidth={3}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "round",

            // Text size
            textSize: "8px",
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(207,31,31, ${percentage2 / 100})`,
            textColor: "#fff",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
        />
        <p className="pt-4 font-bold">NEXT JS</p>
      </div>

      <div className="w-[200px] h-[200px]">
        <CircularProgressbar
          value={percentage3}
          text={`${percentage3}%`}
          strokeWidth={3}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "round",

            // Text size
            textSize: "8px",
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(207,31,31, ${percentage3 / 100})`,
            textColor: "#fff",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
        />
        <p className="pt-4 font-bold">JAVASCRIPT</p>
      </div>

      <div className="w-[200px] h-[200px]">
        <CircularProgressbar
          value={percentage4}
          text={`${percentage4}%`}
          strokeWidth={3}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "round",

            // Text size
            textSize: "8px",
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(207,31,31, ${percentage4 / 100})`,
            textColor: "#fff",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
        />
        <p className="pt-4 font-bold">EXPRESS JS</p>
      </div>
    </div>
  );
};

export default CircularBar;
