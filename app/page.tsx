// import Banner from "@/components/Banner";
// import TextBanner from "@/components/TextBanner";
// import PostsList from "@/components/post/PostsList";
import Image from "next/image";
import PostList from "@/components/Post/PostList";
import Banner from "@/components/banners/Banners";
import TextBanner from "@/components/banners/TextBanner";
import Games from "@/components/Games";
export default function Home() {
  return (
    <main className="">
      <section className="py-[9rem] consolesbg">
        <div className="pb-[7rem]  py-[2rem] xl:pb-[9rem] xl:py-[3.5rem]">
          <TextBanner />
        </div>

        <div className="flex consolesbg flex-col md:flex-row md:px-2  gap-10 md:gap-20 items-center py-5 justify-center">
          <Banner
            bgimg={`xboxbg`}
            bg="bg-green-500"
            linkText="Xbox"
            mainText={"Xbox One|Series X/S"}
            color={"text-green-400"}
            shadow={"shadow-green-500"}
            to="xbox"
          />
          <Banner
            bgimg={`nintendobg`}
            bg="bg-blue-900"
            linkText="Nintendo"
            mainText={"Nintendo Switch "}
            color={"text-white"}
            shadow={"shadow-red-700"}
            to="nintendo"
          />
          <Banner
            bgimg={`psbg`}
            bg="bg-purple-500"
            linkText="PlayStation"
            mainText={"PlayStation 4/4Pro | 5 "}
            color={"text-purple-500"}
            shadow={"shadow-purple-500"}
            to="playstation"
          />
        </div>
      </section>
      <div className="controllerbg">
        <PostList filterArr="all" bg="" />

        <Games />
      </div>
    </main>
  );
}
