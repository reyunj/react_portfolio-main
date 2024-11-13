import React from "react";
import port from "../assets/images/project-1.png";
import gym from "../assets/images/project-2.jpg";
import weather from "../assets/images/project-3.jpg";
import agdp from "../assets/images/agdp.png"
import lux from "../assets/images/lux.png"
import magis from "../assets/images/magis.png"
import overlay from "../assets/images/overlay.png"
import exam from "../assets/images/exam.png"


const Project = () => {
  const portfolios = [
    {
      id: 1,
      src: port,
      live_link: "https://my-porfolio-five-jet.vercel.app/",
    },
    {
      id: 2,
      src: gym,
      live_link: "https://gym-typescript-seven.vercel.app/",
    },
    {
      id: 3,
      src: weather,
      live_link: "https://weather-plum-seven.vercel.app/",
    },
    {
      id: 4,
      src: agdp,
      live_link: "https://agdptech.com/",
    },
    {
      id: 5,
      src: magis,
      live_link: "https://magis-website.netlify.app/",
    },
    {
      id: 6,
      src: lux,
      live_link: "https://www.luxauto.io/",
    },
    {
      id: 7,
      src: overlay,
      live_link: "https://obs-setup.vercel.app/",
    },
    {
      id: 8,
      src: exam,
      live_link: "https://junrey-final-exam.vercel.app/",
    },
  
  ];

  return (
    <div
      name="portfolio"
      className="py-10 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Portfolio</span>
        </h3>
          <p className="text-gray-400 mt-3 text-lg">Check out some of my work right here</p>
        </div>

        <div className="w-full grid sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, live_link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="Site"
                width={400}
               
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex justify-center">
                <a href = {live_link} target ="_blank" className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg style: 400">
                  Visit Live
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
