import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ blog }) {
  return (
    <div>
      <header className="w-full bg-red-500">
        <div className="container mx-auto py-4">
          <Link href="/">
            <a className="font-sans text-white font-bold text-3xl">N's Tech Blog</a>
          </Link>
        </div>
      </header>
      <div className="container mx-auto bg-gray-100">
        <ul className="grid grid-cols-3 gap-4">
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <footer className="w-full bg-red-500">
        <div className="container mx-auto py-4">
          <p className="font-sans text-white text-md text-center">
            N's BlogはWeb開発に関するトピックを発信するブログです。
          </p>
          <p className="font-sans text-white text-md text-center">
            このサイトはNext.js, MicroCMSで構築されています。
          </p>
        </div>
      </footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};