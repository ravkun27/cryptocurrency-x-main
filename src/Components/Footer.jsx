import React from "react";

const Footer = () => {

  const socials = {
    icons :[
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="16"
          height="16"
          viewBox="0 0 255.99359 255.99359"
          style={{ fill: "none" }}
          className=""
        >
          <g
            fill="#ffffff"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            style={{ mixBlendMode: "normal" }}
          >
            <g transform="scale(10.66667,10.66667)">
              <path
                d="M16.403,9h-2.403v-2c0,-1.032 0.084,-1.682 1.563,-1.682h0.868c0.552,0 1,-0.448 1,-1v-1.254c0,-0.523 -0.401,-0.97 -0.923,-1.005c-0.604,-0.041 -1.209,-0.06 -1.815,-0.059c-2.713,0 -4.693,1.657 -4.693,4.699v2.301h-2c-0.552,0 -1,0.448 -1,1v2c0,0.552 0.448,1 1,1l2,-0.001v8.001c0,0.552 0.448,1 1,1h2c0.552,0 1,-0.448 1,-1v-8.003l2.174,-0.001c0.508,0 0.935,-0.381 0.993,-0.886l0.229,-1.996c0.069,-0.593 -0.395,-1.114 -0.993,-1.114z"
                className="group-hover:fill-black"
              />
            </g>
          </g>
        </svg>,
      
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="16"
          height="16"
          viewBox="0 0 50 50"
          style={{ fill: "none" }}
        >
          <path
            fill="#ffffff"
            d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"
            className="group-hover:fill-black"
          ></path>
        </svg>
      ,
      <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="16"
          height="16"
          viewBox="0 0 32 32"
          style={{ fill: "none" }}
        >
          <path
            fill="#ffffff"
            d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"
            className="group-hover:fill-black"
          ></path>
        </svg>
      ,
    <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        style={{ fill: "none" }}
      >
        <path
          fill="#ffffff"
          d="M 2.8671875 3 L 9.7363281 12.818359 L 2.734375 21 L 5.3808594 21 L 10.919922 14.509766 L 15.460938 21 L 21.371094 21 L 14.173828 10.697266 L 20.744141 3 L 18.138672 3 L 12.996094 9.0097656 L 8.7988281 3 L 2.8671875 3 z"
          className="group-hover:fill-black"
        ></path>
      </svg>,
      
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="16"
          height="16"
          viewBox="0 0 48 48"
          style={{ fill: "none" }}
        >
          <path
            d="M5.83,23.616c12.568-5.529,28.832-12.27,31.077-13.203c5.889-2.442,7.696-1.974,6.795,3.434 
  c-0.647,3.887-2.514,16.756-4.002,24.766c-0.883,4.75-2.864,5.313-5.979,3.258c-1.498-0.989-9.059-5.989-10.7-7.163 
  c-1.498-1.07-3.564-2.357-0.973-4.892c0.922-0.903,6.966-6.674,11.675-11.166c0.617-0.59-0.158-1.559-0.87-1.086 
  c-6.347,4.209-15.147,10.051-16.267,10.812c-1.692,1.149-3.317,1.676-6.234,0.838c-2.204-0.633-4.357-1.388-5.195-1.676 
  C1.93,26.43,2.696,24.995,5.83,23.616z"
            fill="#ffffff"
            className="group-hover:fill-black"
          />
        </svg>,
      <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          style={{ fill: "none" }}
        >
          <path
            fill="#ffffff"
            className="group-hover:fill-black"
            d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 17 6 C 17.552 6 18 6.448 18 7 C 18 7.552 17.552 8 17 8 C 16.448 8 16 7.552 16 7 C 16 6.448 16.448 6 17 6 z M 12 7 C 14.757 7 17 9.243 17 12 C 17 14.757 14.757 17 12 17 C 9.243 17 7 14.757 7 12 C 7 9.243 9.243 7 12 7 z M 12 9 A 3 3 0 0 0 12 15 A 3 3 0 0 0 12 9 z"
          ></path>
        </svg>
    ] 
  };

  return (
    <footer className="py-8 h-48">
      <div className="h-[0.5px] md:h-[0.4px] w-full bg-white"></div>
      <div className="flex justify-center items-center h-[80%] w-full">
        <div className="flex justify-around items-center gap-3">
        {socials.icons.map((icon, index) => (
          <div className="bg-gray-800 h-8 w-8 rounded-sm flex justify-center items-center cursor-pointer group hover:bg-white transition-colors duration-300" key={index}>
            <a href="#" target="#">{icon}</a>
          </div>
        ))}
        </div>
      </div>
        <div className="flex justify-center pb-5">
          Copyright © Cryptocurrency X | Made By
        </div>
    </footer>
  );
};

export default Footer;
