import Head from "next/head";

import { GetServerSideProps } from "next";
import { listPosts } from "@/services/posts";
import ButtonActionAdd from "@/components/ButtonActionAdd";
import { PostDTO } from "@/Interface/Post";
import PostItem from "@/components/PostItem";
interface PostsProps {
  posts: PostDTO[];
}
export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <div className="w-full mx-auto mb-0 container mt-4">
        {posts?.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
      <ButtonActionAdd path="/posts/create" pathTitle="Novo Post" />
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await listPosts();
  if (posts.status !== 200) {
    return {
      redirect: {
        destination: `/${posts.status}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      posts: posts.data,
    },
  };
};
