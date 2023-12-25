import PostList from "@/components/Post/PostList";

const Nintendo = () => {
  return (
    <main>
      <PostList filterArr={"nintendo"} bg="controllerbg" button={false} />
    </main>
  );
};

export default Nintendo;
