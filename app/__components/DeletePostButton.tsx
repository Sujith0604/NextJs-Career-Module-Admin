"use client";
const DeletePostButton = ({ postId }) => {
  const handleClick = async () => {
    try {
      await fetch(`/api/post/${postId}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error(error);
    }
  };
  return <button onClick={handleClick}>Delete</button>;
};

export default DeletePostButton;
