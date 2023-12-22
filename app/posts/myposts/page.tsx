"use client";
import Card from "@/components/Post/Card";
import { useFirebaseCtx } from "@/context/firebaseContext";
import { v4 as uuidv4 } from "uuid";
const MyPosts = () => {
  const { posts, user, deletePost } = useFirebaseCtx();
  const myPosts = posts.filter((post) => user?.email === post.user);
  return (
    <section className="flex flex-col gap-10 controllerbg py-[3rem]  md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1400px] mx-auto">
      {myPosts.map((post) => (
        <>
          <Card
            key={uuidv4()}
            title={post.title}
            imgLink={post.imgLink}
            description={post.description}
            price={post.price}
            category={post.category}
            user={post.user}
          />
        </>
      ))}
    </section>
  );
};

export default MyPosts;
