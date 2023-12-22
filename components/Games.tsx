import Image from "next/image";
import bg1 from "@/assets/formemo.png";
import bg2 from "@/assets/vggame.png";
import Link from "next/link";
const Games = () => {
  return (
    <section className="flex flex-col fontskr items-center">
      <span className="text-xl lg:text-3xl lg:pt-20  text-gradient">
        Tired Looking For an Items ?
      </span>
      <span className="text-xl lg:text-3xl lg:pb-20  text-gradient">
        Play Game-Center Mini Games
      </span>
      <div className="flex flex-col gap-3 items-center md:flex-row md:items-start w-full md:px-10  ">
        <Link
          href={"/memo"}
          className=" transition hover:blur-[1px] hover:scale-[1.025] duration-150 ease-linear py-5 flex flex-col  items-center md:items-start   "
        >
          <Image
            width={600}
            height={500}
            alt="img"
            src={bg1}
            className="rounded-md w-[90%] md:w-[24rem] md:h-[18.5rem] "
          />
          <span className=" text-purple-700 transition hover:underline duration-150 ease-linear fontskr">
            Meme Memory
          </span>
        </Link>
        <Link
          href={"/guessVideoGame"}
          className=" transition hover:blur-[1px] hover:scale-[1.025] duration-150 ease-linear py-5 flex flex-col  items-center md:items-start   "
        >
          <Image
            width={600}
            height={500}
            alt="img"
            src={bg2}
            className="rounded-md w-[90%] md:w-[24rem] "
          />
          <span className=" text-purple-700 transition hover:underline duration-150 ease-linear fontskr">
            Guess The Video Game
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Games;
