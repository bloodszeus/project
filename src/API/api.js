import { axiosConfig } from ".";

export const SignInValidApi = async (userData) => {
  try {
    const response = await axiosConfig.post("/auth", {
      ...userData,
    });

    const token = response.data.token;
    localStorage.setItem("authToken", token);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const SignInApi = async () => {
  try {
    const response = await axiosConfig.get("/auth/user");
    return response;
  } catch (err) {
    return err.response;
  }
};

export const SignUpValidApi = async (userData) => {
  try {
    await axiosConfig.post("/users", {
      ...userData,
    });
  } catch (err) {
    return err.response;
  }
};

export const fetchPosts = async ({ params }) => {
  try {
    const response = await axiosConfig.get("/posts", {
      params: {
        ...params,
      },
    });
    return response;
  } catch (err) {
    return err.response;
  }
};

export const deletePostApi = async (id) => {
  try {
    await axiosConfig.delete(`/posts/${id}`, {
      headers: {
        accept: "application/json",
      },
    });
  } catch (err) {
    console.log(err.response.data);
    console.log(err.response.status);
  }
};

export const createNewPostAPI = async ({ data }) => {
  const response = await axiosConfig.post("/posts", {
    ...data,
  });
  return response;
};

export const fetchPostsByUserId = async (id) => {
  const response = await axiosConfig.get(`/posts?postedBy=${id}`);
  return response;
};

export const getPostById = async (postId) => {
  const response = await axiosConfig.get(`/posts/${postId}`);
  return response;
};

export const setLike = async (postId) => {
  const response = await axiosConfig.put(`posts/like/${postId}`);
  return response;
};

export const editPost = async ({ userData }) => {
  const { postId, ...content } = userData;
  const response = await axiosConfig.patch(`/posts/${postId}`, {
    ...content,
  });
  return response;
};

export const getUserData = async (userId) => {
  const response = await axiosConfig.get(`/users/${userId}`);
  return response.data;
};

export const updateUserData = async ({ newData }) => {
  const { userId, ...options } = newData;
  const response = await axiosConfig.patch(`/users/${userId}`, {
    ...options,
  });
  return response;
};

export const postImage = async () => {
  return await fetch("https://picsum.photos/400/?random=50");
};

export const fetchComments = async (postId) => {
  const response = await axiosConfig.get(`/comments/post/${postId}`);
  return response;
};

export const commentLike = async (commentId) => {
  await axiosConfig.put(`/comments/like/${commentId}`);
};

export const postCommentApi = async ({ allData }) => {
  const { post_id, ...data } = allData;
  const response = await axiosConfig.post(`/comments/post/${post_id}`, {
    ...data,
  });
  return response;
};

export const deleteCommentReq = async (commentId) => {
  await axiosConfig.delete(`/comments/${commentId}`);
};

export const patchCommentText = async ({ newData }) => {
  const { commentId, ...data } = newData;
  await axiosConfig.patch(`/comments/${commentId}`, {
    ...data,
  });
};

export const getUsernameReq = async (userId) => {
  const response = await axiosConfig.get(`users/${userId}`);
  return response;
};
