import React from "react";
import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    id: "001",
    title: "Looking for article writter",
    excerpt:
      "All Asssam Chess Association(AACA) is looking for chess people interested in writing about chess news in Assam.",
  },
  {
    id: "002",
    title: "Aquid Wasim Ahmed memorial tournament",
    excerpt:
      "The 1st Aquid Wasim Ahmed memorial tournament concluded on 11 Sept.",
  },
  {
    id: "003",
    title: "Welcome to Assam Chess",
    excerpt:
      "This is the official site for All Asssam Chess Association(AACA).",
  },
];

export default function FeaturedBlogs() {
  return (
    <div className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            From AACA
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Latest news and blogs from Assam Chess.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <Image
                  width={100}
                  height={100}
                  className="h-48 w-full object-cover"
                  src={"/images/aaca_logo.jpg"}
                  alt="Loading..."
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <Link href={`/blog/${post.id}`} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.excerpt}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
