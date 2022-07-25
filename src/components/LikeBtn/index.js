import { AuthContext } from "context";
import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { userData } from "../../store/userSlice";
import { Like, LikeBlock } from "./style";

export const LikeButton = ({ post, setLike, height, width }) => {
  const [likes, setLikes] = useState(post.likes);
  const user = useSelector(userData);
  const userId = user._id;
  const { logged } = useContext(AuthContext);

  const handleClick = () => {
    if (likes.some((el) => el === userId)) {
      const removeLike = likes.filter((el) => el !== userId);
      setLikes(removeLike);
    } else setLikes([...likes, userId]);
    setLike(post._id);
  };

  return (
    <>
      {logged && (
        <LikeBlock>
          <p>{likes.length}</p>

          <Like
            height={height}
            width={width}
            $liked={likes.some((el) => el === userId)}
            onClick={handleClick}
          />
        </LikeBlock>
      )}
    </>
  );
};
