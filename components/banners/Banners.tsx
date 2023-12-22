import Link from "next/link";

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
    <div
      className={`${bgimg} ${shadow} w-[20rem] rounded-md text-center h-[25rem] flex flex-col items-center justify-around gap-[17rem] `}
    >
      <span className={`${color} text-3xl`}>{mainText}</span>
      <Link
        href={`${to}`}
        className={`${bg} transition hover:scale-[1.1] duration-100 ease-linear rounded-md px-7 py-2 text-white`}
      >
        {linkText}
      </Link>
    </div>
  );
};

export default Banner;
