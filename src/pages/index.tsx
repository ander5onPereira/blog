import Head from "next/head";

import Link from "next/link";
import { CutText } from "@/functions/string";
import { GetStaticProps } from "next";
import { listPosts } from "@/services/posts";
import ButtonActionAdd from "@/components/ButtonActionAdd";
import Separator from "@/components/Separator";
import { PostDTO } from "@/Interface/Post";
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
          <div key={post.id} className="hover:bg-slate-50 ">
            <Link
              href={{
                pathname: `/posts/${post.id}`,
                query: { title: "Post" },
              }}>
              <div className="my-1 w-full">
                <h2 className="text-violet-800 px-4 sm:px-0 text-center sm:text-left">
                  <strong>{post.title}</strong>
                </h2>
                <p className="px-4 sm:px-0">{CutText(post.content, 100)}</p>
              </div>
              <Separator />
            </Link>
          </div>
        ))}
      </div>
      <ButtonActionAdd path="/posts/create" pathTitle="Novo Post" />
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
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
