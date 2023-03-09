import Head from "next/head";
import { FC } from "react";

import Format from "../components/Format";
import Standup from "../components/Standup";

const Home: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>VmX Core</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center text-gray-700 w-full flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold mb-3">
          <span className="text-blue">Core Platform Standup 🙋</span>
        </h1>
        <Standup />
        <Format />
      </main>
    </div>
  );
};

export default Home;
