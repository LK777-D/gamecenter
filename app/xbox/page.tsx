import PostList from "@/components/Post/PostList";

const Xbox = () => {
  return (
    <main>
      <PostList filterArr={"xbox"} bg="controllerbg" button={false} />
    </main>
  );
};

export default Xbox;
