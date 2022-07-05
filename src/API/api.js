import { axiosConfig } from ".";

export const SignInValidApi = async (email, password) => {
  try {
    const response = await axiosConfig.post("/auth", {
      email,
      password,
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

export const SignUpValidApi = async ({ email, name, password }) => {
  try {
    await axiosConfig.post("/users", {
      email,
      name,
      password,
    });
  } catch (err) {
    console.log(err.response);
    return err.response;
  }
};

export const fetchPosts = async (limit, search) => {
  try {
    const response = await axiosConfig.get("/posts", {
      params: {
        limit: limit,
        search: search,
      },
    });
    return response;
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else {
      console.log(`Error: ${err.massage}`);
    }
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

export const createNewPostAPI = async (title, fullText, description) => {
  const response = await axiosConfig.post("/posts", {
    title,
    fullText,
    description,
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

export const editPost = async (postId, title, fullText, description) => {
  const response = await axiosConfig.patch(`/posts/${postId}`, {
    title,
    fullText,
    description,
  });
  return response;
};

export const getUserData = async (userId) => {
  const response = await axiosConfig.get(`/users/${userId}`);
  return response.data;
};
