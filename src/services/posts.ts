import { PostDTO } from "@/Interface/Post";
import { getAPIClient } from "./api";
import axios from "axios";

async function apiRequest(
  endpoint: string,
  method: string,
  data?: Omit<PostDTO, "id">
) {
  const api = getAPIClient();
  try {
    const response = await api.request({
      url: endpoint,
      method,
      data,
    });

    return {
      status: response.status,
      message: response.statusText,
      data: response.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        status: error?.response?.status,
        message: error?.response?.statusText,
        data: null,
      };
    } else {
      console.error(error);
      throw new Error("Erro na requisição");
    }
  }
}

export const searchPost = async (id: number) => {
  return apiRequest(`/api/posts/${id}`, "GET");
};

export const putPost = async (data: PostDTO) => {
  return apiRequest(`/api/posts/${data.id}`, "PUT", data);
};

export const deletePost = async (id: number) => {
  return apiRequest(`/api/posts/${id}`, "DELETE");
};

export const patchPost = async (data: PostDTO) => {
  return apiRequest(`/api/posts/${data.id}`, "PATCH", data);
};

export const listPosts = async () => {
  return apiRequest("/api/posts", "GET");
};

export const createPost = async (data: Omit<PostDTO, "id">) => {
  return apiRequest("/api/posts", "POST", data);
};
