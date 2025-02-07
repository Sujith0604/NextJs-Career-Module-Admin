import DeletePostButton from "./DeletePostButton";

const Post = ({ id, title, content, authorName }) => {
  return (
    <div className=" border border-1 flex flex-col p-4 gap-2">
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{authorName}</p>
      <DeletePostButton postId={id} />
    </div>
  );
};

export default Post;
