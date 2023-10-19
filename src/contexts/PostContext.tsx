import { PostDTO } from "@/Interface/Post";
import { createContext, ReactNode, useState } from "react";

interface PropsProvider {
  children: ReactNode;
}
interface PostContextProps {
  setCurrentPost: (currentPost: PostDTO | null) => void;
  post: PostDTO | null;
}
const PostContext = createContext({} as PostContextProps);

export function PostProvider({ children }: PropsProvider) {
  const [post, setPost] = useState<PostDTO | null>(null);
  const setCurrentPost = (currentPost: PostDTO | null) => {
    setPost(currentPost);
  };

  return (
    <PostContext.Provider
      value={{
        setCurrentPost,
        post,
      }}>
      {children}
    </PostContext.Provider>
  );
}
export const PostConsumer = PostContext.Consumer;
export default PostContext;
