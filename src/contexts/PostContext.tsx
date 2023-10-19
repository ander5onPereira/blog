import { createContext, ReactNode, useState } from "react";

interface PropsProvider {
  children: ReactNode;
}
interface PostProps {
  id: string;
  title: string;
  content: string;
}
interface PostContextProps {
  setCurrentPost: (currentPost: PostProps) => void;
  post: PostProps | null;
}
const PostContext = createContext({} as PostContextProps);

export function PostProvider({ children }: PropsProvider) {
  const [post, setPost] = useState<PostProps | null>(null);
  const setCurrentPost = (currentPost: PostProps) => {
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
