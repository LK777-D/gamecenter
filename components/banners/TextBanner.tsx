"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import img1 from "@/assets/svg1.svg";
import img2 from "@/assets/svg2.svg";
import img3 from "@/assets/svg3.svg";
import { once } from "events";
const TextBanner = () => {
  return (
    <motion.div
      className=" flex flex-col fontskr text-gradient  text-[1.5rem] md:text-[1.8rem] items-center justify-center xl:text-[2.45rem]"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7 }}
    >
      <span>Buy and Sell</span>
      <span>Consoles and Its Accessories</span>
      <div className="flex animate-bounce mt-5 gap-2">
        <Image alt="img" src={img1} width={50} height={50} />
        <Image alt="img" src={img2} width={50} height={50} />
        <Image alt="img" src={img3} width={50} height={50} />
      </div>
    </motion.div>
  );
};

export default TextBanner;
