import prisma from "@/lib/prisma";
import Post from "./__components/Post";
import Link from "next/link";

async function getPost() {
  const allPosts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return allPosts;
}

export default async function Home() {
  const posts = await getPost();

  return (
    <div className=" flex items-center justify-center flex-col gap-4 h-screen">
      <Link href="/add-post" className=" p-4 border bg-green-500 rounded-md">
        Add Post
      </Link>
      <h1 className=" text-3xl font-bold">Feed</h1>
      <div className=" flex flex-wrap items-center justify-between w-full px-4">
        {posts?.map((p) => (
          <Post
            key={p.id}
            id={p.id}
            title={p.title}
            content={p.content}
            authorName={p.author.name}
          />
        ))}
      </div>
    </div>
  );
}
