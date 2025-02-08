import DeletePostButton from "./DeletePostButton";

const Post = ({ id, title, content, authorName }) => {
  return (
    <div className=" border border-1 flex flex-col p-4 w-[250px] h-[250px] bg-red-300 gap-2 rounded-md justify-center">
      <h2 className=" text-xl font-bold ">Title: {title}</h2>
      <p className=" text-sm">Description: {content}</p>
      <p className=" text-sm font-semibold ">Username: {authorName}</p>
      <DeletePostButton postId={id} />
    </div>
  );
};

export default Post;
