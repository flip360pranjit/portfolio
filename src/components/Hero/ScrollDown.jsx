import React from "react";
import "./ScrollDown.css";

function ScrollDown({ handleClick }) {
  return (
    <div
      onClick={(e) => handleClick(e)}
      className="flex items-center gap-2 cursor-pointer"
    >
      {/* <svg
        width="20px"
        height="100%"
        viewBox="0 0 247 390"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "1.5",
        }}
      >
        <path
          id="wheel"
          d="M123.359,79.775l0,72.843"
          style={{
            fill: "none",
            stroke: "#6c17e1",
            strokeWidth: "20px",
          }}
        />
        <path
          id="mouse"
          d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
          style={{
            fill: "none",
            stroke: "#6c17e1",
            strokeWidth: "20px",
          }}
        />
      </svg> */}
      <svg width="30" height="27" viewBox="0 0 50 130">
        <rect
          id="scroll"
          x="0"
          y="5"
          rx="35"
          ry="35"
          width="70"
          height="120"
          stroke="#6c17e1"
          fill="none"
          strokeWidth="4"
        ></rect>
        <circle
          id="circle--shape"
          cx="35"
          cy="32"
          r="8"
          fill="#6c17e1"
        ></circle>
      </svg>
      <p className="font-exo font-semibold text-sm bg-gradient-to-r from-actionTo to-actionFrom inline-block text-transparent bg-clip-text">
        Scroll down
      </p>
    </div>
  );
}

export default ScrollDown;
