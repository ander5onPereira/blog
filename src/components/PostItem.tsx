import { PostDTO } from "@/Interface/Post";
import { CutText } from "@/functions/string";
import Link from "next/link";
import Separator from "./Separator";

interface PostItemProps {
  post: PostDTO;
}
export default function PostItem({ post }: PostItemProps) {
  return (
    <div className="hover:bg-slate-50">
      <Link
        href={{
          pathname: `/posts/${post.id}`,
          query: { title: "Post" },
        }}>
        <div className="my-1 w-full">
          <h2 className="text-violet-800 px-4 sm:px-0 text-center sm:text-left">
            <strong>{post.title}</strong>
          </h2>
          <p className="px-4 sm:px-0">{CutText(post.content, 180)}</p>
        </div>
        <Separator />
      </Link>
    </div>
  );
}
