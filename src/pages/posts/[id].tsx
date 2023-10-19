import { PostDTO } from "@/Interface/Post";
import usePost from "@/hooks/usePost";
import { searchPost } from "@/services/posts";
import { GetServerSideProps } from "next";
import { useEffect } from "react";

interface PostProps {
  post: PostDTO;
}
export default function Post({ post }: PostProps) {
  const { setCurrentPost } = usePost();

  useEffect(() => {
    setCurrentPost(post);
  }, [post]);

  return (
    <main className="container mx-auto mt-4  py-0">
      <article className=" ">
        <h1 className="w-full text-center font-semibold text-2xl text-violet-800 border-b-2 pb-2">
          {post.title}
        </h1>
        <p className="mt-5 px-5 sm:px-2">{post.content}</p>
      </article>
    </main>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const post = await searchPost(Number(id));

  if (post?.status !== 200) {
    return {
      redirect: {
        destination: `/${post?.status}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      post: post.data,
    },
  };
};
