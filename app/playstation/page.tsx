import PostList from "@/components/Post/PostList";

const PlayStation = () => {
  return (
    <main>
      <PostList filterArr={"ps"} bg="controllerbg" button={false} />
    </main>
  );
};

export default PlayStation;
