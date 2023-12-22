"use client";

import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const images = [
  {
    url: "sliderbg1",
    tag: "Consoles",
    text: "In the diverse world of gaming, the triumvirate of Xbox, PlayStation, and Nintendo brings together a spectrum of experiences.",
    bg: "bg-purple-500 ",
  },
  {
    url: "sliderbg2",
    tag: "PlayStation",
    text: "Sony's PlayStation has been a gaming juggernaut, captivating audiences with its groundbreaking consoles and exclusive titles.",
    bg: "bg-blue-800 ",
  },
  {
    url: "sliderbg3",
    tag: "Xbox Series S/X",
    text: "Xbox, Microsoft's gaming console, stands as a symbol of cutting-edge technology and immersive gaming experiences.",
    bg: "bg-green-700 ",
  },
  {
    url: "sliderbg4",
    tag: "Accessories",
    text: "Xbox accessories are more than just peripherals; they're the key to unlocking the full potential of your gaming console.",
    bg: "bg-yellow-700 ",
  },
];
const Slider = () => {
  const [index, setIndex] = useState(0);

  const nextImg = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevImg = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(0);
      } else {
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, 2500);
    return () => clearInterval(intervalId);
  }, [index]);
  return (
    <div className="max-w-[1800px] h-[50vh] w-[100vw] md:h-[75vh] lg:h-[80vh] lg:w-[100vw] xl:h-[100vh] xl:w-[100vw] relative   ">
      <div
        className={`w-full h-full bg-center ${images[index].url} bg-cover duration-500 flex items-end pl-2  `}
      >
        <div className="text-white mb-1 ml-1  flex flex-col items-start gap-2 md:gap-6 md:p-3 xl:pb-[3rem]">
          <span
            className={`fontbold ${images[index].bg} px-3 py-1  ml-2  text-center rounded-md `}
          >
            {images[index].tag}
          </span>
          <span className="fontbold  w-[95%] p-1 text-[0.8rem] md:text-[1.5rem] md:p-[5px]  xl:text-[1.7rem] xl:p-[10px] md:w-[70%]">
            {images[index].text}
          </span>
        </div>
      </div>
      <div
        onClick={prevImg}
        className={`absolute ${images[index].bg}  top-[48%] left-[2%] cursor-pointer text-white  rounded-[50%] p-1  transition ease-in-out`}
      >
        <BsChevronCompactLeft size={40} />
      </div>
      <div
        onClick={nextImg}
        className={`absolute top-[48%]  ${images[index].bg} right-[2%] cursor-pointer text-white rounded-[50%] p-1 transition ease-in-out`}
      >
        <BsChevronCompactRight size={40} />
      </div>
    </div>
  );
};

export default Slider;
