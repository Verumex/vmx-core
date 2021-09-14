import { FC } from "react";
import Head from "next/head";

const Home: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>VmX Core</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center text-gray-700 w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-blue">VmX Core!</span>
        </h1>

        <p className="mt-3 mb-5 text-2xl">Our team (in alphabetical order):</p>

        <p>
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>
      </main>
    </div>
  );
};

export default Home;
