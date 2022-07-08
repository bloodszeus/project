import { CreatePostModal } from "components/CreatePostModal";
import { Loader } from "components/Loader";
import { Header } from "../Header";
import { UserPosts } from "./components/UserPosts";

import { Body } from "./style";

export const UserPostsLayout = ({
  posts,
  deletePost,
  status,
  showPost,
  pathError,
  userId,
  setLike,
  editPost,
}) => {
  return (
    <>
      <Header />
      <Body>
        <CreatePostModal />

        {status === "succeeded" ? (
          posts.map((post, index) => (
            <UserPosts
              editPost={editPost}
              post={post}
              index={index}
              showPost={showPost}
              deletePost={deletePost}
              setLike={setLike}
              userId={userId}
              key={post._id}
            />
          ))
        ) : status === "loading" ? (
          <Loader />
        ) : null}
        {!pathError && <h2>Path error</h2>}
        {!posts.length && status === "succeeded" && <h2>Posts not found</h2>}
      </Body>
    </>
  );
};
