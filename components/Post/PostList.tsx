"use client";
import { useFirebaseCtx } from "@/context/firebaseContext";
import Card from "./Card";
import Loader from "../Loader";
type PostListProps = {
  filterArr: string;
  bg: string;
  button: boolean;
};
const PostList = ({ filterArr, bg, button }: PostListProps) => {
  const { posts, deletePost, user } = useFirebaseCtx();
  const xbox = posts.filter((post) =>
    post.category.toLowerCase().includes("xbox")
  );
  const ps = posts.filter((post) =>
    post.category.toLowerCase().includes("playstation")
  );
  const nintendo = posts.filter((post) =>
    post.category.toLowerCase().includes("nintendo")
  );
  const myPosts = posts.filter((post) => user?.email === post.user);

  let postsArray = [];

  if (filterArr === "all") {
    postsArray = posts;
  } else if ((filterArr = "xbox")) {
    postsArray = xbox;
  } else if ((filterArr = "playstation")) {
    postsArray = ps;
  } else if ((filterArr = "myPosts")) {
    postsArray = myPosts;
  } else {
    postsArray = nintendo;
  }

  return (
    <section className={` flex flex-col items-center ${bg}  `}>
      <h1 className="text-white text-3xl fontskr pt-5 underline text-left lg:text-[3rem] lg:py-10  ">
        Items ({postsArray.length})
      </h1>
      <div className="  py-10 flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto max-w-[1400px] ">
        {postsArray.length > 0 ? (
          postsArray.map((post) => (
            <Card
              key={post.id}
              category={post.category}
              price={post.price}
              title={post.title}
              imgLink={post.imgLink}
              user={post.user}
              id={post.id}
              description={post.description}
              deletePost={() => deletePost(post.id)}
              button={button}
            />
          ))
        ) : (
          <div className="mx-auto">
            <Loader />
          </div>
        )}
      </div>
    </section>
  );
};

export default PostList;
