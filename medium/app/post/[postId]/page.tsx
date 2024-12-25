import axios from "axios";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostPage = async ({
  params,
}: {
  params: {
    postId: string;
  };
}) => {
  try {
    const response = await axios.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${params.postId}`
    );

    return (
      <div>
        <h1>{response.data.title}</h1>
        <p>{response.data.body}</p>
      </div>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return <div>Error loading post.</div>;
  }
};

export default PostPage;
