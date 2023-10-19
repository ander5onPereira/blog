import { useToast } from "@/hooks/useToast";
import { createPost } from "@/services/posts";
import { useRouter } from "next/router";
import React, { useState, ChangeEvent } from "react";

export default function Create() {
  const { showToast } = useToast();
  const router = useRouter();

  const [editedPost, setEditedPost] = useState({
    title: "",
    content: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedPost({ ...editedPost, [name]: value });
  };
  const handleSave = async () => {
    const { title, content } = editedPost;
    if (!title.trim() || !content.trim()) {
      showToast({type:"alert", message:"Por favor, preencha todos os campos."});
    } else {
      try {
        
        const response = await createPost(editedPost);
        if (response.status === 201) {
          showToast({type:"success", message:"Novo post cadastrado"});
          return router.replace("/");
        } else {
          showToast({type:"error", message:"Ocorreu um erro no cadastro."});
        }
      } catch (error) {
        console.error("Erro no cadastro do post:", error);
        showToast({type:"error", message:"Ocorreu um erro no cadastro."});
      }
    }
  };
  return (
    <div className="flex flex-col max-w-xl pt-4 px-5 sm:px-0 mx-auto w-full justify-center items-center h-full">
      <div className="w-full my-2">
        <label className="flex" htmlFor="title">
          Título
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Digite o título para o post"
          className=" border-2 rounded  w-full p-2 drop-shadow-md focus:outline-none focus:border-violet-800"
          value={editedPost.title}
          onChange={handleInputChange}
        />
      </div>

      <div className="w-full my-2">
        <label className="flex" htmlFor="content">
          Conteúdo
        </label>
        <textarea
          name="content"
          id="content"
          placeholder="Digite o conteúdo do post"
          className="border-2 rounded  w-full h-96 p-2 drop-shadow-md focus:outline-none focus:border-violet-800"
          value={editedPost.content}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex justify-end w-full">
        <button
          onClick={handleSave}
          className="bg-violet-800 w-36 py-2 rounded-lg text-white hover:bg-violet-900">
          Salvar
        </button>
      </div>
    </div>
  );
}
