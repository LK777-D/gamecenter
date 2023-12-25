import PostList from "@/components/Post/PostList";

const Posts = () => {
  return (
    <main>{<PostList filterArr="all" bg="controllerbg" button={false} />}</main>
  );
};

export default Posts;
