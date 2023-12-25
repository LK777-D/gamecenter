"use client";
import Link from "next/link";
import { motion } from "framer-motion";
type BannerProps = {
  bgimg: string;
  bg: string;
  linkText: string;
  mainText: string;
  color: string;
  shadow: string;
  to: string;
};
const Banner = ({
  bgimg,
  bg,
  linkText,
  mainText,
  color,
  shadow,
  to,
}: BannerProps) => {
  return (
    <motion.div
      className={`${bgimg} ${shadow} w-[20rem] rounded-md text-center h-[25rem] flex flex-col items-center justify-around gap-[17rem] `}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7 }}
    >
      <span className={`${color} text-3xl`}>{mainText}</span>
      <Link
        href={`${to}`}
        className={`${bg} transition hover:scale-[1.1] duration-100 ease-linear rounded-md px-7 py-2 text-white`}
      >
        {linkText}
      </Link>
    </motion.div>
  );
};

export default Banner;
