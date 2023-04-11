import React from "react";
import { useParams } from "react-router-dom";
import { BoData } from "./BlogData";

const Post = () => {
  let { id } = useParams();

  const poste = BoData.find((i) => i.id === Number(id));
  return (
    <div className="single-post">
      <img src={poste.ImageUrl} alt="" />
    </div>
  );
};

export default Post;
