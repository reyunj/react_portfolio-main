import React from "react";
import port from "../assets/images/project-1.png";
import gym from "../assets/images/project-2.jpg";
import weather from "../assets/images/project-3.jpg";


const Project = () => {
  const portfolios = [
    {
      id: 1,
      src: port,
      live_link: "https://reyunj.ml/",
    },
    {
      id: 2,
      src: gym,
      live_link: "https://junrey-gym.ml/",
    },
    {
      id: 3,
      src: weather,
      live_link: "https://junrey-weather.ml/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bbg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Portfolio</span>
        </h3>
          <p className="text-gray-400 mt- text-lg">Check out some of my work right here</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, live_link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex justify-center">
                <a href = {live_link} target ="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
