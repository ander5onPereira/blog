import { getAPIClient } from "./api";

interface PostDTO {
  id: number;
  title: string;
  content: string;
}

export const searchPost = async (id: number) => {
  const api = getAPIClient();
  return api
    .get(`/api/posts/${id}`)
    .then((res) => {
      return {
        status: res.status,
        message: res.statusText,
        data: res.data,
      };
    })
    .catch((err) => {
      console.error(err);

      return {
        status: err.response.status,
        message: err.response.statusText,
        data: null,
      };
    });
};
export const putPost = async (data: PostDTO) => {
  const api = getAPIClient();
  return api
    .put(`/api/posts/${data.id}`, data)
    .then((res) => {
      return {
        status: res.status,
        message: res.statusText,
        data: res.data,
      };
    })
    .catch((err) => {
      console.error(err);

      return {
        status: err.response.status,
        message: err.response.statusText,
        data: null,
      };
    });
};

export const deletePost = async (id: number) => {
  const api = getAPIClient();
  return api
    .delete(`/api/posts/${id}`)
    .then((res) => {
      return {
        status: res.status,
        message: res.statusText,
        data: res.data,
      };
    })
    .catch((err) => {
      console.error(err);

      return {
        status: err.response.status,
        message: err.response.statusText,
        data: null,
      };
    });
};
export const patchPost = async (data: PostDTO) => {
  const api = getAPIClient();
  return api
    .patch(`/api/posts/${data.id}`, data)
    .then((res) => {
      return {
        status: res.status,
        message: res.statusText,
        data: res.data,
      };
    })
    .catch((err) => {
      console.error(err);

      return {
        status: err.response.status,
        message: err.response.statusText,
        data: null,
      };
    });
};
export const listPosts = async () => {
  const api = getAPIClient();
  return api
    .get("/api/posts")
    .then((res) => {
      return {
        status: res.status,
        message: res.statusText,
        data: res.data,
      };
    })
    .catch((err) => {
      console.error(err);

      return {
        status: err.response.status,
        message: err.response.statusText,
        data: null,
      };
    });
};

export const createPost = async (data: Omit<PostDTO, "id">) => {
  const api = getAPIClient();
  return api
    .post(`/api/posts`,data)
    .then((res) => {
      return {
        status: res.status,
        message: res.statusText,
        data: res.data,
      };
    })
    .catch((err) => {
      console.error(err);

      return {
        status: err.response.status,
        message: err.response.statusText,
        data: null,
      };
    });
};
