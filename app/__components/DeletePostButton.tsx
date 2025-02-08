"use client";
const DeletePostButton = ({ postId: any }) => {
  // eslint-disable-line no-unused-vars
  const handleClick = async () => {
    try {
      await fetch(`/api/post/${postId}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button onClick={handleClick} className=" p-4 border bg-green-400">
      Delete
    </button>
  );
};

export default DeletePostButton;
