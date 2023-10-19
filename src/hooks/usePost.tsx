import { useContext } from "react";
import PostContext from "@/contexts/PostContext";

const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("useToast deve ser usado dentro de um PostProvider");
  }
  return context;
}

export default usePost;
