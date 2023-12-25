"use client";
import Card from "@/components/Post/Card";
import PostList from "@/components/Post/PostList";
import { useFirebaseCtx } from "@/context/firebaseContext";
import { v4 as uuidv4 } from "uuid";
const MyPosts = () => {
  const { posts, user, deletePost } = useFirebaseCtx();
  const myPosts = posts.filter((post) => user?.email === post.user);
  return (
    <section>
      <PostList bg="controllerbg" filterArr="myPosts" button={true} />
    </section>
  );
};

export default MyPosts;
