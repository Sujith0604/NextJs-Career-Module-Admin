"use client";

import Link from "next/link";

import { useState } from "react";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      setTitle("");
      setContent("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className=" flex flex-col items-center justify-center h-screen gap-4">
      <Link href="/" className=" p-4 rounded-md bg-green-500">
        Home
      </Link>
      <h1 className=" text-3xl font-bold">Add Post</h1>
      <form
        onSubmit={handleSubmit}
        className=" bg-green-400 flex flex-col p-4 gap-4 rounded-md"
      >
        <div className=" flex items-center justify-between">
          <label htmlFor="title" className=" text-xl font-bold">
            Title:
          </label>
          <input
            type="text"
            name="title"
            className=" border"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className=" flex items-center justify-between">
          <label htmlFor="content" className=" text-xl font-bold">
            Content:
          </label>
          <input
            type="text"
            name="title"
            className=" border"
            required
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className=" p-4 border rounded-md bg-green-500">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
