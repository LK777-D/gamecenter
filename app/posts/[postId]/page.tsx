"use client";
import Image from "next/image";
import { useFirebaseCtx } from "@/context/firebaseContext";
const SinglePost = ({ params }: any) => {
  const { posts } = useFirebaseCtx();
  const postId = params.postId;
  const selectedPosts = posts.filter((post) => post.id === postId);
  console.log(postId, "hello");
  return (
    <main className="controllerbg">
      <div className=" md:hidden text-white">
        {selectedPosts.map((post) => (
          <div key={post.id}>
            <div>
              <div className="w-full">
                <Image
                  alt="img"
                  width={500}
                  height={500}
                  src={post.imgLink}
                  className="object-cover w-full"
                />
              </div>
              <div className="flex justify-around py-5 font-extralight ">
                <span>{post.user}</span>
                <span>Posted: 27.12.2023</span>
              </div>
            </div>

            <div className="h-[1px] w-full bg-white"></div>
            <div>
              <h1 className="text-3xl  text-center ">{post.title}</h1>
              <div className="my-4 ml-5">
                <span className="  text-2xl border border-blue-900 px-7 py-1  rounded-md bg-blue-700 text-white ">
                  {post.price}$
                </span>
              </div>
              <div className="flex flex-col gap-3 w-[94%] mx-auto py-4">
                <span className="fontskr  ">Item Description</span>
                <span>
                  {post.description} Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Esse culpa qui rem. Ea dolorum incidunt
                  eveniet nobis cupiditate dignissimos modi.{" "}
                </span>
              </div>
              <div className="flex justify-around"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-white hidden md:block  ">
        {selectedPosts.map((post) => (
          <div key={post.id} className="flex items-center gap-10 p-10 w-full">
            <Image
              alt="img"
              className="w-[60%] rounded-md"
              src={post.imgLink}
              width={1000}
              height={1000}
            />
            <div className="flex flex-col items-start gap-10 ">
              <span className="text-3xl">{post.title}</span>
              <span>
                {post.description} Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Esse culpa qui rem. Ea dolorum incidunt
                eveniet nobis cupiditate dignissimos modi
              </span>
              <div>
                <span>{post.user}</span>
                <span>Posted: 17.11.2023</span>
              </div>
              <span className="border border-white rounded-md px-5 py-1 ">
                {post.price}$
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default SinglePost;
